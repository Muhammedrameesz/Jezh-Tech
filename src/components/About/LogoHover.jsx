import { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import partner1 from "../../assets/image2/HoverLogo/partner-1.png";
import partner2 from "../../assets/image2/HoverLogo/partner-2.png";
import partner3 from "../../assets/image2/HoverLogo/partner-3.png";
import partner4 from "../../assets/image2/HoverLogo/partner-4.png";
import partner5 from "../../assets/image2/HoverLogo/partner-5.png";
import partner6 from "../../assets/image2/HoverLogo/partner-6.png";
import partner7 from "../../assets/image2/HoverLogo/partner-7.png";
import partner10 from "../../assets/image2/HoverLogo/partner-10.png";
import partnerHover1 from "../../assets/image2/HoverLogo/partner-hover1.png";
import partnerHover2 from "../../assets/image2/HoverLogo/partner-hover2.png";
import partnerHover3 from "../../assets/image2/HoverLogo/partner-hover3.png";
import partnerHover4 from "../../assets/image2/HoverLogo/partner-hover4.png";
import partnerHover5 from "../../assets/image2/HoverLogo/partner-hover5.png";
import partnerHover6 from "../../assets/image2/HoverLogo/partner-hover6.png";
import partnerHover7 from "../../assets/image2/HoverLogo/partner-hover7.png";
import partnerHover10 from "../../assets/image2/HoverLogo/partner-hover10.png";


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
  
    // State to keep track of the currently hovered image
    const [hoveredImage, setHoveredImage] = useState(null);
  
    const handleMouseEnter = (imageName) => {
      setHoveredImage(imageName);
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null);
    };
  
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 2000, 
      pauseOnHover: true, 
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="w-full">
        <section className="bg-white p-10 rounded-lg mx-16 ">
          <Slider {...settings}>
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
          </Slider>
        </section>
      </div>
    );
  }
