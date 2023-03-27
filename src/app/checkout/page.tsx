"use client";

import CheckoutProduct from "@/components/products/CheckoutProduct";
import { selectItems, selectTotal } from "@/redux/slices/basketSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div>
      <div className="flex-grow m-5 shadow-sm">
        <Image
          className="object-contain w-[1020px] h-[250px]"
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          alt="Amazon Banner"
        />
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your Amazon Basket is empty."
              : "Your Shopping Basket"}
          </h1>
          {items.map((item: Product, i: number) => (
            <CheckoutProduct key={i} product={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col bg-white p-10 shadow-md">
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length}) items:
              <span className="font-bold"> ${total}</span>
            </h2>
            <button
              disabled={!session}
              className={`button mt-2 
            ${
              !session &&
              "from-gray-400 to-gray-500 border-gray-200 text-gray-300"
            }`}>
              {!session ? "Sign In To Checkout" : "Proceed To Checkout"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
