import Banner from "@/components/Banner";
import ProductFeed from "@/components/products/ProductFeed";
import Header from "@/components/layout/Header";

export default async function page() {
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}
