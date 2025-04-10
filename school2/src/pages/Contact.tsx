import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactData } from "../redux/slices/contactSlice";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStyleData } from "../redux/slices/styleSlice";

import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaEdit,
  FaComment,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const dispatch = useDispatch<AppDispatch>();
  const { contactData, loading, error } = useSelector(
    (state: RootState) => state.contact
  );

  useEffect(() => {
    dispatch(fetchContactData());
    dispatch(fetchStyleData());
  }, [dispatch]);
  const { styles, loading: styleLoading, error: styleError } = useSelector((state: RootState) => state.style);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!contactData) return null;
  if (styleLoading)
    return <p className="text-center text-gray-500">Style Loading...</p>;
  if (styleError)
    return <p className="text-center text-red-500">Style Error: {styleError}</p>;
  
  return (
    <>
      {/* Main Content Section */}
      <div className={`max-w-screen-lg mx-auto p-8 space-y-12 font-sans ${styles["text-secondary"]}`}>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p>{contactData.introText}</p>
        </motion.div>

        {/* School Services */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {contactData.services.map((item, index) => (
            <div key={index} className="space-y-4">
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full rounded-lg shadow-md border-[1px] ${styles["border-primary"]}`}
              />
              <h2 className={`text-xl font-bold font-serif ${styles["text-primary"]}`}>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className={`text-2xl font-bold text-center font-serif ${styles["text-primary"]}`}>
            How Can We Assist You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactData.helpSections.map((help, index) => (
              <div
                key={index}
                className={`${styles["bg-secondary"]} p-6 rounded-lg shadow-md border-[1px] border-primary`}
              >
                <h3 className={`text-lg font-bold flex items-center gap-2 font-serif ${styles["text-primary"]}`}>
                   {help.title}
                </h3>
                <p>{help.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row items-center justify-center p-6 font-sans"
      >
        <div className={`w-full lg:w-1/2 max-w-md ${styles["text-secondary"]}`}>
          <div className="shadow-xl rounded-lg p-8 border-[1px] transition-all duration-300 hover:scale-105">
            <h1 className={`text-lg font-bold text-center mb-6 font-serif ${styles["text-primary"]}`}>
              {contactData.form.title}
            </h1>
            <form className="space-y-4">
              <div className="relative">
                <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${styles["text-secondary"]}`} />
                <input
                  type="text"
                  placeholder={contactData.form.placeholders.name}
                  className={`w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 ${styles["border-secondary"]} focus:ring-primary ${styles["text-secondary"]}`}
                />
              </div>

              <div className="relative">
                <FaEnvelope className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${styles["text-secondary"]}`} />
                <input
                  type="email"
                  placeholder={contactData.form.placeholders.email}
                  className={`w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 ${styles["border-secondary"]} focus:ring-primary ${styles["text-secondary"]}`}
                />
              </div>

              <div className="relative">
                <FaEdit className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${styles["text-secondary"]}`} />
                <input
                  type="text"
                  placeholder={contactData.form.placeholders.subject}
                  className={`w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 ${styles["border-secondary"]} focus:ring-primary ${styles["text-secondary"]}`}
                />
              </div>

              <div className="relative">
                <FaComment className={`absolute left-3 top-4 transform -translate-y-1/2 ${styles["text-secondary"]}`}/>
                <textarea
                  placeholder={contactData.form.placeholders.message}
                  rows={4}
                  className={`w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 ${styles["border-secondary"]} focus:ring-primary ${styles["text-secondary"]}`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3  rounded-lg bg-gradient-to-r bg-button hover:opacity-80 transition-all duration-500 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                <div>{contactData.form.button}</div>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
