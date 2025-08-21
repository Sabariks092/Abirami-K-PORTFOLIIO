import React from "react";
import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";
import { FaDrawPolygon } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

const tools = [
  { name: "Figma", icon: <SiFigma style={{ color: "#8b5cf6" }} /> },
  { name: "Adobe XD", icon: <TbBrandAdobeXd style={{ color: "#8b5cf6" }} /> },
  { name: "Photoshop", icon: <SiAdobephotoshop style={{ color: "#8b5cf6" }} /> },
  { name: "Illustrator", icon: <SiAdobeillustrator style={{ color: "#8b5cf6" }} /> },
  { name: "After Effects", icon: <SiAdobeaftereffects style={{ color: "#8b5cf6" }} /> },
  { name: "Miro", icon: <BiNetworkChart style={{ color: "#8b5cf6" }} /> },
  { name: "InVision", icon: <FaDrawPolygon style={{ color: "#8b5cf6" }} /> },
];

const Tools = () => {
  // Split tools into two rows: 3 in first, 4 in second
  const firstRow = tools.slice(0, 3);
  const secondRow = tools.slice(3);
  return (
    <section className="tools-section-gradient">
      <div className="container">
        <p className="section-title text-center mb-[50px]">UI/UX Tools</p>
        <div className="tools-rows">
          <div className="tools-row">
            {firstRow.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="tools-row">
            {secondRow.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tools-section-gradient {
          background: linear-gradient(90deg, #ede9fe 0%, #f8f9fc 20%, #f8f9fc 80%, #ede9fe 100%);
          padding: 60px 20px;
        }
        .tools-rows {
          display: flex;
          flex-direction: column;
          gap: 28px;
          align-items: center;
        }
        .tools-row {
          display: flex;
          gap: 28px;
          justify-content: center;
        }
        .tool-card {
          background: #fff;
          padding: 18px 20px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 140px;
          max-width: 200px;
        }
        .tool-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 16px rgba(139, 92, 246, 0.25);
        }
        .tool-icon {
          font-size: 30px;
        }
        span {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }
        @media (max-width: 700px) {
          .tools-row {
            flex-direction: column;
            gap: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default Tools;
