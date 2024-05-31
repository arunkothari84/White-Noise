import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        loop: true,
        preload: "auto",
        controlBar: {
          children: [
            "playToggle", // Show only the play/pause button
            "fullscreenToggle", // Show the fullscreen button
            "volumePanel", // Show the volume panel
          ],
        },
        sources: [
          {
            src,
            type: "application/x-mpegURL",
          },
        ],
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="video-js vjs-default-skin w-full h-full"
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
