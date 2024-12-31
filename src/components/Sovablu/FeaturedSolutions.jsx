import { motion } from "framer-motion";
import Underline from "../../ui/Underline.jsx";
import { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Pattern from "../../ui/RandomPatterns3.jsx"
import Anim from "../../ui/Anim.jsx"

import { FaCodepen } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { TbBrandDatabricks } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaOctopusDeploy } from "react-icons/fa";
import { SiBuiltbybit } from "react-icons/si";
import { GiClassicalKnowledge } from "react-icons/gi";
import { FaStaylinked } from "react-icons/fa6";


export default function FeaturedSolutions() {
  const contents = [
    {
      icon: <TbBrandDatabricks />,
      title: "Powerful Data Modelling",
      description:
        "Deploy powerful and versatile tools to achieve the best result in database designing.",
    },
    {
      icon: <FaFileCode />,
      title: "Visual UI Design",
      description:
        "Built for design simplicity with a WYSIWYG drag-and-drop user Interface supported by over 100 intelligent modules.",
    },
    {
      icon: <FaCodepen />,
      title: "Intuitive Logic Definition",
      description:
        "Provide an integration of logic with an instantly understandable designer based on the concept of flow charts.",
    },
    {
      icon: <GrTechnology />,
      title: "Infrastructure Management",
      description:
        "Visualize and manage cloud environments with Sovablu visual tools.",
    },
    {
      icon: <GiArtificialIntelligence />,
      title: "Ai-Accelerated Development",
      description:
        "Sovablu speeds up your development process rapidly with seamless integration of AI technologies.",
    },
    {
      icon: <MdIntegrationInstructions />,
      title: "External Integration",
      description:
        "Safely operate with external systems and bring data from different databases into the system.",
    },
    {
      icon: <FaOctopusDeploy />,
      title: "One-Click Deployment",
      description:
        "Sovablu push applications within a single click and transfers the modifications between environments without an outage.",
    },
    {
      icon: <SiBuiltbybit />,
      title: "Built-In Localization",
      description:
        "Support multiple languages for the apps to be developed and localized with ease.",
    },
    {
      icon: <GiClassicalKnowledge />,
      title: "Cutting-Edge Open Architecture",
      description:
        "Experience virtually unlimited highly efficient and inexpensive serverless cloud solutions based on open-source solutions with no proprietary components.",
    },
    {
      icon: <FaStaylinked />,
      title: "Scalability and Performance",
      description:
        "Distribute architecture definable by high-performance, serverless cloud-native construction processes optimized open source application expansion.",
    },
    
  ];

  const [hover, setHover] = useState(null);

  return (
    <div className="py-20 bg-customWhite font-poppins relative">
      <Pattern/>
      <div className="flex flex-col justify-center items-center mx-10">
        <h1 className="text-xl md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
        Key Features of Sovablu No-Code DX Platform
        </h1>
        <Underline />

        <p className="text-sm text-gray-500 text-center max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

     
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 mt-10">
        {contents.map((item, i) => (
          <div
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            key={i}
            className="flex bg-white  shadow-lg  flex-col items-center text-center p-5  gap-3 rounded-lg  hover:shadow-xl group transform hover:-translate-y-3 group transition-all duration-500"
          >
          <Anim >
             <div className=" shadow-lg group-hover:bg-customGreen transition-colors duration-500  rounded-full  p-2 mb-2 ">
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{
                rotateY: hover === i ? [0, 180, 0] : 0,
              }}
              transition={{
                duration: 0.3,
                repeat: 0,
              }}
              className=" text-4xl text-customGreen group-hover:text-white transition-colors duration-500"
            >
              {item.icon}
            </motion.div>
            </div>
            </Anim>
      
              
            <h1 className="text-lg font-semibold text-[#0E314C] ">
              {item.title}
            </h1>
            <p className="text-sm text-gray-500 leading-6">{item.description}</p>

            <div className="">
            <button className="text-[#0E314C] text-sm font-semibold hover:text-customGreen transition-colors duration-300">
              <AddCircleOutlineOutlinedIcon
                sx={{ fontSize: "20px", ml: "5px" }}
              />{" "}
              Learn More
            </button>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}
