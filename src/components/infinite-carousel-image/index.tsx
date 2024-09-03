interface Props {
  src: string;
  alt: string;
  width: number;
}

export default function InfiniteCarouselImage({ src, alt, width }: Props) {
  return <img className="mx-4 inline" src={src} alt={alt} width={width} />;
}
