// import { GoogleGeminiEffect } from "../../../ui/Aceternity/Gemini.jsx";
import { motion } from "framer-motion";
import AnimatedButton from "../../../ui/SwipeButton.jsx/Swipe1.jsx";
import ANim from "../../../ui/Anim.jsx";
import Background from "../../../assets/image2/background/banner-bg1.jpg"
import Pattern from "../../../ui/RandomPatterns3.jsx"

function App() {

  const onScroll = () => {
    const scrollAmount = window.innerHeight * 0.60; 
    window.scrollBy({
      top: scrollAmount, 
      behavior: "smooth", 
    });
  };
  const sentence =
    " Our team is a dynamic, collaborative group focused on innovation,excellence, and continuous learning in a supportive and inclusive environment.";

  return (
    <div className="relative pt-20 flex flex-col justify-center items-center gap-10 font-jakarta  overflow-hidden">
       <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Pattern/>
      <div className="flex flex-col items-center justify-center p-10 gap-6 mt-20 text-neutral-900 ">
        <ANim>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold ">
            Our Team
          </h1>
        </ANim>
        <motion.div
          className="text-lg md:text-xl max-w-[590px] text-center text-gray-600 leading-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
                delayChildren: 1,
              },
            },
          }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block font-montserrat"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <ANim delay={5}>
          <div onClick={onScroll}>
          <AnimatedButton>Know More</AnimatedButton>
          </div>
        </ANim>
      </div>
    </div>
  );
}

export default App;
