import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/videos/${video?.videoID}`}>
      <div className="flex flex-col mb-8 ">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={`https://uploaded-video-split-data.s3.amazonaws.com/${video?.videoID}/thumbnail.jpg`}
            alt=""
          />
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start"></div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.videoName}
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.views)} views`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
