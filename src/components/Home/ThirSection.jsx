import AnimRL from "../../ui/AnimRL.jsx";
import AnimatedImage from "./Animated-Images/Animation1.jsx";
import ServiceLeft from "../../assets/images/imageset1/service-left-main-pic.62057aa2.png";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useState } from "react";
import Anim from "../../ui/Anim.jsx";
import Underline from "../../ui/Underline.jsx"

export default function ForthSection() {
  const [hover, setHover] = useState("");

  const hoverDescriptions = {
    Internet:
      "We specialize in connecting devices and systems to make your home, business, or industrial environments smarter, safer, and more efficient.",
    Artificial:
      "Our AI solutions empower businesses to optimize processes, improve decision-making, and drive automation through intelligent systems.",
    Robotics:
      "We integrate robotics and automation technology to streamline tasks, improve productivity, and ensure operational excellence across industries.",
    default: "Hover over any section to learn more about our expertise.",
  };

  const content = [
    {
      key: "Internet",
      title: "Internet of Things (IoT)",
      Icon: <SettingsInputAntennaOutlinedIcon />,
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <AutoAwesomeIcon />,
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <SmartToyIcon />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-20 items-center pb-16 pt-20 px-6 pd:px-20 lg:px-24 font-poppins">
      <div className="mt-[10%] md:mt-[10%] relative overflow-hidden">
        <div className="block md:hidden">
          <AnimRL>
            <img
              src={ServiceLeft}
              alt="service"
              className="max-w-xs sm:max-w-sm h-auto object-contain"
            />
          </AnimRL>
        </div>
        <div className="hidden md:block">
          <AnimatedImage />
        </div>
      </div>
      <Anim>
        <div className="relative flex flex-col items-start space-y-8 p-4 lg:p-6 rounded-md ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover  top-10 opacity-5"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/coloured-background-design_1164-257.jpg?t=st=1734158786~exp=1734162386~hmac=81d7c5903a0022540b6ecc7bdbc30fc04f7ecc3accd3c2e7dd7716c9ca84fb44&w=740)",
            }}
          ></div>

          {/* Header */}
          
           <div className=" mx-5">
            <h1 className="text-[#0E314C]  text-xl md:text-xl lg:text-2xl font-extrabold leading-tight mb-4">
              Our Expertise in Innovation
            </h1>
            <Underline/>
            </div>
           
         

          {/* Expertise Sections */}
          <div className="grid grid-cols-1 gap-5 mx-5 w-full">
            {content.map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => setHover(item.key)}
                onMouseLeave={() => setHover("")}
                className="flex  flex-col md:flex-row gap-5 shadow-lg bg-white p-2 rounded-md transform hover:-translate-y-2 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group "
              >
                <div className="text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out ">
                  {item.Icon}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm  font-semibold text-gray-600 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}

            {/* Description Section */}
            <section className="mt-3 h-[60px] flex gap-3 items-start justify-center w-full">
              {content?.map((item, i) => {
                if (item.key === hover) {
                  return (
                    <div key={i} className="text-neutral-700 ">
                      {item.Icon}
                    </div>
                  );
                }
              })}
              <p
                className={`text-sm tracking-normal transition-all duration-700 ease-in-out ${
                  hover
                    ? "opacity-100 max-h-[500px] translate-y-0 text-neutral-700 "
                    : "opacity-0 text-neutral-500 text-center translate-y-10"
                }`}
                style={{
                  overflow: "hidden",
                  transition: "all 0.7s ease-in-out", // smooth transition
                }}
              >
                {hoverDescriptions[hover] || hoverDescriptions.default}
              </p>
            </section>
          </div>
        </div>
      </Anim>

      {/* Right Section */}
    </div>
  );
}
