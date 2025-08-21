import React from "react";
import {
  FaUserAlt,
  FaDesktop,
  FaProjectDiagram,
  FaPenFancy,
  FaSearch,
  FaPuzzlePiece,
} from "react-icons/fa";
// Removed GiPuzzlePiece import
import { SiMaterialdesign } from "react-icons/si";

const skills = [
  { name: "User Experience", icon: <FaUserAlt />, progress: 90 },
  { name: "User Interface", icon: <FaDesktop />, progress: 85 },
  { name: "Wireframing", icon: <FaProjectDiagram />, progress: 80 },
  { name: "Prototyping", icon: <FaPenFancy />, progress: 75 },
  { name: "Design Thinking", icon: <SiMaterialdesign />, progress: 88 },
  { name: "User Research", icon: <FaSearch />, progress: 82 },
  { name: "Problem Solving", icon: <FaPuzzlePiece />, progress: 95 },
];

const Skills = () => {
  // Split skills into two columns
  const mid = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, mid);
  const rightSkills = skills.slice(mid);

  return (
    <section
      className="skills-section"
      style={{ background: "#f8f9fc", padding: "100px 20px" }}
    >
      <div className="container">
        <p className="section-title text-center mb-[30px]">Skills</p>
        <div className="skills-columns">
          <div className="skills-col">
            {leftSkills.map((skill, index) => (
              <div key={index} className="skill-bar-card">
                <div className="skill-bar-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-title">{skill.name}</span>
                  <span className="skill-progress-label">
                    {skill.progress}%
                  </span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-col">
            {rightSkills.map((skill, index) => (
              <div key={index} className="skill-bar-card">
                <div className="skill-bar-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-title">{skill.name}</span>
                  <span className="skill-progress-label">
                    {skill.progress}%
                  </span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-columns {
          display: flex;
          gap: 40px;
          justify-content: center;
        }
        .skills-col {
          flex: 1;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .skill-bar-card {
          background: #fff;
          padding: 22px 18px 16px 18px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }
        .skill-bar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .skill-icon {
          font-size: 28px;
          color: #8b5cf6;
          margin-right: 12px;
        }
        .skill-title {
          flex: 1;
          font-size: 1.08rem;
          font-weight: 600;
          color: #333;
        }
        .skill-progress-label {
          font-size: 0.98rem;
          color: #8b5cf6;
          font-weight: 500;
          margin-left: 10px;
        }
        .progress-bar-bg {
          width: 100%;
          height: 8px;
          background: #e9e5f7;
          border-radius: 6px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6 60%, #a78bfa 100%);
          border-radius: 6px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 700px) {
          .skills-columns {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
