"use client";

import Image from "next/image";
import { Search, ShoppingCart, Menu } from "react-feather";
import { headerLinks } from "@/data/header";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { selectItems } from "@/redux/slices/basketSlice";
import { useSelector } from "react-redux";

export default function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-5 px-5">
        <Link
          href="/"
          className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            className="object-contain cursor-pointer w-28"
            src="https://links.papareact.com/f90"
            width={120}
            height={30}
            alt="Logo"
            priority
          />
        </Link>

        <div
          className="hidden sm:flex items-center h-10 rounded-md flex-grow 
        cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none px-4"
            type="text"
            placeholder="Search Products..."
          />
          <Search className="text-sm mx-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mr-2 whitespace-nowrap">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="link">
            <p className="hover:underline">
              {session ? `Hello ${session?.user?.name}` : "Sign In"}
            </p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <Link
            href="/checkout"
            className="relative link flex items-center gap-1 p-1 md:p-0">
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center 
            rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCart className="text-sm" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <div className="link flex items-center">
          <Menu />
          <p>All</p>
        </div>
        {headerLinks.map((link, index) => (
          <div
            key={index}
            className={`link ${
              link.hidden && "hidden lg:inline-flex"
            } flex items-center`}>
            <p>{link.title}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
