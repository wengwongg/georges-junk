import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 md:p-5 mb-6 border-b border-gray-500">
      <h1 className="text-2xl md:text-3xl justify-self-center">
        <Link href="/">george&apos;s junk 🗑️</Link>
      </h1>
      <nav className="flex gap-2 md:gap-4">
        <Link className="hover:underline" href="/shop">
          shop
        </Link>
        <Link className="hover:underline" href="/cart">
          cart (0)
        </Link>
        <Link className="hover:underline" href="">
          contact me
        </Link>
      </nav>
    </header>
  );
}
