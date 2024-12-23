import { useNavigate } from "react-router-dom";
import Anim from "../../ui/Anim.jsx";
// import BackgroundBeamsWithCollision from "../../ui/Aceternity/Background1.jsx";
import HoverButton from "../../ui/HoverButton.jsx";
import { motion } from "framer-motion";
import AnimatedImage from "../Home/Animated-Images/Animation2.jsx";
import ServiceMainImage from "../../assets/images/imageset2/service-right-main-pic.30fff806.png";
import AnimRl from "../../ui/AnimRL.jsx";
import RandomP2 from "../../ui/RandomPatterns4.jsx";
import Background from "../../assets/image2/background/banner-bg.jpg"

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  const sentence = "Sovablu";
  const pargraph =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aliquam maiores ducimus quibusdam minima animi asperiores ab ipsa, ipsum!."

  return (
    <div className="font-poppins min-h-screen bg-white text-black  flex items-center justify-center overflow-hidden relative ">
       <RandomP2/>
      <div className="absolute w-full h-full object-cover  ">
        <img src={Background} alt="img" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 max-w-screen-lg  px-4 md:px-5 rounded-lg mt-20 md:mt-20">
     
        <div className="flex flex-col justify-center space-y-6">
          <Anim>
            <h1 className="text-2xl sm:text-4xl max-w-full md:max-w-2xl tracking-tight md:text-5xl text-start font-extrabold text-[#0E314C] leading-snug mb-2 mt-10 md:mb-4">
              {sentence}
            </h1>
          </Anim>

          <motion.div
            className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-6 md:mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 1.5,
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {pargraph.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <Anim delay={5.5}>
            <button onClick={handleClick} className="mt-0 md:mt-5 ">
              <HoverButton>Learn More </HoverButton>
            </button>
          </Anim>
        </div>

        {/* Right: Conditional Image Rendering */}
        <div className="flex justify-center items-center mt-5 md:mt-32">
          <AnimRl>
            <div className="block md:hidden">
              <img
                src={ServiceMainImage}
                alt="Service Main"
                className=" max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
          </AnimRl>
          <div className="hidden md:block">
            <AnimatedImage />
          </div>
        </div>


      </div>
    </div>
  );
}
