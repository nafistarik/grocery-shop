"use client";

import { useEffect, useState } from "react";

export default function UploadProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleAddProduct = async () => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Products</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
          className="block w-full mb-4 p-2 border rounded"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
