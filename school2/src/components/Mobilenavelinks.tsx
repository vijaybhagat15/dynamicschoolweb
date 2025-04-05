import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface MobileNavLinksProps {
  setMenuOpen: (open: boolean) => void;
}

const MobilenavLinks: React.FC<MobileNavLinksProps> = ({ setMenuOpen }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Start invisible and slightly above
      animate={{ opacity: 1, y: 0 }} // Fade in and slide down
      exit={{ opacity: 0, y: -20 }} // Fade out when unmounting
      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
      className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-xl flex flex-col items-center space-y-4 p-6 lg:hidden"
    >
      {/* Navigation Links */}
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
          className={`flex justify-between items-center w-full px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
            location.pathname === item.path
              ? "text-primary bg-yellow-100"
              : "text-secondary hover:text-blue-500 hover:bg-gray-100"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
          <span className="text-blue-900 transition-transform duration-300 group-hover:translate-x-1">
            &gt;
          </span>
        </Link>
      ))}

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6">
        {[
          { icon: "fab fa-facebook-f", link: "#" },
          { icon: "fab fa-youtube", link: "#" },
          { icon: "fab fa-twitter", link: "#" },
          { icon: "fab fa-linkedin-in", link: "#" },
          { icon: "fab fa-instagram", link: "#" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="text-blue-900 text-xl hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobilenavLinks;
