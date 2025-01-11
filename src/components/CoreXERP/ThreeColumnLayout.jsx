import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import Image from "../../assets/CoreXImages/valuable-product.png";

const contents = [
  {
    icon: <FaReact size={40} />,
    title: "React Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaNodeJs size={40} />,
    title: "Node.js Backend",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <FaPython size={40} />,
    title: "Python Scripting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaJava size={40} />,
    title: "Java Programming",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Database Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaAws size={40} />,
    title: "AWS Cloud Services",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const LayoutComponent = () => {
  return (
    <div className="space-y-12 bg-white font-jost py-16">
      {/* Two Column Layout for Heading and Description */}
      <div className="flex flex-col md:flex-row justify-center items-center px-4 max-w-7xl mx-auto space-y-6 md:space-y-0 ">
        <div className="md:w-1/2 ">
          <h1 className="text-2xl  md:text-4xl  text-customBlue mb-4 text-center">
            Empowering <span className="font-semibold">Your Business</span>
          </h1>
        </div>
        <div className="md:w-1/2 ">
          <p className="text-lg text-gray-500 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida dictum fusce ut.
          </p>
        </div>
      </div>

      {/* Three Column Layout for Contents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center px-6">
        {/* Content Column */}
        <div className=" grid grid-cols-1 gap-6">
          {contents.slice(0, 3).map((content, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg p-6 w-full flex  items-center gap-4 border-b"
            >
              <div className="-mt-4 md:-mt-8 text-customGreen">{content.icon}</div>
              <h3 className="text-base font-semibold text-gray-700  ">{content.title}: <span className="text-gray-500 text-base font-normal ">{content.description}</span></h3>
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-1 gap-6">
          {contents.slice(3).map((content, index) => (
             <div
             key={index}
             className="bg-white rounded-lg p-6 w-full flex  items-center gap-4 border-b"
           >
             <div className=" -mt-4 md:-mt-8 text-customGreen">{content.icon}</div>
             <h3 className="text-base  text-gray-700 font-semibold">{content.title}: <span className="text-gray-500 text-base font-normal">{content.description}</span></h3>
           </div>
          ))}
        </div>

        {/* Image Column */}
        <div className=" mt-6 md:mt-0">
          <img src={Image} alt="Placeholder" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
