import React from "react";
import {
  FaUserAlt,
  FaDesktop,
  FaProjectDiagram,
  FaPenFancy,
  FaSearch,
  FaPuzzlePiece,
} from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";

// Add descriptions for each skill
const skills = [
  {
    name: "User Experience",
    icon: <FaUserAlt />,
    description: "Designing intuitive and engaging experiences for users.",
    progress: 90,
  },
  {
    name: "User Interface",
    icon: <FaDesktop />,
    description: "Crafting visually appealing and user-friendly interfaces.",
    progress: 85,
  },
  {
    name: "Wireframing",
    icon: <FaProjectDiagram />,
    description: "Creating low-fidelity layouts to visualize structure.",
    progress: 80,
  },
  {
    name: "Prototyping",
    icon: <FaPenFancy />,
    description: "Developing interactive prototypes for testing and feedback.",
    progress: 75,
  },
  {
    name: "Design Thinking",
    icon: <SiMaterialdesign />,
    description: "Applying design thinking methods for innovative solutions.",
    progress: 88,
  },
  {
    name: "User Research",
    icon: <FaSearch />,
    description: "Conducting research to understand user needs deeply.",
    progress: 82,
  },
  {
    name: "Problem Solving",
    icon: <FaPuzzlePiece />,
    description: "Identifying and solving complex design challenges.",
    progress: 95,
  },
];

const Skills = () => {
  return (
    <section
      className="skills-section"
      style={{ background: "#f8f9fc", padding: "120px 20px" }}
    >
      <div className="container">
        <div className="mx-auto max-w-144.25 mb-[60px]">
          <p className="section-title text-center">Skills</p>
          <p className="font-normal text-center  text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Crafting intuitive, user-focused designs that blend creativity and
            functionality to deliver seamless digital experiences
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-top">{skill.icon}</div>
              <h3 className="skill-title">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          justify-content: center;
          justify-items: center;
        }
        .skill-card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }
        .skill-icon-top {
          font-size: 42px;
          color: #1bc0ba;
          margin-bottom: 15px;
        }
        .skill-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }
        .skill-description {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 16px;
          min-height: 40px;
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
        .skill-progress-label {
          font-size: 0.95rem;
          color: #8b5cf6;
          font-weight: 500;
          margin-top: 6px;
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
