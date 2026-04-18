import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        })
      }
    >
      Add to Cart
    </button>
  );
};