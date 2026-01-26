import person from "../../assets/abirami-k.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import resume from '../../assets/resume/Abirami-K-Resume.pdf'

const Profile = () => {
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
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className="mb-3">
              LeMeniz Technologies Pvt. Ltd., Pondicherry <br />
              (Mar 2025 – Present | 11+ months)
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Shaped 5+ mobile app projects from research to launch using design thinking.</li>
              <li>Created wireframes, prototypes, and high-fidelity UI designs to improve usability and engagement.</li>
              <li>Collaborated with developers for smooth design-to-development handoff.</li>
              <li>Ensured consistency and accessibility by applying design systems and conducting usability testing.</li>
              <li>Designed social media posts, marketing creatives, and videos to boost brand presence and engagement.</li>
              <li>Contributed to website design projects, ensuring responsive layouts and user-friendly interfaces.</li>
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
