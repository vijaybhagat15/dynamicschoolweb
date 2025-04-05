import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSection6Data } from "../../redux/slices/section6Slice";
import { RootState, AppDispatch } from "../../redux/store";

const Allnews: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newsData, loading, error } = useSelector(
    (state: RootState) => state.section6
  );

  useEffect(() => {
    dispatch(fetchSection6Data());
  }, [dispatch]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 text-secondary text-lg">
      
      {/* Heading with text-primary color and centered alignment */}
      <h2 className="text-3xl font-bold mb-4 text-primary text-center">
        News & Blogs
      </h2>

      <div className="col-span-4 grid grid-cols-1 gap-2 px-2">
        {newsData.map((post) => (
          <div
            key={post._id}
            className="min-w-32 shadow-md rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto "
          >
            {/* Image */}
            <div className="relative w-full h-80 rounded-md overflow-hidden mx-auto bg-gray-200 flex items-center justify-center">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>
              <div className="flex">
               <div className="mx-auto sm:w-1/2">
                 {/* Title & Meta Information */}
                 <h3 className="mt-2 text-lg font-semibold font-serif text-primary">
                  {post.title}
                </h3>
                <p className="">Category: {post.category}</p>
                <p className="">{post.content}</p>
                <p className="mb-2 ">
                  By {post.author} on{" "}
                  {new Date(post.date).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </p>
               </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Allnews;
