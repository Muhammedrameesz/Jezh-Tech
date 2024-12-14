// import Tech from "../../assets/icons/internet-things_10019258.png";
// import Ai from "../../assets/icons/artificial-intelligence_18067159.png";
// import Robot from "../../assets/icons/robotics_1129358.png";
import AnimRl from "../../ui/AnimRL.jsx";
import AnimatedImage from "./Animated-Images/Animation1.jsx";
import ServiceLeft from "../../assets/images/imageset1/service-left-main-pic.62057aa2.png";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useState } from "react";

export default function ThirSection() {
  const [hover, setHover] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 items-center bg-gray-100 font-poppins mt-20 px-6 md:px-20 lg:px-24 overflow-hidden pb-20">
      <div className="flex justify-center items-center mt-[20%] md:mt-[30%]">
        <div className="block md:hidden">
          <AnimRl>
            <img
              src={ServiceLeft}
              alt="service"
              className="max-w-xs sm:max-w-sm h-auto object-contain"
            />
          </AnimRl>
        </div>
        <div className="hidden md:block">
          <AnimatedImage />
        </div>
      </div>

      <AnimRl>
        <div className="flex flex-col items-start space-y-8 p-4 lg:p-6 relative overflow-hidden  mt-20">
          <div
            className="absolute  inset-0 bg-no-repeat bg-cover rotate-180 top-10  opacity-10"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/coloured-background-design_1164-257.jpg?t=st=1734158786~exp=1734162386~hmac=81d7c5903a0022540b6ecc7bdbc30fc04f7ecc3accd3c2e7dd7716c9ca84fb44&w=740)",
            }}
          ></div>

          <div className="flex flex-row items-center justify-center space-x-4 ">
            <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-2xl font-extrabold leading-tight  mb-4  ">
              Our Expertise in Innovation
            </h1>
            <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
          </div>

          <div
            onMouseEnter={() => setHover("Internet")}
            onMouseLeave={() => setHover("")}
            className="flex flex-col md:flex-row gap-5 bg-white p-2 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
          >
            <SettingsInputAntennaOutlinedIcon className="mt-[2px] text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out" />
            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg font-medium text-gray-800 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                Internet of Things (IoT)
              </h2>
              <p
                className={`text-xs md:text-sm text-gray-500 tracking-normal group-hover:text-gray-100 transition-all duration-700 ease-in-out ${
                  hover === "Internet"
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-3"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                We specialize in connecting devices and systems to make your
                home, business, or industrial environments smarter, safer, and
                more efficient.
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setHover("Artificial")}
            onMouseLeave={() => setHover("")}
            className="flex flex-col md:flex-row gap-5 bg-white p-2 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
          >
            <AutoAwesomeIcon className="mt-[2px] text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out" />
            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg font-medium text-gray-800 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                Artificial Intelligence (AI)
              </h2>
              <p
                className={`text-xs md:text-sm text-gray-500 tracking-normal group-hover:text-gray-100 transition-all duration-700 ease-in-out ${
                  hover === "Artificial"
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-3"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                Our AI solutions empower businesses to optimize processes,
                improve decision-making, and drive automation through
                intelligent systems.
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setHover("Robotics")}
            onMouseLeave={() => setHover("")}
            className="flex flex-col md:flex-row gap-5 bg-white p-2 rounded-lg shadow-lg transform transition-transform duration-700 hover:-translate-y-3 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
          >
            <SmartToyIcon className="mt-[2px] text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out" />
            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg font-medium text-gray-800 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                Robotics & Automation
              </h2>
              <p
                className={`text-xs md:text-sm text-gray-500 tracking-normal group-hover:text-gray-100 transition-all duration-700 ease-in-out ${
                  hover === "Robotics"
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-3"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                We integrate robotics and automation technology to streamline
                tasks, improve productivity, and ensure operational excellence
                across industries.
              </p>
            </div>
          </div>
        </div>
      </AnimRl>
    </div>
  );
}
