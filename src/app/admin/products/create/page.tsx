/* eslint-disable @next/next/no-img-element */
"use client";

import FileField from "@/components/formik/file-field";
import PrimaryButton from "@/components/primary-button";
import { Field, Form, Formik, FormikProps } from "formik";

interface Fields {
  name: string;
  description: string;
  price: number;
  purchased: boolean;
  files: FileList | null;
}

const initialValues: Fields = {
  name: "",
  description: "",
  price: 0,
  purchased: false,
  files: null,
};

const handleSubmit = (values: Fields) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

const displayImages = (files: FileList | null) => {
  if (!files) return null;

  const images = Array.from(files).map((file) => (
    <img
      key={file.name}
      src={URL.createObjectURL(file)}
      alt={file.name}
      className="w-20 h-20 object-cover rounded-md"
    />
  ));

  return <div className="flex gap-2">{images}</div>;
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
          <Form className="flex flex-col w-full max-w-lg mx-auto gap-6 mb-12">
            <div className="flex flex-col">
              <label htmlFor="name">name</label>
              <Field
                id="name"
                name="name"
                placeholder="enter name of product"
                className="input"
                required
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
                required
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

            <FileField
              name="files"
              id="files"
              label="add pictures to display"
              multiple
              accept="image/jpeg, image/png"
            />

            {displayImages(values.files)}

            <PrimaryButton text="create product" submit />
          </Form>
        )}
      </Formik>
    </>
  );
}
