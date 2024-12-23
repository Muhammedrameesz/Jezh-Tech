import Anim from "../../ui/Anim.jsx";
import AnimatedImage from "./Animated-Images/Animation2.jsx";
import MainPic from "../../assets/images/imageset3/main-pic.52b102d9.png";
import AnimRL from "../../ui/AnimRL.jsx";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AndroidIcon from "@mui/icons-material/Android";
import TonalityOutlinedIcon from "@mui/icons-material/TonalityOutlined";
import { useState } from "react";
import Underline from "../../ui/Underline.jsx";

export default function ForthSection() {
  const [hover, setHover] = useState("");

  const hoverDescriptions = {
    Industry:
      "Whether it's smart homes, e-commerce, healthcare, or manufacturing, we align our services to meet the specific needs of each industry.",
    Adaptable:
      "Our solutions grow with your business, with easy integration and scalability as your company evolves.",
    Touch:
      "Our team is dedicated to understanding your business’s unique requirements and delivering solutions that resonate with your goals.",
    default:
      "Explore our tailored solutions designed to enhance your business efficiency and growth .",
  };

  const content = [
    {
      key: "Industry",
      icon: <SyncAltIcon />,
      title: "Built for Your Industry",
    },
    {
      key: "Adaptable",
      icon: <TonalityOutlinedIcon />,
      title: "Adaptable & Scalable",
    },
    {
      key: "Touch",
      icon: <AndroidIcon />,
      title: "Technology ",
    },
    {
      key: "Adaptabl",
      icon: <TonalityOutlinedIcon />,
      title: "lorem ipsum",
    },
    {
      key: "Touc",
      icon: <AndroidIcon />,
      title: "lorem ipsum ",
    },
    {
      key: "Toucdd",
      icon: <AndroidIcon />,
      title: "lorem ipsum ",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white  items-center pb-16 pt-20   font-poppins">
      {/* Left Section */}
      <Anim>
        <div className="relative flex flex-col items-start space-y-8 p-4 lg:p-6 rounded-md ml-5 md:ml-10">
          {/* Background Image */}

          {/* Header */}
          <div className="">
            <h1 className="text-[#0E314C]  text-xl md:text-2xl  font-semibold  mb-4">
              Customized Solutions for Every Business
            </h1>
            <Underline />
          </div>

          {/* Expertise Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5  w-full ">
            {content.map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => setHover(item.key)}
                onMouseLeave={() => setHover("")}
                className="flex flex-col md:flex-row gap-5 bg-white p-2 shadow-lg shadow-slate-200 rounded-md transform hover:-translate-y-2 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
              >
                <div className="text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm  font-semibold text-gray-600  mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}

            {/* Description Section */}
          </div>
          <section className="mt-3 h-[60px] flex gap-3 items-start justify-center w-full">
            {content.map((item, i) => {
              if (item.key === hover) {
                return (
                  <div key={i} className=" text-neutral-700">
                    {item.icon}
                  </div>
                );
              }
              return null;
            })}
            <p
              className={`text-sm   tracking-normal transition-all duration-700 ease-in-out ${
                hover
                  ? "opacity-100 max-h-[500px] translate-y-0 text-neutral-700"
                  : "opacity-0 text-neutral-500 text-center translate-y-10"
              }`}
              style={{ overflow: "hidden" }}
            >
              {hoverDescriptions[hover] || hoverDescriptions.default}
            </p>
          </section>
        </div>
      </Anim>

      {/* Right Section */}
      <div className=" relative overflow-hidden flex justify-center items-center pt-20 ">
        <div className="block md:hidden">
          <AnimRL>
            <img
              src={MainPic}
              alt="service"
              className="max-w-xs sm:max-w-sm h-auto object-contain"
            />
          </AnimRL>
        </div>
        <div className="hidden md:block">
          <AnimatedImage />
        </div>
      </div>
    </div>
  );
}
