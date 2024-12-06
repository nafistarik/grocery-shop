"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/Logo.png";
import cart from "../assets/Vector cart.png";
import heart from "../assets/Vector love.png";
import { useCart } from "../context/cartContext";

const Navbar = ({ setModalState, openCart }) => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-28 font-bold">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          alt="Fresh Harvests logo"
          className="mr-2"
          height="40"
          src={logo}
          width="40"
        />
        <span className="text-2xl font-bold text-gray-800">Fresh Harvests</span>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex space-x-6 md:space-x-20 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto z-10 top-[70px] md:top-auto shadow-md md:shadow-none`}
      >
        <Link
          className="block pl-10 pr-4 py-2 md:p-0 text-gray-500 relative hover:text-green-900 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-width after:duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="block px-4 py-2 md:p-0 text-gray-500 relative hover:text-green-900 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-width after:duration-300"
          href="/shop"
        >
          Shop
        </Link>
        <Link
          className="block px-4 py-2 md:p-0 text-gray-500 relative hover:text-green-900 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-width after:duration-300"
          href="/about"
        >
          About us
        </Link>
        <Link
          className="block px-4 py-2 md:p-0 text-gray-500 relative hover:text-green-900 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-width after:duration-300"
          href="/blog"
        >
          Blog
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center space-x-8">
        <Link
          className="text-white hover:text-green-900 hidden lg:flex items-center"
          href="/"
        >
          <Image
            alt="Favorites icon"
            className="mr-2"
            src={heart}
            objectFit="contain"
            style={{ height: "14px", width: "auto" }}
          />
          <p>Favorites</p>
        </Link>
        <button
          className="text-white hover:text-green-900 relative flex items-center"
          onClick={openCart}
        >
          <Image
            alt="Cart icon"
            className="mr-2"
            style={{ height: "18px", width: "auto" }}
            src={cart}
          />
          <p className="lg:flex hidden">Cart</p>
          <span className="absolute top-[-8px] left-2 bg-red-500 text-white text-xs rounded-full px-1">
            {cartItems.length}
          </span>
        </button>
        <button
          className="text-white px-4 py-2 border-2 hover:border-green-700 rounded hover:bg-green-700 lg:flex hidden"
          href="/"
          onClick={() => setModalState("register")}
        >
          Sign in
        </button>
      </div>

      {/* Hamburger Menu Icon (Visible on Small Screens) */}
      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
