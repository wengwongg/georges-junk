import Link from "next/link";
import HeaderCartLink from "./header-cart-link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 sm:p-4 md:p-5 bg-stone-950 border-b border-gray-700 text-slate-50">
      <h1 className="text-xl sm:text-2xl md:text-3xl justify-self-center font-bold">
        <Link href="/">george&apos;s junk 💩</Link>
      </h1>
      <nav className="flex gap-2 md:gap-4">
        <Link className="hover:underline" href="/shop">
          shop
        </Link>
        <HeaderCartLink />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            admin
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-md z-[1] w-max p-1 shadow-md bg-gray-800 mt-2"
          >
            <li>
              <a className="hover:underline" href="/admin/products">
                products
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
