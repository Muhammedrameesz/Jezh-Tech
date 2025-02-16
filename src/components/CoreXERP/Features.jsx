import { useState } from "react";
import feature1 from "../../assets/CoreXImages/feature1.png";
import feature2 from "../../assets/CoreXImages/feature2.png";
import feature3 from "../../assets/CoreXImages/feature3.png";
import feature4 from "../../assets/CoreXImages/feature4.png";
import { motion } from "framer-motion";
import Underline from "../../ui/Underline";

export default function Features() {
  const contents = [
    {
      title: "Integration",
      description:
        "ERP systems unify business processes, enabling seamless data flow across departments for improved collaboration and decision-making.",
      image: feature1,
    },
    {
      title: "Automation",
      description:
        "Automates repetitive tasks like invoicing and inventory updates, reducing errors and enhancing efficiency.",
      image: feature2,
    },
    {
      title: "Real-Time Reporting",
      description:
        "Provides real-time insights into business performance through dashboards, improving strategic planning.",
      image: feature3,
    },
    {
      title: "Scalability",
      description:
        "Easily adapts to growing business needs, supporting additional users, modules, or processes.",
      image: feature4,
    },
  ];

  const [hover, setHover] = useState(null);

  return (
    <div className="min-h-screen bg-white py-16 font-jakarta">
      <div className="flex flex-col items-center justify-center  mb-5 md:mb-10 lg:mb-20">
      <span className="text-3xl  md:text-4xl font-bold text-customBlue">
         Advanced Features 
        </span>
        <h1 className="text-3xl  md:text-4xl text-customBlue mb-2 font-medium">
        For Your Growth 
        </h1>
        <Underline/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center px-6 md:px-14">
        {contents.map((content, index) => (
          <motion.div
            onMouseEnter={() => setHover(content.title)}
            onMouseLeave={() => setHover(null)}
            key={index}
            className={`relative z-50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center md:h-[380px] lg:h-[420px] group transform hover:-translate-y-2 transition-all duration-500
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
