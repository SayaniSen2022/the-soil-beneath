import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const DesktopActions = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {getCartCount} = useCart();
 
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
      <div className="hidden md:flex items-center gap-10">
        <span className="relative" onClick={() => setOpen(prev => !prev)}>
          <span>
            {user ? (
              <Link to="/" className="text-xl px-2 text-amber-600" >{user.first_name}'s Account</Link>
            ) : (
              <Link className="text-xl px-2 text-amber-600 font-medium" to="/login"><FaUser /></Link>
            )}
          </span>
          <span>
            {open && user && (
              <div className="absolute right-0 mt-1 w-40 bg-white border rounded-md shadow-md">
                
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 font-medium"
                >
                  Logout
                </button>

              </div>
            )}
          </span>          
        </span>
        
        <Link to="/cart">
          <div className="relative flex items-center text-xl px-2 text-amber-600 font-medium" >
            <div><FaShoppingCart /></div>
           {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 
              text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">{getCartCount()}</span> )}
          </div>
        </Link>
      </div>
  )
}

export default DesktopActions