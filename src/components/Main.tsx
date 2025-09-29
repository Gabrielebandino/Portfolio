import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import user from "../assets/images/user.jpeg";

function Main() {
  useEffect(() => {
    // Preload the image for better mobile compatibility
    const img = new Image();
    img.src = user;
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={user}
            alt="Avatar"
            width="150"
            height="150"
            loading="eager"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/gabrielebandino"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielebandino/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Gabriele Bandino</h1>
          <p>HPC @ Polimi | Ex-Amazon Engineering Intern</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/gabrielebandino"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielebandino/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
