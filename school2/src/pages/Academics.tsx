import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAcademicsData } from "../redux/slices/academicsSlice";
import { AppDispatch, RootState } from "../redux/store";

const Academics = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { academicsData, loading, error } = useSelector(
    (state: RootState) => state.academics
  );

  useEffect(() => {
    dispatch(fetchAcademicsData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!academicsData) return null;

  return (
    <section className="w-full text-center pb-20">
      {/* Header Section */}
      <div className="relative w-full h-[200px]">
        <img
          src={academicsData.headerImage.src}
          alt={academicsData.headerImage.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-green-50 p-4 rounded-md shadow-md">
          <p className="text-secondary font-semibold">{academicsData.introText}</p>
        </div>
      </div>

      {/* Program Levels */}
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Explore Our Programs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {academicsData.programLevels.map((level) => (
            <button
              key={level}
              className="bg-gray-300 px-6 py-2 rounded-md text-teal-800 font-bold hover:bg-gray-400 transition"
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Description Sections */}
      <div className="max-w-3xl mx-auto px-6 space-y-12 text-left">
        {academicsData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
            <p className="text-secondary mt-3">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
