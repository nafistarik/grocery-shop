import Link from "next/link";
import { useEffect, useState } from "react";
import ProductItem from "../components/productItem";

const FreshProducts = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "6751516f9c52879c1fde6558", name: "Fruits" },
    { id: "6751569e0e539396658e60a9", name: "Salad" },
    { id: "6751584feaeaa5cc21bbe21b", name: "Vegetables" },
  ];

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(
        "https://api-fresh-harvest.code-commando.com/api/v1/products",
        {
          method: "GET",
          // headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      const result = await response.json();
      if (result.success) {
        setProductsArray(result.data);
        setFilteredProducts(result.data.slice(0, 8)); // Default to first 8 products
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredProducts(productsArray.slice(0, 8));
    } else {
      const filtered = productsArray.filter(
        (product) => product.categoryId === categoryId
      );
      setFilteredProducts(filtered.slice(0, 8));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <p className="text-green-600 text-lg font-bold bg-green-100 inline-block px-3 mb-4 rounded ">
          Our Products
        </p>
        <h1 className="text-4xl font-bold text-gray-800">Our Fresh Products</h1>
        <p className="text-gray-600 mt-2">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => handleFilter("all")}
          className={`${
            selectedCategory === "all"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800 border border-gray-300"
          } px-4 py-2 rounded`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilter(category.id)}
            className={`${
              selectedCategory === category.id
                ? "bg-green-500 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            } px-4 py-2 rounded`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link href={`/blog/${product.id}`} key={product.id}><ProductItem  product={product} /></Link>
        ))}
      </div>
      <div class="text-center mt-8">
        <Link href="/shop" class=" border-2 border-orange-500  text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded">
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default FreshProducts;
