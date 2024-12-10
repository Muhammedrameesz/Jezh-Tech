import { useNavigate } from "react-router-dom";
import Anim from "../../ui/Anim.jsx";
import BackgroundBeamsWithCollision from "../../ui/Aceternity/Background1.jsx";
import HoverButton from "../../ui/HoverButton.jsx";
import { motion } from "framer-motion";
import AnimatedImage from "./Animated-Images/Animation2.jsx";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  const url =
    "https://img.freepik.com/free-vector/white-background-with-hexagonal-line-pattern-design_1017-28442.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid";
  const sentence = "Your Trusted Partner for Innovative Technology Solutions";

  return (
    <BackgroundBeamsWithCollision url={url} className="relative custom-class">
      <div className="font-poppins  bg-white text-black min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-12">
        {/* Wave Decoration */}
        <div className="absolute -left-14 top-6 w-[25%] md:w-[20%] h-[20%] md:h-[30%] rounded-full rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            <path
              d="M0,70 Q25,85 50,70 T100,70 V100 H0 Z"
              fill="#8fd14f"
              className="animate-wave"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative  grid grid-cols-1 md:grid-cols-2  md:text-left max-w-screen-lg h-auto  px-4 md:px-5 rounded-lg mt-20 md:mt-20">
          {/* Left: Animated Text */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div
              className="text-2xl sm:text-4xl max-w-full md:max-w-2xl tracking-tight md:text-5xl text-start font-extrabold text-neutral-800 leading-snug mb-2 mt-10 md:mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {sentence.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block "
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            {/* <AnimRl>
              <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed mb-6 md:mb-6">
                Discover reliable solutions that simplify technology and
                accelerate your growth.
              </p>
            </AnimRl> */}
            <Anim delay={3}>
              <div onClick={handleClick} className=" mt-0 md:mt-10">
                <HoverButton>Get Started</HoverButton>
              </div>
            </Anim>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center items-center mt-5 md:mt-24 ">
            <AnimatedImage />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
