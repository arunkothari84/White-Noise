import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

const SuggestionVideoCard = ({ video, id }) => {
  console.log(video);
  return (
    <Link to={`/videos/${video?.videoID}`}>
      {video?.videoID !== id ? (
        <div className="flex mb-3">
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={`https://uploaded-video-split-data.s3.amazonaws.com/${video?.videoID}/thumbnail.jpg`}
            />
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
              {video?.videoName}
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.views, 2)} views`}</span>
            </div>
          </div>
        </div>
      ) : null}
    </Link>
  );
};

export default SuggestionVideoCard;
