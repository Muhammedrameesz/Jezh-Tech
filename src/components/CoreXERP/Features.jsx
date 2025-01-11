import { useState } from "react";
import feature1 from "../../assets/CoreXImages/feature1.png";
import feature2 from "../../assets/CoreXImages/feature2.png";
import feature3 from "../../assets/CoreXImages/feature3.png";
import feature4 from "../../assets/CoreXImages/feature4.png";
import { motion } from "framer-motion";

export default function Features() {
  const contents = [
    {
      title: "Content One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula nunc eu diam facilisis, non facilisis.",
      image: feature1,
    },
    {
      title: "Content Two",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: feature2,
    },
    {
      title: "Content Three",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
      image: feature3,
    },
    {
      title: "Content Four",
      description:
        "Fusce faucibus metus at magna sollicitudin, vel consectetur sapien viverra. Integer nec magna id lacus malesuada fringilla.",
      image: feature4,
    },
  ];

  const [hover, setHover] = useState(null);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="flex flex-col items-center justify-center  mb-5 md:mb-10 lg:mb-20">
        <h1 className="text-3xl  md:text-4xl text-gray-800 mb-2">
          Empowering You with Cutting
        </h1>
        <span className="text-3xl  md:text-4xl font-semibold text-gray-900">
          Edge Features
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl items-center justify-center px-6 md:px-14">
        {contents.map((content, index) => (
          <motion.div
            onMouseEnter={() => setHover(content.title)}
            onMouseLeave={() => setHover(null)}
            key={index}
            className={`relative z-50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center h-[400px] group transform hover:-translate-y-2 transition-all duration-500
                ${index === 0 && "bg-gray-100"}  ${index === 1 && "bg-red-50"}  ${index === 2 && "bg-pink-100"}  ${index === 3 && "bg-green-50"}
                `}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={
                hover === content.title
                  ? { width: "100%", backgroundColor: "#a0d201" } 
                  : { width: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute -z-10 top-0 left-0 h-full rounded-xl"
            />

            <img
              src={content.image}
              alt={content.title}
              className="w-full h-48 mb-6"
            />
            <h2 className="text-xl md:text-2xl text-customBlue font-semibold mb-4 group-hover:text-white transition-all duration-500">
              {content.title}
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-500">
              {content.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
