import Image from "next/image";
import { Search, ShoppingCart, Menu } from "react-feather";

export default function Header() {
  const links = [
    {
      title: "Prime Video",
    },
    {
      title: "Amazon Business",
    },
    {
      title: "Today's Deals",
    },
    {
      title: "Electronics",
      hidden: true,
    },
    {
      title: "Food & Grocery",
      hidden: true,
    },
    {
      title: "Prime",
      hidden: true,
    },
    {
      title: "Buy Again",
      hidden: true,
    },
    {
      title: "Shopper Toolkit",
      hidden: true,
    },
    {
      title: "Health & Personal Care",
      hidden: true,
    },
  ];
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-5 px-5">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            className="object-contain cursor-pointer"
            src="https://links.papareact.com/f90"
            width={120}
            height={30}
            alt="Logo"
          />
        </div>

        <div
          className="hidden sm:flex items-center h-10 rounded-md flex-grow 
        cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none px-4"
            type="text"
          />
          <Search className="text-sm mx-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mr-2 whitespace-nowrap">
          <div className="link">
            <p>Hello Yukasama</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center gap-1 p-1 md:p-0">
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center 
            rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCart className="text-sm" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <div className="link flex items-center">
          <Menu />
          <p>All</p>
        </div>
        {links.map((link, index) => (
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
