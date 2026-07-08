import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaLeaf,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const MobileBottomNav = () => {
  const {getCartCount} = useCart();
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md md:hidden z-50">
      <div className="grid grid-cols-4 h-16">

        <NavLink
          to="/"
          className={({ isActive }) =>
              `flex flex-col items-center justify-center ${
                  isActive ? "text-gray-500" : "text-gray-700"
              }`
          }
        >
          <FaHome size={20} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
              `flex flex-col items-center justify-center ${
                  isActive ? "text-gray-500" : "text-gray-700"
              }`
          }
        >
          <FaLeaf size={20} />
          <span className="text-xs mt-1">Shop</span>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
              `flex flex-col items-center justify-center ${
                  isActive ? "text-gray-500" : "text-gray-700"
              }`
          }
        >
          <div className="relative">
            <FaShoppingCart size={20} />

            {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2
                    bg-red-500 text-white rounded-full
                    text-[10px] h-4 w-4 flex items-center justify-center">
                    {getCartCount()}
                </span>
            )}
          </div>
          <span>Cart</span>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
              `flex flex-col items-center justify-center ${
                  isActive ? "text-gray-500" : "text-gray-700"
              }`
          }
        >
          <FaUser size={20} />
          <span className="text-xs mt-1">Account</span>
        </NavLink>

      </div>
    </nav>
  );
};

export default MobileBottomNav;