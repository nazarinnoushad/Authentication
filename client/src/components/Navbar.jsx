import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="h-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 shadow-md flex items-center justify-between px-4 md:px-10">
      
      {/* Logo */}
      <div className="text-4xl font-black text-white drop-shadow-md tracking-widest font-serif">
        <Link to="/" className="hover:text-yellow-100 transition duration-200">
          Liza
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
        <li>
          <Link to="/" className="hover:text-yellow-100 transition">Home</Link>
        </li>
        <li>
          <Link to="/collection" className="hover:text-yellow-100 transition">Shop</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-100 transition">About</Link>
        </li>
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-white hover:text-yellow-100 font-medium transition">Login</Link>
        <Link
          to="/signup"
          className="px-4 py-1.5 rounded-full bg-white text-pink-600 font-semibold shadow hover:bg-yellow-50 transition"
        >
          Sign Up
        </Link>
        <Link to="/cart" className="text-white hover:text-yellow-100 transition">
          <ShoppingCartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;






  
  