import Banner from "@/components/products/Banner";
import ProductFeed from "@/components/products/ProductFeed";

export default async function Home() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return (
    <div>
      <Banner />
      <ProductFeed products={products} />
    </div>
  );
}
