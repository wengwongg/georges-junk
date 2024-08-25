import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 md:p-5 mb-2">
      <h1 className="text-2xl md:text-3xl justify-self-center">
        george's junk 🗑️
      </h1>
      <nav className="flex gap-2 md:gap-4">
        <Link className="hover:underline" href="/">
          shop
        </Link>
        <Link className="hover:underline" href="/">
          cart (0)
        </Link>
        <Link className="hover:underline" href="">
          contact me
        </Link>
      </nav>
    </header>
  );
}
