import Image from 'next/image';
import avatar1 from "../assets/avatar1.png";

export default function Testimonial() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
    <div className="max-w-4xl mx-auto text-center">
    <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4">
    Testimonial
      </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
        <p className="text-gray-600 mb-8 w-full md:w-2/3 mx-auto">
            Don't just take our word for it - here's what some of our customers have to say about their experience with Fresh Harvest:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mb-6 md:mb-0 md:mr-6 basis-11/12">
                <Image alt="Portrait of a smiling person wearing a hat and apron" className="rounded-full h-64 w-auto object-cover" src={avatar1}/>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 text-lg mb-4">
                    "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                </p>
                <p className="font-bold text-gray-900">
                    Jane Doe - 
                    <span className="font-normal text-gray-600"> Professional chef</span>
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
