"use client";

import PrimaryButton from "@/components/primary-button";
import { Field, Form, Formik, FormikProps } from "formik";

interface Fields {
  name: string;
  description: string;
  price: number;
  purchased: boolean;
  files: File[];
}

const initialValues: Fields = {
  name: "",
  description: "",
  price: 0,
  purchased: false,
  files: [],
};

const handleSubmit = (values: Fields) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

export default function CreateProductPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-5">create new product</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values }) => (
          <Form className="flex flex-col w-full max-w-lg mx-auto gap-6">
            <div className="flex flex-col">
              <label htmlFor="name">name</label>
              <Field
                id="name"
                name="name"
                placeholder="enter name of product"
                className="input"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description">description</label>
              <Field
                id="description"
                name="description"
                as="textarea"
                className="h-28 textarea text-base"
                placeholder="describe the product with ; as delimiters for bullet points"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="price">price</label>
              <Field
                id="price"
                name="price"
                placeholder="enter price"
                type="number"
                step=".01"
                className="input"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="purchased">purchased?</label>
              <Field
                id="purchased"
                name="purchased"
                type="checkbox"
                className="toggle mx-auto"
              />
            </div>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">
                  files for the product
                </span>
              </div>
              <Field
                id="files"
                name="files"
                type="file"
                className="file-input file-input-bordered"
                multiple
              />
            </label>

            <PrimaryButton text="create product" submit />
          </Form>
        )}
      </Formik>
    </>
  );
}
