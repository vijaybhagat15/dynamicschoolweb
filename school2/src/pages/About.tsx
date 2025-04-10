import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchAboutData } from "../redux/slices/AboutSlice";
import { fetchStyleData } from "../redux/slices/styleSlice";

const About = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStyleData());
    dispatch(fetchAboutData());
  }, [dispatch]);

  const { styles, loading: styleLoading, error: styleError } = useSelector((state: RootState) => state.style);

  const {
    facultyMembers,
    text,
    loading: aboutLoading,
    error: aboutError,
  } = useSelector((state: RootState) => state.about);

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  if (styleLoading || aboutLoading)
    return <p className="text-center text-gray-500">Loading...</p>;
  if (styleError)
    return <p className="text-center text-red-500">Style Error: {styleError}</p>;
  if (aboutError)
    return <p className="text-center text-red-500">About Error: {aboutError}</p>;

  return (
    <div className={`border-y-2 border-white ${styles["text-secondary"]}`}>
      <div className="container mx-auto px-6 py-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${styles["text-primary"]}`}>Our Journey</h2>
            <p className={`mt-6 text-center md:text-left ${styles["text-secondary"]} leading-relaxed`}>
              {text?.Journey1 || "Loading..."}
            </p>
            <p className={`mt-4 text-center md:text-left ${styles["text-secondary"]} leading-relaxed`}>
              {text?.Journey2 || "Loading..."}
            </p>
          </motion.div>

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center bg-teal-500 rounded-3xl p-[1px]"
          >
            <img
              src={text?.headimg || "Loading..."}
              alt="Our Campus"
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className={`${styles["text-primary"]}`}>Our Mission</h2>
          <p className={`mt-6 ${styles["text-secondary"]} leading-relaxed max-w-3xl mx-auto`}>
            {text?.Mission || "Loading..."}
          </p>
        </motion.div>

        {/* Faculty Section */}
        <div className="mt-16">
          <div className="container mx-auto text-center">
            <h2 className={`${styles["text-primary"]} mb-8`}>Meet Our Faculty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {facultyMembers?.length > 0 ? (
                facultyMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-4 rounded-lg shadow-lg border-2 border-transparent hover:scale-105 transition-transform"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-md mb-4 border-2 border-teal-500"
                    />
                    <h3 className={`mb-2 ${styles["text-primary"]}`}>
                      {member.name}
                    </h3>
                    <p className={`font-sans ${styles["text-secondary"]}`}>
                      {member.subject}
                    </p>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500">No faculty members available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
