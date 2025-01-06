import { CardData } from "../../../json/teamcard";
import "../../../css/cardflip.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Anim from "../../../ui/Anim.jsx";
import Underline from "../../../ui/Underline.jsx";

export default function Partners() {
  const [flippedCards, setFlippedCards] = useState(
    Array(CardData.length).fill(false)
  );

  const handleCardHover = (index) => {
    setFlippedCards((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = true;
      return newFlipped;
    });
  };

  const handleCardHoverOut = (index) => {
    setFlippedCards((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = false;
      return newFlipped;
    });
  };

  const [cardHover,setCardHover]=useState(null)

  return (
    <div className="relative w-full h-full overflow-hidden font-jost bg-customWhite py-10 md:py-20">
    <div className="flex flex-col pb-10 items-center justify-center">
      <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
        Our Partners
      </h1>
      <Underline />
  
      <Anim delay={0.4}>
        <p className="text-base text-gray-500 text-center max-w-lg leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Anim>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-center justify-center px-5 md:px-10 mx-5 md:mx-10 ">
      {CardData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardHoverOut(index)}
        >
          <div className="relative w-[250px] h-[360px] perspective ">
            <motion.div
              onMouseEnter={() => setCardHover(index)}
              onMouseLeave={() => setCardHover(null)}
              className="relative w-full h-full transform transition-transform duration-100"
              animate={{ rotateY: flippedCards[index] ? -180 : 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
                duration: 1,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div className="absolute group w-full h-full bg-white border-none border-gray-400 rounded-2xl backface-hidden flex flex-col items-center justify-center shadow-custom overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`object-contain ${
                      index === 3 ? "w-[150px] h-[80px]" : "w-[150px] h-full"
                    }`}
                  />
                  <p className="text-sm font-semibold text-gray-500 text-center px-4 group-hover:translate-x-5 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
  
              {/* Back Side */}
              <div
                className="absolute w-full h-full gap-3 bg-customGreen bg-cover bg-center rounded-2xl border-none border-black backface-hidden flex flex-col items-center justify-center shadow-custom"
                style={{
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`object-contain ${
                      index === 3 ? "w-[150px] h-[80px]" : "w-[150px] h-full"
                    }`}
                  />
                  <motion.p
                    className={`text-sm font-semibold text-white text-center px-4 ${
                      cardHover === index ? "translate-x-0" : "-translate-x-5"
                    } transition-all duration-300`}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}
