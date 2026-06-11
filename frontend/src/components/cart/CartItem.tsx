import { FaTrash } from "react-icons/fa";

type Props = {
  id: number;
  name: string;
  image_url?: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

const CartItem = ({
  name,
  image_url,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) => {
  return (
    <div className="flex gap-4 border rounded-xl p-4 bg-white shadow-sm">
      
      {/* Product Image */}
      <div className="w-28 h-28 overflow-hidden rounded-lg bg-lime-50">
        <img
          src={image_url || "https://via.placeholder.com/150"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between flex-1">
        
        <div>
          <h3 className="text-lg font-medium text-green-900">
            {name}
          </h3>

          <p className="text-green-700 text-lg mt-1">
            ₹{price}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between mt-4">

          {/* Quantity Controls */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={onDecrease}
              className="px-3 py-1 text-lg hover:bg-lime-100 transition"
            >
              -
            </button>

            <span className="px-4 py-1 text-md">
              {quantity}
            </span>

            <button
              onClick={onIncrease}
              className="px-3 py-1 text-lg hover:bg-lime-100 transition"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition"
          >
            <FaTrash size={18} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default CartItem;