import React, { Component } from "react";
import "./video.css";
const Covid19VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className="video-item item"
      style={{ margin: 20 }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      &nbsp;&nbsp;
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default Covid19VideoItem;
