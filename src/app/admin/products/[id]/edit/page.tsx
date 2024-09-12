/* eslint-disable @next/next/no-img-element */
"use client";

import { Option } from "@/components/form/multi-select";
import MultiSelectField from "@/components/formik/multi-select-field";
import Modal from "@/components/modal";
import PrimaryButton from "@/components/primary-button";
import { ProductImage } from "@prisma/client";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Fields } from "../../create/page";
import { useParams } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";

const emptyInitialValues: Fields = {
  name: "",
  description: "",
  price: 0,
  purchased: false,
  imageIds: [],
};

export default function EditProductPage() {
  const [initialValues, setInitialValues] =
    useState<Fields>(emptyInitialValues);
  const [imageOptions, setImageOptions] = useState<Option[]>([]);
  const params = useParams();

  const { id } = params;

  const fetchProduct = async () => {
    const response = await axios.get(`/api/product/${id}`);
    const product = response.data.data;
    const initialValues: Fields = {
      name: product.name,
      description: product.description,
      price: product.price,
      purchased: product.purchased,
      imageIds: product.images.map((image: ProductImage) => image.id),
    };
    setInitialValues(initialValues);
  };

  const fetchImageOptions = async () => {
    const response = await axios.get("/api/product-images");
    const data = response.data;
    const images = data.data;

    // need to have unselected image options as well as current selected image options
    setImageOptions(
      images
        .filter(
          (image: ProductImage) =>
            image.productId === null ||
            initialValues.imageIds.includes(image.id)
        )
        .map((image: ProductImage) => ({
          label: image.publicId,
          value: image.id,
        }))
    );
  };

  // fetch product at the start
  useEffect(() => {
    fetchProduct();
  }, []);

  // once the product has been fetched, update imageOptions
  useEffect(() => {
    fetchImageOptions();
  }, [initialValues]);

  const handleSubmit = async (
    values: Fields,
    { resetForm }: { resetForm: () => void }
  ) => {
    const response = await axios.put(`/api/product/${id}`, {
      name: values.name,
      description: values.description,
      price: values.price,
      purchased: values.purchased,
      imageIds: values.imageIds,
    });
    if (response.status === 200) {
      const modal = document.getElementById(
        "success_modal"
      ) as HTMLDialogElement;
      modal?.showModal();
      resetForm();
      fetchImageOptions();
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">edit product</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form className="flex flex-col w-full max-w-lg mx-auto gap-6 mb-10">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="enter name of product"
                className="input dark:text-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold">
                description
              </label>
              <Field
                id="description"
                name="description"
                as="textarea"
                className="h-28 textarea text-base dark:text-white"
                placeholder="describe the product with ; as delimiters for bullet points"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">
                price
              </label>
              <Field
                id="price"
                name="price"
                placeholder="enter price"
                type="number"
                step=".01"
                className="input dark:text-white"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="purchased" className="font-semibold">
                purchased?
              </label>
              <Field
                id="purchased"
                name="purchased"
                type="checkbox"
                className="toggle mx-auto"
              />
            </div>

            <div className="flex flex-col">
              <MultiSelectField
                key={imageOptions.length}
                label="display images"
                name="imageIds"
                id="imageIds"
                options={imageOptions}
              />
              <span>
                Current images selected:{" "}
                <div className="flex">
                  {formik.values.imageIds.map((imageId) => {
                    const publicId = imageOptions.find(
                      (option) => Number(option.value) === Number(imageId)
                    )?.label;

                    if (publicId) {
                      return (
                        <img
                          key={imageId}
                          src={getCldImageUrl({ src: publicId })}
                          alt={publicId}
                          className="w-16 h-16"
                        />
                      );
                    }
                  })}
                </div>
              </span>
            </div>

            <PrimaryButton text="submit" submit />
          </Form>
        )}
      </Formik>
      <Modal
        id="success_modal"
        heading="product successfully edited"
        message="make further edits or go back to the index page."
      />
    </>
  );
}
