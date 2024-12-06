import Image from "next/image";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

export default function Blogs() {
  return (
    <div className=" text-gray-800 min-h-screen">
    <div className="container mx-auto px-4 py-8">
     <div className="text-center mb-8">
      <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4">
       Our Blog
      </div>
      <h1 className="text-4xl font-bold text-gray-900">
       Fresh Harvest Blog
      </h1>
      <p className="text-gray-600 mt-2 w-full md:w-1/3 mx-auto">
       Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
      <div className=" rounded-lg  overflow-hidden">
       <Image alt="A man and a girl harvesting fresh produce" className="w-full object-cover" height="600" src={test1} width="600"/>
       <div className="p-4">
        <p className="text-gray-500">
         May 23, 2024
        </p>
        <h2 className="text-xl font-bold text-gray-900 mt-2">
         Exploring Seasonal Delights: A Guide to Whats Fresh Right Now
        </h2>
        <button className="text-orange-500 mt-4 inline-block" >
         Read More
         <i className="fas fa-arrow-right">
         </i>
        </button>
       </div>
      </div>
      <div className=" rounded-lg  overflow-hidden">
       <Image alt="A variety of fresh vegetables" className="w-full  object-cover" height="600" src={test2} width="600"/>
       <div className="p-4">
        <p className="text-gray-500">
         May 23, 2024
        </p>
        <h2 className="text-xl font-bold text-gray-900 mt-2">
         Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads
        </h2>
        <button className="text-orange-500 mt-4 inline-block" >
         Read More
         <i className="fas fa-arrow-right">
         </i>
        </button>
       </div>
      </div>
      <div className=" rounded-lg  overflow-hidden">
       <Image alt="A person harvesting strawberries" className="w-full object-cover" height="600" src={test3} width="600"/>
       <div className="p-4">
        <p className="text-gray-500">
         May 23, 2024
        </p>
        <h2 className="text-xl font-bold text-gray-900 mt-2">
         The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week
        </h2>
        <button className="text-orange-500 mt-4 inline-block" >
         Read More
         <i className="fas fa-arrow-right">
         </i>
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  )
}
