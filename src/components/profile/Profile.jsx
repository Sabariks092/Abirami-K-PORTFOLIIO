import person from "../../assets/abirami-k.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import resume from '../../assets/resume/Abirami-K-Resume.pdf'

import { calculateExperience } from "../../utils/experience";
import { FaPaintBrush } from "react-icons/fa";

const Profile = () => {
  const expDuration = calculateExperience("2025-03-01");

  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
       <div className="mx-auto max-w-184.25 mb-[60px]">
          <p className="section-title text-center">Experience</p>
          <p className="font-normal text-center  text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Designing impactful digital products by transforming ideas into user-friendly interfaces, ensuring accessibility, consistency, and smooth collaboration from concept to launch
          </p>
        </div>
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-126 h-137 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[100%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            UI/UX Designer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal  text-gray-600`}
          >
            <p className="mb-3">
              LeMeniz Technologies Pvt. Ltd., Pondicherry <br />
              (Mar 2025 – Present | {expDuration})
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li className="list text-[16px] text-gray-800 flex flex-row items-start gap-2"> <FaPaintBrush className="text-[#1BC0BA] mt-1 border rounded-full  px-1 py-1" size={28}/> <span>Designed 7+ Mobile App UI Projects From Research To High-Fidelity Prototypes Using Figma</span></li>
              <li className="list text-[16px] text-gray-800 flex flex-row items-start gap-2"> <FaPaintBrush className="text-[#1BC0BA] mt-1 border rounded-full  px-1 py-1" size={28}/> <span>Collaborated With Developers For Smooth Design-To-Development Handoff</span></li>
              <li className="list text-[16px] text-gray-800 flex flex-row items-start gap-2"> <FaPaintBrush className="text-[#1BC0BA] mt-1 border rounded-full  px-1 py-1" size={28}/> <span>Applied Design Thinking And Usability Principles To Create Clean, User-Friendly Interfaces</span></li>
              <li className="list text-[16px] text-gray-800 flex flex-row items-start gap-2"> <FaPaintBrush className="text-[#1BC0BA] mt-1 border rounded-full  px-1 py-1" size={28}/> <span>Designed End-To-End UI/UX For ERMS, HRMS, And POS Applications, Improving Workflow Efficiency</span></li>
              <li className="list text-[16px] text-gray-800 flex flex-row items-start gap-2"> <FaPaintBrush className="text-[#1BC0BA] mt-1 border rounded-full  px-1 py-1" size={28}/> <span>Created Logos, Brochures, Banners, Flyers, And Social Media Creatives For Branding</span></li>
              <li className="list text-[16px] text-gray-800 flex flex-row items-start gap-2"> <FaPaintBrush className="text-[#1BC0BA] mt-1 border rounded-full  px-1 py-1" size={28}/> <span>Edited Promotional Videos And Produced AI-Generated Content For Campaigns</span></li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href={resume}
              target="_blank" rel="noopener noreferrer" download
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
