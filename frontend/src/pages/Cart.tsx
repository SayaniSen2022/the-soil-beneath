import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

const Cart = () => {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // empty cart state
  if (cart.length === 0) {
    return (
      <div className="pt-28 px-6 text-center">
        <h2 className="text-3xl font-medium text-green-800 mb-4">
          Your cart is empty 🌿
        </h2>

        <p className="text-gray-600">
          Looks like you haven’t added any plants yet.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto pt-28 px-6 pb-10">

      <h1 className="text-4xl font-semibold text-green-900 mb-8">
        Shopping Cart
      </h1>

      <div className="grid md:grid-cols-[2fr_1fr] gap-8">

        {/* LEFT - CART ITEMS */}
        <div className="space-y-4">

          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image_url={item.image_url}
              price={item.price}
              quantity={item.quantity}

              onIncrease={() =>
                increaseQuantity(item.id)
              }

              onDecrease={() =>
                decreaseQuantity(item.id)
              }

              onRemove={() =>
                removeFromCart(item.id)
              }
            />
          ))}

        </div>

        {/* RIGHT - SUMMARY */}
        <div className="border rounded-2xl p-6 h-fit shadow-sm bg-lime-50">

          <h2 className="text-2xl font-semibold text-green-900 mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4 text-lg">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-4 text-lg">
            <span>Delivery</span>
            <span className="text-green-700">
              FREE
            </span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-semibold mb-6">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition">
            Proceed To Buy
          </button>

        </div>

      </div>

    </section>
  );
};

export default Cart;