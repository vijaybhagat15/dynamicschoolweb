import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchoolData } from "../redux/slices/schoolSlice";
import { AppDispatch, RootState } from "../redux/store";

type Region = "Bangalore" | "Mumbai" | "Delhi"; // ✅ added region type

const Schools = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { schoolsData, loading, error } = useSelector(
    (state: RootState) => state.school
  );

  const [selectedRegion, setSelectedRegion] = useState<Region>("Bangalore"); // ✅ use defined type

  useEffect(() => {
    dispatch(fetchSchoolData());
  }, [dispatch]);

  if (loading) return <p>Loading school data...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!schoolsData) return null;

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="bg-teal-100 text-primary p-6 rounded-lg mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">Join Crestview Academy Today</h2>
          <p className="mt-2">Empowering students with quality education from primary to senior secondary level across India.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-4 bg-white text-primary px-6 py-2 rounded-full"
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
                selectedRegion === region ? "bg-teal-700 text-white" : "bg-white text-teal-700 border border-teal-700"
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
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={school.image} alt={school.name} className="h-64 w-64 rounded-lg" />
              <h3 className="text-secondary mt-2">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schools;
