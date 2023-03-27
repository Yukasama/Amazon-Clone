import Product from "./Product";

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

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      {products.slice(5, products.length).map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
