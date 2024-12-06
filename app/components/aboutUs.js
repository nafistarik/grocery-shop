import Image from "next/image";
import banner from "../assets/about banner.png";
import logo from "../assets/about logo.png";
import card from "../assets/Product Card.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          alt="A smiling man holding a box of fresh vegetables"
          className="z-10"
          height="500"
          src={banner}
          width="500"
        />

        <Image
          alt="Fresh Harvests logo"
          className=" h-16 absolute bottom-44 right-72 p-2 rounded-lg shadow-lg z-20"
          height="50"
          src={logo}
        />

        <Image
          alt="Mushroom"
          className="w-36 absolute bottom-0 right-64  rounded-lg shadow-lg z-20"
          src={card}
          width="100"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
        <div className="bg-green-100 text-green-500 font-bold inline-block px-3 py-1 rounded-full mb-4">
          About Us
        </div>
        <h1 className="text-4xl font-bold mb-4">About Fresh Harvest</h1>
        <p className="text-black mb-6">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
          Read More
        </button>
      </div>
    </div>
  );
}
