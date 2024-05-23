import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import axios from "axios";
import LeftNav from "./LeftNav";

import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
import VideoPlayer from "../components/VideoPlayer";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [comment, setComment] = useState();
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
    fetchComments();
  }, [id]);

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    const payload = { id, comment };
    console.log(payload);
    axios
      .post(`${process.env.REACT_APP_INTANCE_URL}api/comments`, payload)
      .then((res) => {
        setComment("");

        fetchComments();
      });
  };

  const fetchComments = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_INTANCE_URL}api/comments/${id}`)
      .then((res) => {
        setComments(res.data);
        setLoading(false);
      });
  };

  const fetchVideoDetails = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_INTANCE_URL}api/videos/details/${id}`)
      .then((res) => {
        setVideo(res.data);
        setLoading(false);
      });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_INTANCE_URL}api/videos/related/${id}`)
      .then((res) => {
        setRelatedVideos(res.data);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center flex-row z-0 bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <LeftNav />
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <VideoPlayer
              src={`${process.env.REACT_APP_CLOUDFRONT_URL}/${id}/index.m3u8`}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.videoName}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {`${abbreviateNumber(video?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(video?.views, 2)} Views`}
              </div>
            </div>
          </div>
          <div className="text-white ">
            <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
              Comments
            </div>
            <div className="border-2 border-[#303030]">
              <form onSubmit={(e) => handleSubmitComment(e)}>
                <input
                  className="w-full h-20 bg-black p-2"
                  type="text"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </form>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {comments?.map((comment, index) => (
                <div className="flex border-2 border=[#303030] ">
                  <p className="p-2 w-[90%]">{comment.comment}</p>
                  {comment.sentiment === "POSITIVE" ? (
                    <p className="flex items-center justify-center grow">
                      <AiOutlineLike />
                    </p>
                  ) : (
                    <p className="flex items-center justify-center grow">
                      <AiOutlineDislike />
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr className="lg:hidden text-[#303030] mt-4"></hr>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.map((video, index) => (
            <SuggestionVideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
