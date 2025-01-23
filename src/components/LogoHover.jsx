import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import partner1 from "../assets/images/Clients/Adarsh B&W.png";
import partner2 from "../assets/images/Clients/DSSC B&W.png";
import partner3 from "../assets/images/Clients/lg construction  B&W.png";
import partner4 from "../assets/images/Clients/Ramakrishna college B&W.png";
import partner5 from "../assets/images/Clients/ricspace B&W.png";
import partner6 from "../assets/images/Clients/Rojavanam B&W.png";
import partner7 from "../assets/images/Clients/Sidone B&W.png";
import partner8 from "../assets/images/Clients/ENYARD.jpeg";
import partner9 from "../assets/images/Clients/robofun_logo-removebg-preview-modified.png";
import partner10 from "../assets/partners/booba logo-modified (1).jpg";

import partnerHover1 from "../assets/images/Clients/Adarsh Logo.png";
import partnerHover2 from "../assets/images/Clients/DSSC logo.png";
import partnerHover3 from "../assets/images/Clients/lg construction logo.png";
import partnerHover4 from "../assets/images/Clients/Ramakrishna college logo.png";
import partnerHover5 from "../assets/images/Clients/ricspace logo.png";
import partnerHover6 from "../assets/images/Clients/Rojavanam internation school logo.png";
import partnerHover7 from "../assets/images/Clients/Sidone logo.jpg";
import partnerHover8 from "../assets/images/Clients/ENYARD.jpeg";
import partnerHover9 from "../assets/images/Clients/RoboFun.jpeg";
import partnerHover10 from "../assets/partners/BoobaTaxiSecond.png";

// Combine normal images and hover images in pairs
const partners = [
  { normal: partner1, hover: partnerHover1 },
  { normal: partner2, hover: partnerHover2 },
  { normal: partner3, hover: partnerHover3 },
  { normal: partner4, hover: partnerHover4,className: "w-40 h-20 cursor-pointer" },
  { normal: partner5, hover: partnerHover5,className: "w-40 h-20 cursor-pointer" },
  { normal: partner6, hover: partnerHover6 },
  { normal: partner7, hover: partnerHover7 },
  {
    normal: partner8,
    hover: partnerHover8,
    className: "w-40 h-16 cursor-pointer",
  },
  { normal: partner9, hover: partnerHover9 ,className: "w-40 h-20 cursor-pointer"},
  { normal: partner10, hover: partnerHover10,className: "w-40 h-24 cursor-pointer" },

 
];

export default function LogoHover() {
  const imgStyle = "w-28 h-24 cursor-pointer ";

  // State to keep track of the currently hovered image
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (imageName) => {
    setHoveredImage(imageName);
    console.log("imageIndex", imageName);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="w-full absolute -bottom-10 translate-y-1/2 overflow-hidden ">
      <section className="grid grid-cols-2 justify-center items-center  md:grid-cols-3 lg:grid-cols-5 bg-white p-10 gap-5 rounded-lg mx-5 md:mx-16 lg:mx-20 shadow-xl overflow-hidden">
        {partners.map((partner, index) => (
          <div key={index} className="relative">
            <img
              src={partner.normal}
              alt={`logo-${index}`}
              className={`${partner.className ? partner.className : imgStyle}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />

            <AnimatePresence>
              {hoveredImage === index && (
                <motion.img
                  src={partner.hover}
                  alt={`hover-logo-${index}`}
                  className={`absolute top-0 left-0 ${partner.className ? partner.className : "w-28 h-24 cursor-pointer"} `}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </div>
  );
}
