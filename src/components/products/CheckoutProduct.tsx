"use client";

import Image from "next/image";
import { Star } from "react-feather";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/redux/slices/basketSlice";

type Props = {
  product: Product;
};

export default function CheckoutProduct({ product }: Props) {
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

  const removeItemFromBasket = () => {
    //@ts-ignore
    dispatch(removeFromBasket({ id: product.id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        className="object-contain w-40 h-40"
        src={product.image}
        height={200}
        width={200}
        alt={product.title}
      />

      <div className="col-span-3 mx-5">
        <p>{product.title}</p>
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
        <p className="text-xs my-2 line-clamp-3">{product.description}</p>
        <div className="mb-5">${product.price}</div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://links.papareact.com/fdw"
              height={48}
              width={48}
              loading="lazy"
              alt="Prime Logo"
            />
            <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <button onClick={addItemToBasket} className="button mt-auto">
          Add To Basket
        </button>
        <button onClick={removeItemFromBasket} className="button mt-auto">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}
