import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchoolData } from "../redux/slices/schoolSlice";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStyleData } from "../redux/slices/styleSlice";
import { fetchHeader } from "../redux/slices/headerSlice";

type Region = "Bangalore" | "Mumbai" | "Delhi"; // ✅ added region type

const Schools = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { schoolsData, loading, error } = useSelector((state: RootState) => state.school);
  const { name} = useSelector((state: RootState) => state.header);

  const [selectedRegion, setSelectedRegion] = useState<Region>("Bangalore"); // ✅ use defined type

  useEffect(() => {
    dispatch(fetchSchoolData());
    dispatch(fetchStyleData());
    dispatch(fetchHeader());

  }, [dispatch]);
  const { styles, loading: styleLoading, error: styleError } = useSelector((state: RootState) => state.style);

  if (loading) return <p>Loading school data...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!schoolsData) return null;
  if (styleLoading)
    return <p className="text-center text-gray-500">Style Loading...</p>;
  if (styleError)
    return <p className="text-center text-red-500">Style Error: {styleError}</p>;
  
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className={`${styles["bg-secondary"]} ${styles["text-primary"]} p-6 rounded-lg mb-6 text-center`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${styles["text-primary"]}`}>{`Join ${name} Today`}</h2>
          <p className="mt-2 text-lg">Empowering students with quality education from primary to senior secondary level across India.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className={`mt-4 ${styles["bg-primary"]} ${styles["text-secondary"]} px-6 py-2 rounded-full`}
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Region Selection Buttons */}
        <div className="flex justify-center space-x-6 mb-6">
          {Object.keys(schoolsData).map((region) => (
            <motion.button
              key={region}
              className={`px-4 py-2 rounded-full ${
                selectedRegion === region ? `${styles["text-primary"]} text-base ${styles["bg-secondary"]}` : `${styles["text-secondary"]} text-base ${styles["bg-primary"]} border-[1px] ${styles["border-secondary"]} `
              }`}
              onClick={() => setSelectedRegion(region as Region)}
              whileHover={{ scale: 1.1 }}
            >
              {region}
            </motion.button>
          ))}
        </div>

        {/* School List */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          {schoolsData[selectedRegion].map((school, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center ${styles["bg-primary"]} p-4 rounded-lg shadow-md`}
              whileHover={{ scale: 1.05 }}
            >
              <img src={school.image} alt={school.name} className="h-64 w-64 rounded-lg" />
              <h3 className={`${styles["text-secondary"]} mt-2`}>{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schools;
