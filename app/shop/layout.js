"use client";

import CartModal from "../components/cartModal";
import Footer from "../components/footer";
import Login from "../components/login";
import Navbar from "../components/navbar";
import Register from "../components/register";
import { useNavbarContext } from "../context/navbarContext";

const Layout = ({ children }) => {
  const { modalState, setModalState, isCartOpen, openCart, closeCart } = useNavbarContext();
  
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="bg-green-400"><Navbar setModalState={setModalState} openCart={openCart} /></div>

      {modalState === "login" && <Login  setModalState={setModalState} />}

        {modalState === "register" && (
          <Register setModalState={setModalState} />
        )}
        {isCartOpen && <CartModal closeCart={closeCart} />}

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
