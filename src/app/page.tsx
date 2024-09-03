import AccordianSection from "@/components/accordion-section";
import InfiniteCarouselImage from "@/components/infinite-carousel-image";
import PageWrapper from "@/components/layout/page-wrapper";
import TemplateSection from "@/components/section";
import Stat from "@/components/stat";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const brands = (
    <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
      <InfiniteCarouselImage
        src="/brands/adidas.svg"
        alt="Adidas Logo"
        width={50}
      />
      <InfiniteCarouselImage
        src="/brands/apple.svg"
        alt="Apple Logo"
        width={30}
      />
      <InfiniteCarouselImage
        src="/brands/asos.svg"
        alt="ASOS Logo"
        width={75}
      />
      <InfiniteCarouselImage
        src="/brands/carhartt.svg"
        alt="Carhartt Logo"
        width={150}
      />
      <InfiniteCarouselImage src="/brands/h&m.svg" alt="H&M Logo" width={50} />
      <InfiniteCarouselImage
        src="/brands/nike.svg"
        alt="Nike Logo"
        width={50}
      />
      <InfiniteCarouselImage
        src="/brands/onitsukatiger.svg"
        alt="Onitsuka Tiger Logo"
        width={50}
      />
      <InfiniteCarouselImage
        src="/brands/razer.svg"
        alt="Razer Logo"
        width={50}
      />
      <InfiniteCarouselImage
        src="/brands/uniqlo.svg"
        alt="Uniqlo Logo"
        width={50}
      />
    </div>
  );

  return (
    <PageWrapper>
      <TemplateSection className="hero bg-slate-100">
        <div className="hero-content space-y-6 flex flex-col">
          <h2 className="text-3xl font-bold">
            welcome to george&apos;s online junk yard :-&#41;{" "}
          </h2>
          <p>
            here you can find a bunch of random stuff for sale that i don&apos;t
            want or need anymore.
          </p>
          <p>
            yeah sure i could probably sell this stuff on a better platform like
            ebay but...
          </p>
          <p>
            having a personal shop like this one is kinda{" "}
            <span className="italic font-bold">cool</span>. ¯\_(ツ)_/¯
          </p>
          <div className="animate-bounce">
            <Link className="animate-rainbow-text" href="/shop">
              » click here to start shopping! «
            </Link>
          </div>
        </div>
      </TemplateSection>
      <section className="w-full bg-slate-100 border-y border-gray-500">
        <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          {brands} {brands} {brands} {brands}
        </div>
      </section>
      <TemplateSection className="bg-slate-200">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-full sm:max-w-min stats stats-vertical bg-neutral-100 shadow rounded-md">
            <Stat
              title="products sold"
              value="0"
              description="pls buy something :("
            />
            <Stat
              title="satisfied customers"
              value="0"
              description="pls buy something :("
            />
            <Stat
              title="products available"
              value="3"
              description="pick something out"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Image
              className="transition-all hover:scale-105 hover:cursor-help"
              src="/georgeinchopperhat.png"
              alt="George in Tony Tony Chopper Hat"
              width={200}
              height={0}
            />
            <p className="max-w-lg">
              <div className="animate-left-and-right inline-block">&larr;</div>{" "}
              here&apos;s a picture of me in a tony tony chopper hat for social
              proof that i won&apos;t just take your money and run away :3
            </p>
          </div>
        </div>
      </TemplateSection>
      <TemplateSection>
        <div className="flex gap-5 items-center">
          <Image
            className="transition-all hover:scale-105 hover:cursor-help hidden sm:block h-max"
            src="/funnygeorge.png"
            alt="George looking funny"
            width={200}
            height={0}
          />
          <div className="flex flex-col gap-2 max-w-lg">
            <h3 className="text-xl font-bold">some good questions...</h3>
            <AccordianSection
              title="who am i?"
              content="i am a computer science student studying in the university of sheffield. i've been year for about 2+ years now and i've been buying quite a bit of stuff during my time here... so i needed somewhere to sell some of the stuff i don't need anymore. welcome to my online junk yard!"
            />
            <AccordianSection
              title="what are my sizes?"
              content="just know that i'm a decently built 5'5'' asian man so... i'm a small to medium for tops and my waist is around 30 inches. my feet are around 25-25.5cm long so i'm a size 7-8 in uk sizes. and my trousers are around 30 inches long as well. i hope that helps! sidenote: check the description of the item because it might be someone else's item that i'm selling!"
            />
            <AccordianSection
              title="i have a question about an item!"
              content="feel free to ask me on instagram @george_huum. i'm very active on there and will usually respond almost instantly."
            />
          </div>
        </div>
      </TemplateSection>
    </PageWrapper>
  );
}
