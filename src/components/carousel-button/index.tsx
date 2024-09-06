"use client";

interface Props {
  index: number;
  id: string;
}

export default function CarouselButton({ index, id }: Props) {
  return (
    <button
      onClick={() =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
      className="btn btn-xs btn-ghost border border-gray-700"
    >
      {index + 1}
    </button>
  );
}
