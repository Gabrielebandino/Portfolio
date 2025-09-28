import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

// Local logos
import amazonLogo from "../assets/images/amazon.png";
import unicaLogo from "../assets/images/unica.png";
import visioLogo from "../assets/images/visio.png";

type LogoIconProps = {
  src: string;
  alt: string;
};

function LogoIcon({ src, alt }: LogoIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%", // fill parent
        height: "100%",
        objectFit: "contain",
        borderRadius: "50%", // crop into a perfect circle
      }}
    />
  );
}

// Transparent style so we don’t draw an extra circle background
const circleStyle: React.CSSProperties = {
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Amazon – Business Intelligence Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Mar 2025 – Aug 2025"
            iconStyle={circleStyle}
            icon={<LogoIcon src={amazonLogo} alt="Amazon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Business Intelligence Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Amazon</h4>
            <ul>
              <li>
                Built internal tool/service to instantly detect delays in
                team-owned data pipelines, saving hours of on-call work each
                day.
              </li>
              <li>
                Ideated, implemented, and automated the retrieval of the team’s
                MBR metrics, central to management’s discussions with directors.
              </li>
              <li>
                Owned Software Development and Data Engineering projects within
                the team.
              </li>
              <li>
                Partecipated in GenAI Hackathons, hosted by Principal Applied
                Scientist teams.
              </li>
            </ul>
            <p>
              <strong>Stack:</strong> SQL, Python, TypeScript, AWS Lambda,
              Redshift, DynamoDB
            </p>
          </VerticalTimelineElement>

          {/* University of Cagliari – Research Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Mar 2024 – Jul 2024"
            iconStyle={circleStyle}
            icon={<LogoIcon src={unicaLogo} alt="University of Cagliari" />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Cagliari
            </h4>
            <ul>
              <li>
                Researched the application of temporal autoencoders to uncover
                patterns in financial statements that correlate with long-term
                corporate prosperity.
              </li>
              <li>
                Analyzed and forecasted corporate performance across a dataset
                of 300,000 Italian companies.
              </li>
              <li>
                Presented thesis work{" "}
                <em>
                  "Latent Space Exploration for Financial Statement Forecasting"
                </em>
                , showcasing methodologies and key findings.
              </li>
            </ul>
            <p>
              <strong>Stack:</strong> R, Python, TensorFlow
            </p>
          </VerticalTimelineElement>

          {/* Visioscientiae – Software Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Nov 2023 – Mar 2024"
            iconStyle={circleStyle}
            icon={<LogoIcon src={visioLogo} alt="Visioscientiae" />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Visioscientiae
            </h4>
            <ul>
              <li>
                Developed a Dockerized web application to generate dynamic
                product descriptions for large e-commerce platforms.
              </li>
              <li>
                Delivered a scalable and efficient solution, presented diverse
                LLM options based on customer satisfaction.
              </li>
            </ul>
            <p>
              <strong>Stack:</strong> TypeScript, Python, Node, Express,
              FastAPI, MongoDB, Docker, LLMs
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
