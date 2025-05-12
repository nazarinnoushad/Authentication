import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { toast } from "sonner";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile toggle state

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/auth/logout");

      if (data.success) {
        toast.success(data.message);
        setAuth({ user: null, token: '' });
        localStorage.removeItem("auth");
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Logout failed. Please try again.");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative h-20 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 shadow-md flex items-center justify-between px-4 md:px-10">
      {/* Logo */}
      <div className="text-4xl font-black text-white drop-shadow-md tracking-widest font-serif">
        <Link to="/" className="hover:text-yellow-100 transition duration-200">
          Liza
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
        <li><Link to="/" className="hover:text-yellow-100 transition">Home</Link></li>
        {auth?.user && (
          <>
            <li><Link to="/collection" className="hover:text-yellow-100 transition">Collection</Link></li>
            <li><Link to="/profile" className="text-red-100 transition">{auth.user.name}</Link></li>
          </>
        )}
      </ul>

      {/* Right Side Actions (Desktop Only) */}
      <div className="hidden md:flex items-center space-x-4">
        {!auth?.user ? (
          <>
            <Link to="/login" className="text-white hover:text-yellow-100 font-medium transition">Login</Link>
            <Link
              to="/signup"
              className="px-4 py-1.5 rounded-full bg-white text-pink-600 font-semibold shadow hover:bg-yellow-50 transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-white hover:text-yellow-100 font-medium transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-white font-medium flex flex-col items-center space-y-4 py-4 z-50 md:hidden">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          {auth?.user && (
            <>
              <Link to="/collection" onClick={toggleMenu}>Collection</Link>
              <Link to="/profile" onClick={toggleMenu}>{auth.user.name}</Link>
            </>
          )}
          {!auth?.user ? (
            <>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
              <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
            </>
          ) : (
            <button onClick={(e) => { handleLogout(e); toggleMenu(); }}>
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;












  
  