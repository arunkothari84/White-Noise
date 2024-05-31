import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults, mobileMenu } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <div className="h-56">
        <LeftNav />
      </div>
      <div className="scrollbar-hide grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((video) => {
              return <VideoCard key={video?.videoID} video={video} />;
            })}
        </div>
        {!loading && searchResults.length === 0 && (
          <div className="flex justify-center items-center w-full h-full font-bold text-2xl p-10  text-white">
            No videos found in this category, Cant afford much S3 space
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
