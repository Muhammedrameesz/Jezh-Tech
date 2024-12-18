import AnimBT from "../../ui/AnimBT.jsx";
import Anim from "../../ui/Anim.jsx";
import { ServiceContent } from "./ServiceContent";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Service() {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-col  items-center font-poppins px-6 py-16 bg-gray-100  ">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-10 md:mb-20">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <Anim>
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
              Why Choose Us?
            </h1>
          </Anim>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-xl leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            nesciunt corporis illo totam eos quis saepe odit autem laborum nobis
            fugiat, quos voluptate maiores quidem repellat assumenda rem
            mollitia iusto.
          </p>
        </Anim>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl ">
        {ServiceContent.map((feature, index) => (
          <AnimBT key={index} delay={index * 0.3}>
            <div
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className="relative flex flex-col  p-8 
               rounded-lg bg-white/80 
                transition-all duration-500 transform group
                hover:-translate-y-3 hover:bg-white hover:shadow-2xl"
            >
              <feature.icon
                style={{ fontSize: 50, transition: "all 0.3s linear" }}
                className={`rounded-full p-3
                    ${
                      (index === 0 || index === 1 || index === 2) &&
                      "bg-green-200 text-green-500 group-hover:bg-green-500 group-hover:text-white"
                    }
                    ${
                      (index === 3 || index === 4 || index === 5) &&
                      "bg-red-200 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                    }
                    ${
                      (index === 6 || index === 7 || index === 8) &&
                      "bg-purple-200 text-purple-500 group-hover:bg-purple-500 group-hover:text-white"
                    }
                  `}
                  
              />

              <h2 className="text-lg font-semibold text-gray-700 mb-3   mt-7 hover:text-customGreen cursor-pointer w-fit transition-colors duration-300">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500  text-sm leading-relaxed">
                {feature.text}
              </p>

              {/* Animated Underline on Hover */}
              {hover === index && (
                <>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 h-1 bg-customGreen"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 right-0 h-1 bg-customGreen"
                  />
                </>
              )}
            </div>
          </AnimBT>
        ))}
      </section>
    </div>
  );
}
