
import { motion } from "framer-motion";
import AnimatedButton from "../../../ui/HoverButton.jsx";
import ANim from "../../../ui/Anim.jsx";
import Pattern from "../../../ui/RandomPatterns3.jsx"
import Background from "../../../assets/image2/background/banner-bg1.jpg"

function Header() {
  const sentence =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis iusto hic quam eveniet culpa nam harum nihil iste magnam adipisci .";

  return (
    <div 
    className="relative min-h-screen flex flex-col justify-center items-center gap-10 font-poppins  overflow-hidden">
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Pattern/>
      <div className="flex flex-col items-center justify-center p-6 gap-6 mt-20 text-neutral-900  bg-[rgba(250,250,250,0.5)]">
        <ANim>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold ">
            Our Partners
          </h1>
        </ANim>
        <motion.div
          className="text-lg md:text-xl max-w-2xl text-center text-gray-600 leading-relaxed"
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
          <AnimatedButton>Know More</AnimatedButton>
        </ANim>
      </div>
    </div>
  );
}

export default Header;

