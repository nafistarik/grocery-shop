import Image from "next/image";
import twitter from "../assets/1.png";
import facebook from "../assets/2.png";
import instagram from "../assets/3.png";
import apple from "../assets/ApplePay.jpg";
import appstore from "../assets/appstore.png";
import call from "../assets/call.png";
import googleplay from "../assets/googleplay.png";
import location from "../assets/location.png";
import logo from "../assets/Logo.png";
import mail from "../assets/mail.png";
import paypal from "../assets/Paypal.jpg";
import visa from "../assets/Visa.jpg";

export default function Footer() {
  return (
    <div className="bg-gray-100 mt-16">
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <Image
                  alt="Logo"
                  className="mr-2"
                  height="40"
                  src={logo}
                  width="40"
                />
                <span className="text-2xl font-bold text-gray-800">
                  Fresh Harvests
                </span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  Download App:
                </span>
                <div className="flex mt-2">
                  <Image
                    alt="Download on the App Store"
                    className="mr-2"
                    height="50"
                    src={appstore}
                    width="130"
                  />
                  <Image
                    alt="Get it on Google Play"
                    height="50"
                    src={googleplay}
                    width="130"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Quick links 1
              </h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Shop
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Detail Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Quick links 2
              </h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Favorites
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Cart
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Sign in
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-gray-800" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact us
              </h3>
              <ul className="text-gray-600 mb-4">
                <li className="mb-2 flex items-center gap-2">
                  <Image alt="Apple Pay" height="20" src={call} width="20" />
                  1234 5678 90
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <Image alt="Apple Pay" height="20" src={mail} width="20" />
                  Freshharvests@gmail.com
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <Image
                    alt="Apple Pay"
                    height="20"
                    src={location}
                    width="20"
                  />
                  Tanjung Sari Street, Pontianak, Indonesia
                </li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  Accepted Payment Methods:
                </span>
                <div className="flex mt-2">
                  <Image
                    alt="VISA"
                    className="mr-2"
                    height="30"
                    src={visa}
                    width="60"
                  />
                  <Image
                    alt="PayPal"
                    className="mr-2"
                    height="30"
                    src={paypal}
                    width="60"
                  />
                  <Image alt="Apple Pay" height="30" src={apple} width="60" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-6 pt-6 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <p className="text-gray-600 font-bold mb-4 lg:mb-0">
              © Copyright 2024, All Rights Reserved by Banana Studio
            </p>
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
              <a className="text-gray-600 hover:text-gray-800 mx-2" href="#">
                <Image alt="Apple Pay" height="30" src={twitter} width="30" />
              </a>
              <a className="text-gray-600 hover:text-gray-800 mx-2" href="#">
                <Image alt="Apple Pay" height="30" src={facebook} width="30" />
              </a>
              <a className="text-gray-600 hover:text-gray-800 mx-2" href="#">
                <Image alt="Apple Pay" height="30" src={instagram} width="30" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
