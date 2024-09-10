/* eslint-disable @next/next/no-img-element */
"use client";

import Modal from "@/components/modal";
import PrimaryButton from "@/components/primary-button";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

export interface Fields {
  name: string;
  description: string;
  price: number;
  purchased: boolean;
}

const initialValues: Fields = {
  name: "",
  description: "",
  price: 0,
  purchased: false,
};

export default function CreateProductPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    values: Fields,
    { resetForm }: { resetForm: () => void }
  ) => {
    const response = await axios.post("/api/products", {
      name: values.name,
      description: values.description,
      price: values.price,
      purchased: values.purchased,
    });

    if (response.status === 500) {
      setError(response.data.message);
    } else if (response.status === 200) {
      const modal = document.getElementById(
        "success_modal"
      ) as HTMLDialogElement;
      modal?.showModal();
      resetForm();
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">create new product</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {() => (
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

            <PrimaryButton text="create product" submit />

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </Form>
        )}
      </Formik>
      <Modal
        id="success_modal"
        heading="product successfully created"
        message="create another or go back to index page."
      />
    </>
  );
}
