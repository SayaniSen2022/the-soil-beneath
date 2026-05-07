import { useNavigate } from "react-router-dom";


type Props = {
  id: number;
  name: string;
  image_url?: string;
  price: number;
};

const FeaturedProductCard = ({ id, name, image_url, price }: Props) => {
  const navigate = useNavigate();

return (
  <div
    onClick={() => navigate(`/product/${id}`)}
    className="relative block group rounded-xl overflow-hidden cursor-pointer bg-lime-50 shadow-md hover:shadow-lg transition duration-300"
  >
    {/* Image */}
    <div className="relative block w-full h-96 overflow-hidden">
      <img
        src={image_url || "https://via.placeholder.com/300"}
        alt={name}
        className="absolute top-0 left-0 max-w-full w-full h-full group-hover:scale-105 transition duration-300"
      />
    </div>

    {/* Content */}
    <div className="p-4 text-center">
      <p className="text-green-900 font-medium text-lg">{name}</p>
      <p className="text-green-700 text-md mt-1">₹{price}</p>

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents parent click
          navigate(`/product/${id}`);
        }}
        className="mt-3 w-full bg-green-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-green-100 hover:text-green-800 transition duration-500"
      >
        VIEW PRODUCT
      </button>
    </div>
  </div>
);
};

export default FeaturedProductCard;