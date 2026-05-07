import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {getCartCount} = useCart();
 
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-baseline justify-between p-2 fixed top-0 left-0 w-full z-20 bg-stone-100">
      <div>
        <Link to="/">
          <p className="text-3xl font-bold text-amber-900">
            The Soil Beneath
          </p>
        </Link>
        <p className="text-md text-lime-700">Rooted in nature. Delivered to you.</p>
      </div>


      
      <div>
        <span className="relative" onClick={() => setOpen(prev => !prev)}>
          <span>
            {user ? (
              <Link to="/" className="text-xl px-2 text-amber-600" >{user.first_name}'s Account</Link>
            ) : (
              <Link className="text-xl px-2 text-amber-600 font-medium" to="/login">My Account</Link>
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
        
        <Link className="text-xl px-2 text-amber-600 font-medium" to="/cart">
          Cart <span className="text-red-600">({getCartCount()})</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar