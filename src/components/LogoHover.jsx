import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import partner1 from "../assets/images/Clients/Adarsh B&W.png";
import partner2 from "../assets/images/Clients/DSSC B&W.png";
import partner3 from "../assets/images/Clients/lg construction  B&W.png";
import partner4 from "../assets/images/Clients/Ramakrishna college B&W.png";
import partner5 from "../assets/images/Clients/ricspace B&W.png";
import partner6 from "../assets/images/Clients/Rojavanam B&W.png";
import partner7 from "../assets/images/Clients/Sidone B&W.png";

import partnerHover1 from "../assets/images/Clients/Adarsh Logo.png";
import partnerHover2 from "../assets/images/Clients/DSSC logo.png";
import partnerHover3 from "../assets/images/Clients/lg construction logo.png";
import partnerHover4 from "../assets/images/Clients/Ramakrishna college logo.png";
import partnerHover5 from "../assets/images/Clients/ricspace logo.png";
import partnerHover6 from "../assets/images/Clients/Rojavanam internation school logo.png";
import partnerHover7 from "../assets/images/Clients/Sidone logo.jpg";


// Combine normal images and hover images in pairs
const partners = [
  { normal: partner1, hover: partnerHover1 },
  { normal: partner2, hover: partnerHover2 },
  { normal: partner3, hover: partnerHover3 },
  { normal: partner4, hover: partnerHover4 },
  { normal: partner5, hover: partnerHover5 },
  { normal: partner6, hover: partnerHover6 },
  { normal: partner7, hover: partnerHover7 },
  { normal: partner1, hover: partnerHover1 },
  
  { normal: partner2, hover: partnerHover2 },
  { normal: partner3, hover: partnerHover3 },
  { normal: partner4, hover: partnerHover4 },
  { normal: partner5, hover: partnerHover5 },
  { normal: partner6, hover: partnerHover6 },
  { normal: partner7, hover: partnerHover7 },
  { normal: partner6, hover: partnerHover6 },

  { normal: partner5, hover: partnerHover5 },
  { normal: partner1, hover: partnerHover1 },
  { normal: partner2, hover: partnerHover2 },
];

export default function LogoHover() {
  const imgStyle = "w-24 h-16 cursor-pointer ml-0 md:ml-5";

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
    <div className="w-full absolute bottom-0 translate-y-1/2 ">
      <section className="grid grid-cols-2 justify-center  md:grid-cols-3 lg:grid-cols-6 bg-white p-10 gap-5 rounded-lg mx-16 md:mx-20 shadow-lg">
      
          {partners.map((partner, index) => (
            <div key={index} className="relative">
              <img
                src={partner.normal}
                alt={`logo-${index}`}
                className={`${imgStyle}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />

              <AnimatePresence>
                {hoveredImage === index && (
                  <motion.img
                    src={partner.hover}
                    alt={`hover-logo-${index}`}
                    className="absolute top-0 left-0 w-24 h-16 cursor-pointer ml-0 md:ml-5"
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
