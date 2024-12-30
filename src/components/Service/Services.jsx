import AnimBT from "../../ui/AnimBT.jsx";
import Anim from "../../ui/Anim.jsx";
import { ServiceContent } from "./ServiceContent";
import { motion } from "framer-motion";
import { useState } from "react";
import Underline from "../../ui/Underline.jsx";
import { useNavigate } from "react-router-dom";
import useServiceStore from "../../store/ServiceDetails";
import AddIcon from "@mui/icons-material/Add";

export default function Service() {
  const [hover, setHover] = useState(null);
  const setServiceDetails = useServiceStore((state) => state.setServiceDetails);

  const navigate = useNavigate();
  const handleDetails = async (image, title, index) => {
    try {
      if (!image || !title) {
        console.error("Invalid image or title");
        return;
      }
      await setServiceDetails({ image, title, index });
      navigate("/services/details");
    } catch (error) {
      console.error("Error setting service details:", error);
    }
  };

  return (
    <div className="flex flex-col  items-center font-poppins px-6 py-16 bg-green-50  ">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-10 md:mb-20">
        <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
          Services
        </h1>
        <Underline />

        <Anim>
          <p className="text-sm text-gray-500 text-center max-w-xl leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            nesciunt corporis illo totam eos quis saepe odit autem laborum nobis
            fugiat, quos voluptate maiores quidem repellat assumenda rem
            mollitia iusto.
          </p>
        </Anim>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-6xl">
        {ServiceContent.map((feature, index) => (
          <AnimBT key={index}>
            <div
              
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className="relative flex flex-col p-8 rounded-lg bg-white/80 justify-center items-center transition-all duration-500 transform group  h-full"
            >
              <div>
                <img src={feature.image} alt={feature.title} />
              </div>

              <h2 className="text-lg font-semibold text-gray-700 mb-3 mt-7  w-fit transition-colors duration-300">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-center text-sm leading-relaxed">
                {feature.text}
              </p>

              {/* Align Button to the Right */}
              <div className="flex w-full mt-5">
                <button 
                onClick={() => handleDetails(feature.image, feature.title, index)}
                 className="text-sm ml-auto  text-gray-700 font-semibold hover:text-customGreen transition-colors duration-300 ">
                  Learn More <AddIcon />
                </button>
              </div>

              {/* Animated Underline on Hover */}
              {hover === index && (
                <>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 h-1 bg-customGreen"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 0.5 }}
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
