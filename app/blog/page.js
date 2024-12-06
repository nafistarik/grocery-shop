"use client";
import Image from "next/image";
import coconut1 from "../assets/coconut (1).png";
import coconut2 from "../assets/coconut (2).png";
import coconut3 from "../assets/coconut (3).png";
import coconut4 from "../assets/coconut (4).png";
import coconut5 from "../assets/coconut (5).png";
import star from "../assets/star.png";
import cart from "../assets/Vector cart.png";
import heart from "../assets/Vector love.png";

export default function Blog() {
  return (
    <div className="bg-gray-50 text-black">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 p-4">
            <Image
              alt="A fresh coconut"
              className="w-full rounded-lg"
              height="400"
              src={coconut1}
              width="600"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-green-100 text-green-500 font-bold inline-block px-3 py-1 rounded-full mb-4">
              Fruits
            </div>
            <h1 className="text-4xl font-bold mb-4">Coconut</h1>
            <div className="flex items-center mb-2">
              <div className="flex items-center text-yellow-400">
                <Image
                  alt="A star"
                  className="w-full rounded-lg"
                  height="10"
                  src={star}
                  width="10"
                />
                <Image
                  alt="A star"
                  className="w-full rounded-lg"
                  height="10"
                  src={star}
                  width="10"
                />
                <Image
                  alt="A star"
                  className="w-full rounded-lg"
                  height="10"
                  src={star}
                  width="10"
                />
                <Image
                  alt="A star"
                  className="w-full rounded-lg"
                  height="10"
                  src={star}
                  width="10"
                />
                <Image
                  alt="A star"
                  className="w-full rounded-lg"
                  height="10"
                  src={star}
                  width="10"
                />
              </div>
              <span className="ml-2 text-gray-400">5.0 (1 review)</span>
            </div>
            <div className="text-2xl font-bold text-orange-500 mb-4">
              $6.3/kg
            </div>
            <p className="mb-4">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
            
            <div className="flex items-center mb-4">
              <button className="bg-gray-300 text-black px-4 py-2 rounded mr-2 flex items-center gap-2">
                <Image
                  alt="A star"
                  className="w-4 h-4"
                  height="10"
                  src={heart}
                  width="10"
                />
                Save as favorite
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2">
                <Image
                  alt="A star"
                  className="w-4 h-4"
                  height="10"
                  src={cart}
                  width="10"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex border-b border-gray-600">
            <button className="px-4 py-2 bg-green-500 text-white rounded-tl rounded-tr">
              Description
            </button>
            <button className="px-4 py-2 text-gray-400">Reviews (1)</button>
          </div>
          <div className="bg-white p-4 rounded-b-lg text-black">
            <p>
              Our coconuts are sustainably grown, ensuring the best quality and
              taste. Each coconut is handpicked and carefully prepared, offering
              you the freshest product possible. Rich in healthy fats,
              electrolytes, and essential nutrients, coconuts provide both
              hydration and nourishment. Whether you're using the water, flesh,
              or milk, our coconuts bring versatility to your kitchen while
              supporting healthy living.
            </p>
            <p className="mt-4">
              Perfect for smoothies, desserts, curries, and more — let the
              natural sweetness of the coconut elevate your recipes. Enjoy the
              tropical goodness in its purest form, directly from nature.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-center mb-8">
            <p className="text-green-600 text-lg font-bold bg-green-100 inline-block px-3 mb-4 rounded ">
              Our Products
            </p>
            <h1 className="text-4xl font-bold text-gray-800">
              Related products
            </h1>
            <p className="text-gray-600 mt-2">
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center text-black">
              <Image
                alt="A fresh kiwi cut in half showing the green flesh inside"
                className="w-full mb-4 rounded-lg"
                height="150"
                src={coconut5}
                width="150"
              />
              <h3 className="text-xl font-bold mb-2">Kiwi</h3>
              <p className="text-orange-500 mb-4">$5.3/kg</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg text-center text-black">
              <Image
                alt="A fresh orange cut in half showing the orange flesh inside"
                className="w-full mb-4 rounded-lg"
                height="150"
                src={coconut4}
                width="150"
              />
              <h3 className="text-xl font-bold mb-2">Orange</h3>
              <p className="text-orange-500 mb-4">$4.2/kg</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg text-center text-black">
              <Image
                alt="A fresh guava cut in half showing the pink flesh inside"
                className="w-full mb-4 rounded-lg"
                height="150"
                src={coconut3}
                width="150"
              />
              <h3 className="text-xl font-bold mb-2">Guava</h3>
              <p className="text-orange-500 mb-4">$2.2/kg</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg text-center text-black">
              <Image
                alt="A fresh eggplant cut in half showing the white flesh inside"
                className="w-full mb-4 rounded-lg"
                height="150"
                src={coconut2}
                width="150"
              />
              <h3 className="text-xl font-bold mb-2">Eggplant</h3>
              <p className="text-orange-500 mb-4">$1.2/kg</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
