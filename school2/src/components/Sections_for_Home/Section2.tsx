import { FaSchool, FaUsers, FaFileAlt, FaDonate } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchSection2 } from "../../redux/slices/section2Slice"; 
import { RootState, AppDispatch } from "../../redux/store"; 

const Section2 = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const dispatch = useDispatch<AppDispatch>();

  const { sections, loading, error } = useSelector(
    (state: RootState) => state.section2
  );

  useEffect(() => {
    dispatch(fetchSection2());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10 pb-10 px-6 md:px-20 text-secondary border-gray-200 border-b-2"
    >
      {/* Section Items */}
      {sections && (
        <>
          {[
            { key: 1, icon: <FaSchool className="text-teal-500 w-12 h-12" />, section: sections.Visit },
            { key: 2, icon: <FaUsers className="text-teal-500 w-12 h-12" />, section: sections.Learn },
            { key: 3, icon: <FaFileAlt className="text-teal-500 w-12 h-12" />, section: sections.Apply },
            { key: 4, icon: <FaDonate className="text-teal-500 w-12 h-12" />, section: sections.Giving },
          ].map(({ key, icon, section }, index) => (
            <motion.div
              key={key}
              className="relative flex flex-col items-center text-center px-6 h-[150px] bg-white shadow-md transition-all duration-200 hover:bg-teal-100"
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-teal-500 w-12 h-12">{icon}</div>
              <h3 className="text-lg font-semibold">{section?.title}</h3>
              {hovered === key && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full shadow-lg pb-1 bg-teal-100">
                  <p className="px-2">{section?.description}</p>
                  <a
                    href="#" // TODO: Replace with real links
                    className="inline-block border border-teal-500 px-4 py-1 rounded-lg hover:bg-teal-500 hover:text-white transition-all text-base"
                  >
                    {section?.buttonText}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </>
      )}
    </section>
  );
};

export default Section2;
