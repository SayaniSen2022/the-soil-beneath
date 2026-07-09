import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  price: number;
  image_url?: string;
};

const ProductCard = ({ id, name, price, image_url }: Props) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${id}`)} 
         className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden cursor-pointer">
      <div className="h-72 overflow-hidden">
        <img src={image_url} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-4"> <h3 className="text-lg font-medium truncate"> {name} </h3></div>

      <p className="text-xl text-green-700 font-semibold mt-2">₹{price}</p>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md"
        onClick={() =>
          addToCart({
            id,
            name,
            price,
            image_url,
            quantity: 1,
          })
        }
      >
        Add to Cart
      </button>
    </div>
    
  );
};

export default ProductCard