import Image from "next/image";
import Link from "next/link";
import appstore from "../assets/appstore.png";
import arrow from "../assets/Clip path group.png";
import googleplay from "../assets/googleplay.png";
import plate from "../assets/plate.png";

export default function Home() {
  return (
    <div className="lg:w-1/2 space-y-6 pt-4 pb-16 px-6 md:px-20 lg:px-32">
      <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full inline-block">
        Welcome to Fresh Harvest
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
        Fresh Fruits and Vegetables
      </h1>
      <p className="text-gray-600 pb-6">
        At Fresh Harvests, we are passionate about providing you with the
        freshest and most flavorful fruits and vegetables
      </p>
      <Link
        className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600"
        href="/shop"
      >
        Shop Now
      </Link>
      <div className="flex flex-col-reverse md:flex-row md:space-x-4 justify-end items-start">
        {/* Arrow image, visible only on medium and larger screens */}
        <Image
          className="hidden md:block w-12 h-12"
          alt="for quopon"
          src={arrow}
        />
        <div className="bg-[#EBEBEB] rounded-lg flex items-start md:items-center justify-evenly space-y-4 md:space-y-0 md:space-x-4 py-4 px-4 w-full md:w-96">
          <div>
            <div className="text-green-600 font-bold">Special Offer</div>
            <div className="text-gray-800 text-lg font-bold">Fresh Salad</div>
            <div className="text-gray-600">
              Up to{" "}
              <span className="text-2xl text-green-600 font-bold">70%</span> off
            </div>
            <div className="bg-green-600 text-white px-2 py-1 rounded-full inline-block mt-2">
              CODE: FRESH25
            </div>
          </div>
          <Image
            alt="Fresh Salad"
            className="rounded-full"
            height="150"
            src={plate}
            width="150"
          />
        </div>
      </div>

      <p className="text-slate-600">Download App:</p>

      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
        <Image
          alt="Download on the App Store"
          height="50"
          src={appstore}
          width="150"
        />
        <Image
          alt="Get it on Google Play"
          height="50"
          src={googleplay}
          width="150"
        />
      </div>
    </div>
  );
}
