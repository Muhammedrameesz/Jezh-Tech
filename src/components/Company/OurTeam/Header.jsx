// import { GoogleGeminiEffect } from "../../../ui/Aceternity/Gemini.jsx";
import { motion } from "framer-motion";
import AnimatedButton from "../../../ui/HoverButton.jsx";
import ANim from "../../../ui/Anim.jsx";

function App() {
  const Video =
    "https://media.istockphoto.com/id/1550667530/video/business-people-morning-and-handshake-for-meeting-partnership-or-b2b-deal-in-agreement-at-the.mp4?s=mp4-640x640-is&k=20&c=42juSm4BpfrJQMRMRPYSIoh0j0NTGJSJNozpXhkTpRo=";
  const sentence =
    " Our team is a dynamic, collaborative group focused on innovation,excellence, and continuous learning in a supportive and inclusive environment.";

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center gap-10 font-poppins  overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-50 z-[-1]"
        poster="fallback-image.jpg"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center justify-center p-6 gap-6 mt-20 text-neutral-950  bg-[rgba(80,79,79,0.5)]">
        <ANim>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold ">
            Our Team
          </h1>
        </ANim>
        <motion.div
          className="text-lg md:text-xl max-w-3xl text-center text-gray-800 leading-relaxed"
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

export default App;
