import person from "../../assets/images/Abi K.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { CiMail } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    icon: CiMail,
    description: "Mail Me",
  },
  {
    id: 2,
    icon: FaWhatsapp,
    description: "Say Hello",
  },
  {
    id: 3,
    icon: MdOutlineFileDownload,
    description: "Resume",
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
         
            <span
              
            >
              <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl 
                         font-bold bg-gradient-to-r from-purple-500 to-pink-500 
                         bg-clip-text text-transparent">  Abirami K</p>
            
            </span>
          </p>

          {/* Sub Text */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Professional{" "}
            <span className="bg-highlight">UI/UX Designer</span> based in
            Cuddalore, TN. I strive to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>

          {/* Button */}
          {/* <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Let’s Connect!
            </a>
          </p> */}

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
