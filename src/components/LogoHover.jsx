import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import partner1 from "../assets/image2/HoverLogo/partner-1.png";
import partner2 from "../assets/image2/HoverLogo/partner-2.png";
import partner3 from "../assets/image2/HoverLogo/partner-3.png";
import partner4 from "../assets/image2/HoverLogo/partner-4.png";
import partner5 from "../assets/image2/HoverLogo/partner-5.png";
import partner6 from "../assets/image2/HoverLogo/partner-6.png";
import partner7 from "../assets/image2/HoverLogo/partner-7.png";
import partner10 from "../assets/image2/HoverLogo/partner-10.png";
import partnerHover1 from "../assets/image2/HoverLogo/partner-hover1.png";
import partnerHover2 from "../assets/image2/HoverLogo/partner-hover2.png";
import partnerHover3 from "../assets/image2/HoverLogo/partner-hover3.png";
import partnerHover4 from "../assets/image2/HoverLogo/partner-hover4.png";
import partnerHover5 from "../assets/image2/HoverLogo/partner-hover5.png";
import partnerHover6 from "../assets/image2/HoverLogo/partner-hover6.png";
import partnerHover7 from "../assets/image2/HoverLogo/partner-hover7.png";
import partnerHover10 from "../assets/image2/HoverLogo/partner-hover10.png";

// Combine normal images and hover images in pairs
const partners = [
  { normal: partner1, hover: partnerHover1 },
  { normal: partner2, hover: partnerHover2 },
  { normal: partner3, hover: partnerHover3 },
  { normal: partner4, hover: partnerHover4 },
  { normal: partner5, hover: partnerHover5 },
  { normal: partner6, hover: partnerHover6 },
  { normal: partner7, hover: partnerHover7 },
  { normal: partner10, hover: partnerHover10 },
  { normal: partner1, hover: partnerHover1 },
  { normal: partner2, hover: partnerHover2 },
  { normal: partner3, hover: partnerHover3 },
  { normal: partner4, hover: partnerHover4 },
  { normal: partner5, hover: partnerHover5 },
  { normal: partner6, hover: partnerHover6 },
  { normal: partner7, hover: partnerHover7 },
  { normal: partner10, hover: partnerHover10 },
  { normal: partner1, hover: partnerHover1 },
  { normal: partner2, hover: partnerHover2 },
];

export default function LogoHover() {
  const imgStyle = "w-24 h-8 cursor-pointer";
  const FlexStyle = "flex flex-col gap-8";

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
      <section className="grid grid-cols-3 md:grid-cols-6 bg-white p-10 gap-10 rounded-lg mx-16 shadow-lg">
        <div className={`${FlexStyle}`}>
          {partners.slice(0, 3).map((partner, index) => (
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
                    className="absolute top-0 left-0 w-24 h-8 cursor-pointer"
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
        </div>

        <div className={`${FlexStyle}`}>
          {partners.slice(3, 6).map((partner, index) => (
            <div key={index + 3} className="relative">
              <img
                src={partner.normal}
                alt={`logo-${index + 3}`}
                className={`${imgStyle}`}
                onMouseEnter={() => handleMouseEnter(index + 3)}
                onMouseLeave={handleMouseLeave}
              />
              <AnimatePresence>
              {hoveredImage === index + 3 && (
                <motion.img
                  src={partner.hover}
                  alt={`hover-logo-${index + 3}`}
                  className="absolute top-0 left-0 w-24 h-8 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => handleMouseEnter(index + 3)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className={`${FlexStyle}`}>
          {partners.slice(6, 9).map((partner, index) => (
            <div key={index + 6} className="relative">
              <img
                src={partner.normal}
                alt={`logo-${index + 6}`}
                className={`${imgStyle}`}
                onMouseEnter={() => handleMouseEnter(index + 6)}
                onMouseLeave={handleMouseLeave}
              />
              <AnimatePresence>
              {hoveredImage === index + 6 && (
                <motion.img
                  src={partner.hover}
                  alt={`hover-logo-${index + 6}`}
                  className="absolute top-0 left-0 w-24 h-8 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => handleMouseEnter(index + 6)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className={`${FlexStyle}`}>
          {partners.slice(9, 12).map((partner, index) => (
            <div key={index + 9} className="relative">
              <img
                src={partner.normal}
                alt={`logo-${index + 9}`}
                className={`${imgStyle}`}
                onMouseEnter={() => handleMouseEnter(index + 9)}
                onMouseLeave={handleMouseLeave}
              />
              <AnimatePresence>
              {hoveredImage === index + 9 && (
                <motion.img
                  src={partner.hover}
                  alt={`hover-logo-${index}`}
                  className="absolute top-0 left-0 w-24 h-8 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => handleMouseEnter(index + 9)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className={`${FlexStyle}`}>
          {partners.slice(12, 15).map((partner, index) => (
            <div key={index + 12} className="relative">
              <img
                src={partner.normal}
                alt={`logo-${index + 12}`}
                className={`${imgStyle}`}
                onMouseEnter={() => handleMouseEnter(index + 12)}
                onMouseLeave={handleMouseLeave}
              />
              <AnimatePresence>
              {hoveredImage === index + 12 && (
                <motion.img
                  src={partner.hover}
                  alt={`hover-logo-${index + 12}`}
                  className="absolute top-0 left-0 w-24 h-8 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => handleMouseEnter(index + 12)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className={`${FlexStyle}`}>
          {partners.slice(15, 18).map((partner, index) => (
            <div key={index + 15} className="relative">
              <img
                src={partner.normal}
                alt={`logo-${index + 15}`}
                className={`${imgStyle}`}
                onMouseEnter={() => handleMouseEnter(index + 15)}
                onMouseLeave={handleMouseLeave}
              />
              <AnimatePresence>
              {hoveredImage === index + 15 && (
                <motion.img
                  src={partner.hover}
                  alt={`hover-logo-${index + 15}`}
                  className="absolute top-0 left-0 w-24 h-8 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={() => handleMouseEnter(index + 15)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
