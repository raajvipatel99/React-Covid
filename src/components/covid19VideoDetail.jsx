import React, { Component } from "react";

const Covid19VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div>
        <iframe
          style={{ width: 600, height: 300, margin: 10 }}
          src={videoSrc}
          allowFullScreen
          title="Video Player"
        />
      </div>
      <div style={{ margin: 10 }}>
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default Covid19VideoDetail;
