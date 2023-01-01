import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            <a href="https://www.linkedin.com/in/subhashree-satapathy/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/subhashree-satapathy/">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/subhashree-satapathy/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/subhashree-satapathy/">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text"> Hello,
              {" "}
              I am
              <span className="highlighted-text"> Subhashree</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "} 
              <h1>
                {" "}
                  <Typical loop={Infinity} steps={[
                    "Enthusiastic Dev 🌍", 1000,
                    "Full stack Developer 👩‍💻", 1000,
                    "Java-Angular Development😎", 1000,
                    "MERN / MEAN Development🤩", 1000,
                  ]}
                  />
              </h1>
              <span className="profile-role-tagline">
                knack of building applications from frontend and backend operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""} 
              Hire Me {" "}
            </button>
            <a href="SubhashreeSatapathy.pdf" download="SubhashreeSatapathy.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div> 
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile