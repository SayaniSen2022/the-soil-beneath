import {FaStar, FaRegStar} from "react-icons/fa";

type Props = {
  customer_name: string;
  location: string;
  remarks: string;
  rating: number;
  date_posted: string;
};

const TestimonialCard = ({customer_name, location, remarks, rating, date_posted}: Props) => {

  return (
    <div
      className="rounded-xl bg-white shadow-md p-4 cursor-pointer hover:bg-amber-50 transition duration-300 ease-in-out"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          index < rating ? 
          (<FaStar key={index} className="text-yellow-400 text-lg" />) :
          (<FaRegStar key={index} className="text-gray-300 text-lg" />)
        ))}
      </div>
      <div className="text-cyan-500 font-medium">{customer_name}</div>
       <p className="text-xs text-gray-600">
          {new Date(date_posted).toLocaleDateString()}
        </p>
      <div className="text-sm text-gray-700 font-medium">{location}</div>
      <div className="text-md pt-2">{remarks}</div>
    </div>
  );
};

export default TestimonialCard;