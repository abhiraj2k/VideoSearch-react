import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  // Return nothing if video is not present
  if (!video) {
    return <div></div>;
  }
  // If video is present, show it on the screen
  return (
    <div className="video-container">
      <div className="video-responsive">
        <iframe
          title="viedo player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameborder="0"
        ></iframe>
      </div>
      <div className="description">
        <h2>{video.snippet.title}</h2>
        <h5>{video.snippet.description}</h5>
      </div>
    </div>
  );
};

export default VideoDetail;
