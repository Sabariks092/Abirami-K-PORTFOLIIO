import person from "../../assets/images/Abi K.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { CiMail } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import resume from '../../assets/resume/Abirami-K-Resume.pdf'
import TypeWriterEffect from 'react-typewriter-effect';

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    icon: CiMail,
    description: "Mail Me",
    link: "mailto:abimerlin2002@gmail.com",
    isDownload: false
  },
  {
    id: 2,
    icon: FaWhatsapp,
    description: "Say Hello",
    link: "https://wa.me/918825923450?text=Hello%20Abirami%2C%20I%20would%20like%20to%20connect%20with%20you.",
    isDownload: false
  },
  {
    id: 3,
    icon: MdOutlineFileDownload,
    description: "Resume",
    link: resume,
    isDownload: true 
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      {/* Left Side Content */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          {/* Heading */}
          <p className="text-2xl xxs:text-2xl sm:max-xl:text-3xl xl:text-4xl font-semibold w-full leading-tight">
            Hello, I’m
          </p>

        <p
  className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-bold"
>
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: "linear-gradient(to right, #04807dff, #1bc0ba)",
    }}
  >
    <TypeWriterEffect
      textStyle={{
        fontWeight: 'bold',
        backgroundImage: "linear-gradient(to right, #04807dff, #1bc0ba)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      startDelay={200}
      cursorColor="#04807d"
      cursorBlinking={true}
      cursorStyle="]"
      multiText={[
        'Abirami K',
        'UI/UX Designer'
      ]}
      multiTextDelay={1500}
      typeSpeed={100}
      multiTextLoop
    />
  </span>
</p>


          {/* Sub Text */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Passionate UI/UX Designer with 1.5 years of design experience, including 6 months of professional work in a company environment. Skilled in creating user-friendly web and mobile interfaces, wireframes, prototypes, and design systems. Experienced in collaborating with developers and stakeholders to deliver designs that improve usability and engagement. Strong foundation in design thinking and user research, with a portfolio of both professional and personal projects.
          </p>

          {/* Info Grid */}
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-[100px] gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[436/436] relative"
      >
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute top-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
