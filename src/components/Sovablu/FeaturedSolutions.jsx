import { motion } from "framer-motion";
import Underline from "../../ui/Underline.jsx";
import {
  MdOutlineHome,
  MdOutlineInfo,
  MdOutlineBarChart,
  MdOutlineEmail,
} from "react-icons/md";
import { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Pattern from "../../ui/RandomPatterns3.jsx"

export default function FeaturedSolutions() {
  const contents = [
    {
      icon: <MdOutlineHome />,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      icon: <MdOutlineInfo />,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      icon: <MdOutlineBarChart />,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      icon: <MdOutlineEmail />,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
  ];

  const [hover, setHover] = useState(null);

  return (
    <div className="py-20 font-poppins relative">
      <Pattern/>
      <div className="flex flex-col justify-center items-center mx-10">
        <h1 className="text-xl md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
          Our Features
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
            className="flex bg-gradient-to-tr from-green-100 via-green-100 to-gray-50  flex-col items-center text-center p-5 border border-green-200 gap-3 rounded-lg  hover:shadow-custom group transform hover:-translate-y-3  transition-all duration-500"
          >
            
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{
                rotateY: hover === i ? [0, 180, 0] : 0,
              }}
              transition={{
                duration: 0.3,
                repeat: 0,
              }}
              className=" text-5xl text-green-500 mb-2"
            >
              {item.icon}
            </motion.div>
      
            <h1 className="text-lg font-semibold text-[#0E314C] ">
              {item.title}
            </h1>
            <p className="text-sm text-gray-500 leading-6">{item.description}</p>
            <button className="text-[#0E314C] text-sm font-semibold hover:text-green-500 transition-colors duration-300">
              <AddCircleOutlineOutlinedIcon
                sx={{ fontSize: "20px", mr: "5px" }}
              />{" "}
              Learn More
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
