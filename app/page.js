"use client";
import Background from "./assets/Bg.png";
import AboutUs from "./components/aboutUs";
import Blogs from "./components/blogs";
import CartModal from "./components/cartModal";
import Footer from "./components/footer";
import FreshProducts from "./components/freshProducts";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Offer from "./components/offer";
import Register from "./components/register";
import Testimonial from "./components/testimonial";
import { useNavbarContext } from "./context/navbarContext";

export default function Page() {
  const { modalState, setModalState, isCartOpen, openCart, closeCart } = useNavbarContext();
  return (
    <div>
      <div style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}>
        {/* <Image
          alt="Fresh Harvests logo"
          className="absolute top-0 left-0 -z-50 w-full m-0 p-0"
          src={Background}
        /> */}
        <Navbar setModalState={setModalState} openCart={openCart} />
        <Home />

        {modalState === "login" && <Login  setModalState={setModalState} />}

        {modalState === "register" && (
          <Register setModalState={setModalState} />
        )}
        {isCartOpen && <CartModal closeCart={closeCart} />}
      </div>
      <FreshProducts/>
      <AboutUs/>
      <Offer/>
      <Testimonial/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
