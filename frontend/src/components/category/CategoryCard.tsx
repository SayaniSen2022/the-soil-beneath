import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Props = {
  id: number;
  name: string;
  image_url?: string;
};

const CategoryCard = ({id, name, image_url}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products?category=${id}`)}
      className="relative block group rounded-xl overflow-hidden cursor-pointer bg-lime-50 shadow-md hover:shadow-lg transition duration-300"
    >
        <div className="relative block w-full h-96 overflow-hidden">
          <img
            src={ image_url ? 
              `${API_BASE_URL}${image_url}` :
              "https://via.placeholder.com/300"
            }
            alt={name}
            className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition duration-300"
          />          
        </div>
    </div>
  );
};

export default CategoryCard;