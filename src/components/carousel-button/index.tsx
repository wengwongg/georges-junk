"use client";

interface Props {
  index: number;
  id: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CarouselButton({ index, id, active, onClick }: Props) {
  return (
    <button
      onClick={() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        onClick && onClick();
      }}
      className={`btn btn-xs btn-ghost border border-gray-700 shadow hover:border-gray-700 ${
        active && "btn-active"
      }`}
    >
      {index + 1}
    </button>
  );
}
