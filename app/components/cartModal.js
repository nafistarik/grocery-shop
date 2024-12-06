import Image from "next/image";
import { useCart } from "../context/cartContext";

function CartModal({ closeCart }) {
  // Consume cart context values
  const { cartItems, onIncrease, onDecrease } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeCart}
          className="absolute top-4 right-6 text-orange-600 font-bold text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-orange-600 my-6">
          Your Cart
        </h2>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.images[0]}
                    alt={item.productName}
                    className="w-16 h-16 object-cover rounded"
                    width={16}
                    height={16}
                  />
                  <div>
                    <p className="font-semibold">{item.productName}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-orange-500 text-white px-2 py-1 rounded-md font-bold hover:bg-orange-600"
                    onClick={() => onDecrease(item.id)}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    className="bg-orange-500 text-white px-2 py-1 rounded-md font-bold hover:bg-orange-600"
                    onClick={() => onIncrease(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Total Price */}
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}

        {/* Total and Checkout */}
        <div className="mt-6">
          <div className="flex justify-between text-lg font-bold">
            <p>Total:</p>
            <p>
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
