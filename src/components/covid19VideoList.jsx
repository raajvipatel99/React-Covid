import React, { Component } from "react";
import Covid19VideoItem from "./covid19VideoItem";
const Covid19VideoList = ({ videos, handleVideoSelect }) => {
  const renderVideos = videos.map((video) => {
    return (
      <Covid19VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return (
    <div
      className="ui relaxed divided list"
      style={{ width: 600, backgroundColor: "#F7F7F7" }}
    >
      <div style={{ margin: 20 }}>{renderVideos}</div>
    </div>
  );
};
export default Covid19VideoList;
