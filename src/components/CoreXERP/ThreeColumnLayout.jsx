
import Image from "../../assets/CoreXImages/valuable-product.png";
// import { FaRegClock, FaTasks, FaChartLine, FaExpandArrowsAlt, FaUsers, FaShieldAlt } from 'react-icons/fa';
import {
  FaRegClock,
  FaRegCheckCircle,
  FaRegChartBar,
  FaRegArrowAltCircleUp,
  FaRegHandshake,
  FaRegLifeRing
} from 'react-icons/fa';

const contents = [
  {
    icon: <FaRegClock size={35} />,
    title: "Saves Time",
    description:
      "Automate repetitive processes and optimize workflows, so you can focus on your core business goals without unnecessary delays.",
  },
  {
    icon: <FaRegCheckCircle size={35} />,
    title: "Boosts Efficiency",
    description:
      "Consolidate your operations into a single, centralized platform to minimize complexity, increase accuracy, and elevate productivity.",
  },
  {
    icon: <FaRegChartBar size={35} />,
    title: "Data-Driven Insights",
    description:
      "Leverage real-time analytics and comprehensive reporting to make informed decisions that drive success.",
  },
  {
    icon: <FaRegArrowAltCircleUp size={35} />,
    title: "Scalable for Growth",
    description:
      "CoreX ERP grows with your business, providing the flexibility and support needed at every stage of your journey.",
  },
  {
    icon: <FaRegHandshake size={35} />,
    title: "Enhanced Collaboration",
    description:
      "Facilitate seamless communication and data sharing across teams, ensuring everyone is on the same page and working toward common goals.",
  },
  {
    icon: <FaRegLifeRing size={35} />,
    title: "Robust Security",
    description:
      "Protect your business-critical data with advanced security features, ensuring compliance and peace of mind.",
  },
];

const LayoutComponent = () => {
  return (
    <div className="space-y-12 bg-white font-jost py-16">
      {/* Two Column Layout for Heading and Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-5 md:mx-8 px-4 max-w-7xl gap-6">
        <div className="">
          <h1 className="text-2xl md:text-4xl  text-customBlue ">
          Why CoreX is the right
          </h1>
          <h1 className="text-2xl  md:text-4xl  text-customBlue "><span className="font-semibold"> choice </span> for you</h1>
        </div>
        <div className=" col-span-2">
          <p className="text-lg text-gray-500 text-start">
          Our CoreX ERP solution is designed to simplify and streamline your business operations by integrating all essential tools and data into one seamless platform. Experience enhanced productivity, improved collaboration, and smarter decision-making, all while saving time and reducing costs. Whether you&apos;re a startup or a growing enterprise, CoreX ERP adapts to meet your unique business needs. 
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
