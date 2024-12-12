import { CardData } from "../../../json/teamcard";
import "../../../css/cardflip.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CardsComponent() {
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
    <div className="relative w-full h-full overflow-hidden mb-8 bg-gray-200">
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
                <div className="absolute w-full h-full bg-white  border-none border-gray-400 rounded-full backface-hidden flex flex-col items-center justify-center shadow-xl">
                  <h3 className="text-xl font-bold text-center">Hover Me</h3>
                  {/* <p className="text-sm text-gray-700 text-center px-4">
                    {item.description}
                  </p> */}
                  {/* <img src={item.image} alt={item.name} className="w-[200px] h-[150px]  "/> */}
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-black bg-cover bg-center rounded-full border-none border-black backface-hidden flex flex-col items-center justify-center shadow-xl"
                  style={{
                    transform: "rotateY(180deg)",
                    // backgroundImage: `url(${item.image})`,
                  }}
                >
                  <h3 className="text-xl font-bold text-center text-customGreen">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 text-center px-4">
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
