import Image from "next/image";
import { Star } from "react-feather";

type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const maxRating = 5,
    minRating = 1;
  const rating = Math.floor(
    Math.random() * (maxRating - minRating + 1) + minRating
  );

  const hasPrime = Math.random() < 0.5;

  return (
    <div className="relative flex flex-col m-5 bg-white z-20 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{product.category}</p>
      <Image
        className="object-contain"
        src={product.image}
        height={200}
        width={200}
        alt={product.title}
      />
      <h4 className="my-3">{product.title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star className="text-yellow-500" key={i} />
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

      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
}
