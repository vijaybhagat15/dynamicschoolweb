import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons
import MobilenavLinks from "./Mobilenavelinks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../redux/slices/headerSlice";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStyleData } from "../redux/slices/styleSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  // Select state from the store
  const { logo, name, loading, error } = useSelector((state: RootState) => state.header);
  // Fetch data when component mounts
  useEffect(() => {
    dispatch(fetchHeader());
    dispatch(fetchStyleData());
  }, [dispatch]);
  const { styles, loading: styleLoading, error: styleError } = useSelector((state: RootState) => state.style);

  // Handle loading and error states
  if (loading) return <p>Loading header...</p>;
  if (error) return <p>Error: {error}</p>;
  if (styleLoading)
    return <p className="text-center text-gray-500">Style Loading...</p>;
  if (styleError)
    return <p className="text-center text-red-500">Style Error: {styleError}</p>;
  
  return (
    <header className={`flex items-center justify-between px-4 md:px-6 ${styles["bg-primary"]} shadow-md w-full sticky top-0 z-10 h-16 md:h-20`}>
      {/* Logo and Name */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo|| 'logo'} alt="NovaStar Academy" className="h-10 md:h-14" />
        <span className={`font-bold text-base ${styles["text-primary"]} sm:${styles["text-primary"]} sm:text-2xl`}>
        {name}
        </span>
      </Link>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:flex items-center space-x-6 ${styles["text-secondary"]} font-semibold pr-10`}>
        {[ 
          { name: "Home", path: "/" },
          { name: "Academics", path: "/Academics" },
          { name: "About", path: "/About" },
          { name: "Contact", path: "/Contact" },
          { name: "Schools", path: "/Schools" },
          { name: "News", path: "/News" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:scale-110 transition ${
              location.pathname === item.path ? "underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`lg:hidden ${styles["text-secondary"]} focus:outline-none`}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full ${styles["bg-primary"]} shadow-lg lg:hidden`}>
          <MobilenavLinks setMenuOpen={setMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
