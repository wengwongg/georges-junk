import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-auto text-center flex flex-col justify-center items-center px-5">
      <div className="mb-9">
        <p>welcome to george&apos;s online junk yard :-&#41; </p>
        <br />
        <p>
          here you can find a bunch of stuff that i don&apos;t want anymore.
        </p>
        <br />
        <p>
          yeah sure i could probably sell this stuff on a better platform like
          ebay but...
        </p>
        <br />
        <p>
          having a personal shop like this one is kinda{" "}
          <span className="italic font-bold">cool</span>. ¯\_(ツ)_/¯
        </p>
        <br />
        <div className="animate-bounce">
          <Link className="animate-rainbow-text" href="/shop">
            » click here to start shopping! «
          </Link>
        </div>
      </div>
      <div className="flex gap-3 max-w-xl">
        <Image
          className="rounded shadow-lg transition-all hover:scale-105 hover:cursor-help border border-gray-500"
          src="/georgeinchopperhat.png"
          alt="George in Tony Tony Chopper Hat"
          width={200}
          height={0}
        />
        <p>
          &larr; here&apos;s a picture of me in a tony tony chopper hat for
          social proof that i won&apos;t just take your money and run away.
        </p>
      </div>
    </main>
  );
}
