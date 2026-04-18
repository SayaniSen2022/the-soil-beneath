import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  slug: string;
};

const CategoryCard = ({ name, slug }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products?category=${slug}`)}
      className="p-4 border border-solid border-1 rounded-md cursor-pointer text-center duration-300 ease-in-out bg-lime-100 hover:bg-lime-200"
    >
      <h3 className="text-green-800">{name}</h3>
    </div>
  );
};

export default CategoryCard;