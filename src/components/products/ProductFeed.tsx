import Product from "./Product";
import Image from "next/image";

type Props = {
  products: Product[];
};

export default function ProductFeed({ products }: Props) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28 lg:-mt-44 xl:-mt-52 mx-auto">
      {products.slice(0, 4).map((product, index) => (
        <Product key={index} product={product} />
      ))}

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>

      <Image
        className="md:col-span-full mx-auto"
        src="https://links.papareact.com/dyz"
        width={1700}
        height={600}
        loading="lazy"
        alt="Product Banner"
      />

      {products.slice(5, products.length).map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
