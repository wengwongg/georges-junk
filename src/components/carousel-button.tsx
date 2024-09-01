"use client";

interface Props {
  index: number;
  productName: string;
}

export default function CarouselButton({ index, productName }: Props) {
  return (
    <button
      key={index}
      onClick={() =>
        document
          ?.getElementById(`${productName}-item${index + 1}`)
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
      className="btn btn-xs btn-ghost border border-gray-500"
    >
      {index + 1}
    </button>
  );
}
