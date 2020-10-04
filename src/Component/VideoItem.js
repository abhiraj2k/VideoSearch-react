import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  // Rendering a video item
  // Passing selected video to parent component
  return (
    <div className="card" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="title">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
