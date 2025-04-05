import React from "react";

interface NewsCardProps {
  post: {
    _id: string;
    title: string;
    content: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <div className="min-w-32 shadow-md rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto relative">
      {/* Image */}
      <div className="relative sm:w-1/2 w-full aspect-square rounded-md overflow-hidden mx-auto">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Title & Meta Information */}
      <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">
        {post.title}
      </h3>
      <p className="text-gray-600 text-xs">Category: {post.category}</p>
      <p className="text-gray-500 text-xs mb-2 font-sans">{post.content}</p>
      <p className="text-gray-500 text-xs mb-2 font-sans">
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
  );
};

export default NewsCard;
