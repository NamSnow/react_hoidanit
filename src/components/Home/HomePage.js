import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

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
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>See plans</button>
          ) : (
            <button onClick={() => navigate("/user")}>Doing Quiz Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
