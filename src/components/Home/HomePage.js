import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source type="video/mp4" src={videoHomePage} />
      </video>

      <div className="homepage-content">
        <div className="title-1">DATA COLLECTION</div>
        <div className="title-2">
          Get 3.5x more data with a form expert. Backed by over a decade of
          experience, Typeform AI helps you build expertly-designed,
          best-practice forms proven to get more responses.
        </div>

        <div className="title-3">
          <button>See plans</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
