"use client";

import { addToBasket } from "@/redux/slices/basketSlice";
import Image from "next/image";
import { Star } from "react-feather";
import { useDispatch } from "react-redux";

type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const rating =
    product.price > 100
      ? 5
      : product.price > 80
      ? 4
      : product.price > 60
      ? 3
      : product.price > 40
      ? 2
      : 1;
  const hasPrime = product.price > 30 ? true : false;

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    //@ts-ignore
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-20 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image
        className="object-contain w-40 h-40"
        src={product.image}
        height={200}
        width={200}
        alt={product.title}
      />
      <h4 className="my-3">{product.title}</h4>
      <div className="flex">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              className="text-yellow-500"
              fill={i < rating ? "rgb(234,179,8)" : "white"}
              key={i}
            />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <div className="mb-5">${product.price}</div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src="https://links.papareact.com/fdw"
            height={48}
            width={48}
            alt="Prime Logo"
          />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add To Basket
      </button>
    </div>
  );
}
