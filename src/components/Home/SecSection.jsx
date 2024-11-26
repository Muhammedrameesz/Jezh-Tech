import { useState } from "react";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import HoverButton from "../../ui/HoverButton.jsx";
import Jezh from "../../assets/images/jezhLogo.png";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";

export default function SecSection() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const cardStyles = (index) =>
    `relative flex flex-col items-center space-y-6  bg-white border-[5px] border-black   
     transition-transform transform duration-500 cursor-pointer p-8 
     ${activeCard === index ? "z-10 scale-110 shadow-2xl rotate-0" : "hover:scale-105"} 
     hover:rotate-0`;

  return (
    <div className="w-full min-h-screen font-poppins  flex flex-col items-center pt-24 py-20 overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-center mb-12 space-x-4">
        <div className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></div>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-black">
          Industries We Serve
        </h1>
        <div className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></div>
      </div>

      {/* Card Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl items-center">
        <div className="absolute left-1/2 right-1/2 z-20  -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="animate-bounce-custom z-10 ">
            <img src={Jezh} alt="jezj logo" className="w-20 h-10 " />
            <HomeWorkOutlinedIcon className="text-9xl text-customGreen opacity-0" />
          </div>
        </div>

        <Anim>
          <div className={cardStyles(0)} onClick={() => handleCardClick(0)}>
            <HomeWorkOutlinedIcon
              className="text-customGreen bg-gradient-to-t from-customGreen via-black to-customGreen rounded-lg"
              sx={{ fontSize: "40px" }}
            />
            <h1 className="text-2xl font-semibold text-gray-800 text-center">
              Home & Industrial Automation
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Need a smarter space? We’ve got the tech! JEZH Technologies
              specializes in IoT automation that makes homes smarter and
              industries more efficient. From boosting security to automating
              daily tasks, we create solutions that simplify life and streamline
              operations.
            </p>
            <button>
              <HoverButton>Know More</HoverButton>
            </button>
          </div>
        </Anim>

        <AnimRL>
          <div className={cardStyles(1)} onClick={() => handleCardClick(1)}>
            <LanguageRoundedIcon
              className="text-customGreen bg-gradient-to-t from-customGreen via-black to-customGreen rounded-lg"
              sx={{ fontSize: "40px" }}
            />
            <h1 className="text-2xl font-semibold text-gray-800 text-center">
              Website Development & Digital Presence
            </h1>
            <p className="text-base text-gray-600 leading-relaxed ">
              Need a powerful online presence? JEZH Technologies specializes in
              designing and developing custom websites that are not only
              visually engaging but also optimized for user experience and
              functionality. We make sure your site is ready to engage and
              convert visitors seamlessly.
            </p>
            <button>
              <HoverButton>Know More</HoverButton>
            </button>
          </div>
        </AnimRL>
      </section>
    </div>
  );
}
