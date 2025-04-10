import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store"; // Adjust path if needed
import { fetchFooter } from "../redux/slices/footerSlice";
import { fetchStyleData } from "../redux/slices/styleSlice";

// Icon mapping for social platforms
const iconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className="w-6 h-6" />,
  instagram: <FaInstagram className="w-6 h-6" />,
  linkedin: <FaLinkedin className="w-6 h-6" />,
  twitter: <FaTwitter className="w-6 h-6" />,
  youtube: <FaYoutube className="w-6 h-6" />,
  vimeo: <FaVimeoV className="w-6 h-6" />,
};

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Extracting footer state from Redux
  const { campuses, affiliatedPrograms, socialLinks, loading, error } = useSelector(
    (state: RootState) => state.footer
  );

  useEffect(() => {
    dispatch(fetchFooter());
    dispatch(fetchStyleData());
  }, [dispatch]);
  const { styles, loading: styleLoading, error: styleError } = useSelector((state: RootState) => state.style);

  if (loading) return <p className="text-center py-4">Loading footer...</p>;
  if (error) return <p className="text-center py-4 text-red-500">Error: {error}</p>;
  if (styleLoading)
    return <p className="text-center text-gray-500">Style Loading...</p>;
  if (styleError)
    return <p className="text-center text-red-500">Style Error: {styleError}</p>;
  
  return (
    <footer className={`${styles["bg-footer"]} text-white py-12 px-6 md:px-20`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Campus Sections */}
        {campuses.map((campus, idx) => (
          <div className="space-y-2" key={idx}>
            <h3 className="text-lg font-semibold pb-1 underline ">{campus.title}</h3>
            <p className="text-sm text-gray-300">{campus.subtitle}</p>
            <p className="mt-2">{campus.addressLine1}</p>
            <p>{campus.addressLine2}</p>
            <p className="mt-2 font-semibold">{campus.phone}</p>
          </div>
        ))}

        {/* Affiliated Programs */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold underline pb-1 ">AFFILIATED PROGRAMS</h3>
          <ul className="mt-2 space-y-2 text-blue-400">
            {affiliatedPrograms.map((program, idx) => (
              <li key={idx}>
                <a href={program.link} className="hover:underline">{program.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold underline pb-1 ">ACCREDITATION & MEMBERSHIPS</h3>

          <h3 className="mt-6 text-lg font-semibold">Like. Follow. Friend.</h3>
          <p className="text-gray-300">@crestviewacademy</p>
          <div className="mt-2 flex space-x-4">
            {socialLinks.map(({ name, hoverColor }, idx) => (
              <div
                key={idx}
                className={`cursor-pointer transition-transform transform hover:scale-110 ${hoverColor}`}
              >
                {iconMap[name]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
