"use client";

import CarouselButton from "@/components/carousel-button";
import { useState } from "react";

interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="carousel snap-none w-full h-[30rem] rounded border border-gray-700">
        {images.map((image, index) => (
          <div
            key={index}
            id={`item-${index + 1}`}
            className={`carousel-item w-full bg-cover bg-center`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        ))}
      </div>
      <div className="flex justify-center gap-2 py-2">
        {images.map((_, index) => (
          <CarouselButton
            key={index}
            index={index}
            id={`item-${index + 1}`}
            onClick={() => setActiveIndex(index)}
            active={activeIndex === index}
          />
        ))}
      </div>
    </>
  );
}
