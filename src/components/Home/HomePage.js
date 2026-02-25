import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source type="video/mp4" src={videoHomePage} />
      </video>
    </div>
  );
};

export default HomePage;
