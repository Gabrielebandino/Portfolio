import React from "react";
import "../assets/styles/Extras.scss";

// Certification and program logos
import ltfLogo from "../assets/images/ltf.svg";
import cambridgeLogo from "../assets/images/cambridge-c1.svg";
import ieltsLogo from "../assets/images/ielts.svg";

function Extras() {
  return (
    <div className="container" id="extras">
      <div className="extras-container">
        <h1 className="section-title extras">Extras</h1>
        <div className="extras-grid">
          {/* Lead The Future Mentorship */}
          <div className="extras-card">
            <div className="card-header">
              <img
                src={ltfLogo}
                alt="Lead The Future"
                className="certification-logo"
              />
              <div className="certification-info">
                <h3 className="certification-title">Lead The Future Mentee</h3>
                <div className="organization-date">
                  <span className="organization">
                    Lead The Future Mentorship
                  </span>
                  <span className="date">Sep 2025 - Present</span>
                </div>
              </div>
            </div>
            <div className="description">
              Among the few Italian students selected as mentee for
              LeadTheFuture, a leading mentorship non-profit organization for
              students in STEM, with acceptance rate around 10%.
            </div>
          </div>

          {/* Cambridge C1 */}
          <div className="extras-card">
            <div className="card-header">
              <img
                src={cambridgeLogo}
                alt="Cambridge C1"
                className="certification-logo"
              />
              <div className="certification-info">
                <h3 className="certification-title">English C1 Certificate</h3>
                <div className="organization-date">
                  <span className="organization">Cambridge Assessment</span>
                  <span className="date">Achieved 2019</span>
                </div>
              </div>
            </div>
            <div className="description">
              Advanced level English proficiency certification demonstrating
              effective operational proficiency in academic and professional
              contexts.
            </div>
          </div>

          {/* IELTS 7.5 */}
          <div className="extras-card">
            <div className="card-header">
              <img
                src={ieltsLogo}
                alt="IELTS 7.5"
                className="certification-logo"
              />
              <div className="certification-info">
                <h3 className="certification-title">IELTS Academic 7.5</h3>
                <div className="organization-date">
                  <span className="organization">British Council</span>
                  <span className="date">Achieved 2024</span>
                </div>
              </div>
            </div>
            <div className="description">
              High proficiency score in International English Language Testing
              System, demonstrating strong academic English skills across all
              competencies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extras;
