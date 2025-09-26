import React from "react";
import Chip from "@mui/material/Chip";
import drive from "../assets/images/drive.png";
import frogger from "../assets/images/frogger.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {/* Project 1: Frogger */}
        <div className="project">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img src={frogger} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <h2>Frogger in C</h2>
          </a>
          <p>
            Developed a simplified Frogger clone in C, focusing on process and
            thread parallelization and scheduling. Implemented terminal-based
            graphics using the ncurses library.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            <Chip className="chip" label="C" />
            <Chip className="chip" label="Parallelization" />
          </div>
        </div>

        {/* Project 2: Autonomous Driving */}
        <div className="project">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img src={drive} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <h2>Autonomous Driving</h2>
          </a>
          <p>
            Built an autonomous driving simulation in Unity using a
            reinforcement learning approach, training agents to complete
            randomized tracks in the shortest possible time.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            <Chip className="chip" label="C#" />
            <Chip className="chip" label="Python" />
            <Chip className="chip" label="PyTorch" />
            <Chip className="chip" label="Unity" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
