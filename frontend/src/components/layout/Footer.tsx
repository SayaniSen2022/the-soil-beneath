import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-amber-900">
            The Soil Beneath
          </h2>
          <p className="text-sm text-lime-700">
            Rooted in nature. Delivered to you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/shop" className="hover:text-green-600">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-green-600">Cart</Link></li>
            <li><Link to="/login" className="hover:text-green-600">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <p className="text-sm text-gray-600">
            Email: support@soilbeneath.com
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Phone: +91 98765 43210
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} The Soil Beneath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;