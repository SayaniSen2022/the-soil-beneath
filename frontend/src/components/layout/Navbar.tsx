import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Navbar = () => {
  const {getCartCount} = useCart();

  return (
    <div className="flex items-baseline justify-between p-4 fixed top-0 left-0 w-full z-20 bg-stone-50">
      <div>
        <Link to="/">
          <p className="text-3xl font-bold text-amber-900">
            The Soil Beneath
          </p>
        </Link>
        <p className="text-md text-lime-700">Rooted in nature. Delivered to you.</p>
      </div>

      <div>
        <Link className="text-xl px-2 text-amber-600" to="/login">My Account</Link>
        <Link className="text-xl px-2 text-amber-600" to="/cart">
          Cart <span className="text-red-600">({getCartCount()})</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar