import offer from "../assets/offer.png"
export default function Offer() {
  return (
    <div style={{
        backgroundImage: `url(${offer.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
  className="bg-gray-50 bg-opacity-50 flex items-center justify-center min-h-screen ]"
  
>
    <div  className="flex flex-col lg:flex-row items-center justify-start p-6  bg-opacity-90 rounded-lg relative w-full max-w-6xl">
        <div className="lg:w-2/3 lg:pr-6 text-center lg:text-left">
            <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-base">
                Special Offer
            </div>
            <h1 className="text-4xl font-bold mt-12 lg:mt-8">Seasonal Fruit Bundle</h1>
            <p className="text-2xl mt-2">Discount up to <span className="text-orange-500 font-bold">80% OFF</span></p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-3xl font-bold">03</p>
                    <p className="text-sm">Days</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-3xl font-bold">18</p>
                    <p className="text-sm">Hour</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-3xl font-bold">54</p>
                    <p className="text-sm">Min</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-3xl font-bold">21</p>
                    <p className="text-sm">Second</p>
                </div>
            </div>
            <div className="mt-6">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-lg">CODE : FRUIT28</span>
            </div>
        </div>
    </div>
</div>
  )
}
