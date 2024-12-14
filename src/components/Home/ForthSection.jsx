// import Built from "../../assets/icons/sustainable-energy_10633778.png";
// import Adaptable from "../../assets/icons/cpu_1104950.png";
// import Digital from "../../assets/icons/intelligence_11764993.png";
import Anim from "../../ui/Anim.jsx";
import AnimatedImage from "./Animated-Images/AnimatedImages3.jsx";
import MainPic from "../../assets/images/imageset3/main-pic.52b102d9.png";
import AnimRL from "../../ui/AnimRL.jsx";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AndroidIcon from "@mui/icons-material/Android";
import { useState } from "react";
import TonalityOutlinedIcon from '@mui/icons-material/TonalityOutlined';

export default function ForthSection() {
  const [hover, setHover] = useState("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-20 items-center pb-16 pt-20 px-6 pd:px-20 lg:px-24  font-poppins">
      <Anim>
        <div className="relative flex flex-col items-start space-y-8 p-4  lg:p-6 rounded-md  ">
        <div
            className="absolute  inset-0 bg-no-repeat bg-cover rotate-180 top-10  opacity-10"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/coloured-background-design_1164-257.jpg?t=st=1734158786~exp=1734162386~hmac=81d7c5903a0022540b6ecc7bdbc30fc04f7ecc3accd3c2e7dd7716c9ca84fb44&w=740)",
            }}
          ></div>
          
          <div className="flex flex-row items-center justify-center space-x-4">
            <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
            <h1 className="text-[#0E314C] text-center text-xl md:text-xl lg:text-2xl font-extrabold leading-tight  mb-4 ">
              Customized Solutions for Every Business
            </h1>
            <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
          </div>

          <div
            onMouseEnter={() => setHover("Industry")}
            onMouseLeave={() => setHover("")}
            className="flex flex-col md:flex-row gap-5 bg-white p-2 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
          >
            <SyncAltIcon className="mt-[0px] text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out" />

            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg  font-normal text-gray-800 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                Built for Your Industry
              </h2>
              <p
                className={`text-xs md:text-sm text-gray-500 tracking-normal group-hover:text-gray-100 transition-all duration-700 ease-in-out ${
                  hover === "Industry"
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-3"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                Whether it&apos;s smart homes, e-commerce, healthcare, or
                manufacturing, we align our services to meet the specific needs
                of each industry
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setHover(" Adaptable")}
            onMouseLeave={() => setHover("")}
            className="flex flex-col md:flex-row gap-5 bg-white p-2 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
          >
            <TonalityOutlinedIcon className="mt-[2px] text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out" />

            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg font-medium text-gray-800 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out ">
                Adaptable & Scalable
              </h2>
              <p
                className={`text-xs md:text-sm text-gray-500 tracking-normal group-hover:text-gray-100 transition-all duration-700 ease-in-out ${
                  hover === " Adaptable"
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-3"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                Our solutions grow with your business, with easy integration and
                scalability as your company evolves.
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => setHover("Touch")}
            onMouseLeave={() => setHover("")}
            className="flex flex-col md:flex-row gap-5 bg-white p-2 rounded-lg shadow-lg transform hover:-translate-y-3 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group"
          >
            <AndroidIcon className="mt-[2px] text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out" />

            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg font-medium text-gray-800 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out ">
                Technology with a Personal Touch
              </h2>
              <p
                className={`text-xs md:text-sm text-gray-500 tracking-normal group-hover:text-gray-100 transition-all duration-700 ease-in-out ${
                  hover === "Touch"
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-3"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                Our team is dedicated to understanding your business’s unique
                requirements and delivering solutions that resonate with your
                goals.
              </p>
            </div>
          </div>
        </div>
      </Anim>

      <div className=" mt-[10%] md:mt-[10%] relative overflow-hidden  ">
        
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
