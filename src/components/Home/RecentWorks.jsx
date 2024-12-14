import { useEffect, useRef } from "react";
import Anim from "../../ui/Anim.jsx"
import { motion } from "framer-motion";



const ScrollingCards = () => {
  const scrollContainerRef = useRef(null);

  // Scroll handler for buttons
  const handleScroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Sample images for cards
  const images = [
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  ];

  return (
    <div className="py-20">
    <div className="flex flex-col justify-center items-center  mb-14">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <Anim>
          <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight  mb-4">
          Our Recent Works
          </h1>
          </Anim>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
        <Anim delay={0.4}>
        <p className="text-sm text-gray-500 text-center max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </Anim>
      </div>
    
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Scroll buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-600"
      >
        ←
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-600"
      >
        →
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 p-4 scrollbar-hide"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative min-w-[250px] lg:min-w-[300px] h-72 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Hover Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.p 
              initial={{opacity:0,y:-50}}
              animate={{opacity:1,y:0}}
              transition={{ duration: 0.5, ease: "easeOut"}}
              className="text-white font-semibold text-lg">
                Card {index + 1} Text
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ScrollingCards;
