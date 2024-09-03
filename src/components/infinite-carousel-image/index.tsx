import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
}

export default function InfiniteCarouselImage({ src, alt, width }: Props) {
  return (
    <Image
      className="mx-4 inline"
      src={src}
      alt={alt}
      width={width}
      height="0"
    />
  );
}
