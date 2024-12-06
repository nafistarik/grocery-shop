import Image from "next/image";
import { useCart } from "../context/cartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product, event);
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col min-h-[350px] justify-between"
      onClick={() => {
        console.log("Navigating to product details:", product.productName);
      }}
    >
      <div className="flex-grow flex flex-col items-center">
        <Image
          alt={product.productName}
          src={product.images[0]}
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <h3 className="text-lg font-bold mt-4">{product.productName}</h3>
        <p className="text-gray-600">${product.price}/kg</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-white hover:bg-orange-500 hover:text-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg mt-4 w-full"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
