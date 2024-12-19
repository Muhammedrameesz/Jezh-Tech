
import { CardData } from "../../../json/teamcard";
import "../../../css/cardflip.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Anim from "../../../ui/Anim.jsx"
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

  return (
    <div className="relative w-full h-full overflow-hidden font-poppins bg-gray-100 py-10 md:py-20">
       <div className="flex flex-col pb-10  items-center justify-center space-x-4">
        
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
              Our Partners
            </h1>
            <Underline/>
        
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-6">
        {CardData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHoverOut(index)}
          >
            <div className="relative w-72 h-72 perspective">
              <motion.div
                className="relative w-full h-full transform transition-transform duration-100"
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white  border-none border-gray-400 rounded-xl backface-hidden flex flex-col items-center justify-center shadow-xl">
                  {/* <h3 className="text-xl font-bold text-center">Hover Me</h3> */}
                  {/* <p className="text-sm text-gray-700 text-center px-4">
                    {item.description}
                  </p> */}
                  <img src={item.image} alt={item.name} className="w-full h-[300px] object-cover "/>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full gap-3 bg-neutral-950 bg-cover bg-center rounded-xl border-none border-black backface-hidden flex flex-col items-start justify-center shadow-xl"
                  style={{
                    transform: "rotateY(180deg)",
                    // backgroundImage: `url(${item.image})`,
                  }}
                >
                  <h3 className="text-xl font-bold  text-customGreen px-4">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 px-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
