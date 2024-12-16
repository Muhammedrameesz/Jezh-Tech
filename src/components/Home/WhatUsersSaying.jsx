import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Sample client data
const clients = [
  {
    name: "John Smith",
    image:
      "https://img.freepik.com/free-photo/view-3d-male-videographer_23-2151066988.jpg",
    profession: "Software Engineer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consequuntur unde accusamus reprehenderit totam voluptatum, eaque ipsum accusantium? Ducimus, ipsum. Perferendis similique quisquam animi laudantium dolore ipsam dolorem amet quis."
  },
  {
    name: "Emily Johnson",
    image:
      "https://img.freepik.com/premium-photo/3d-cartoon-old-man_919271-49.jpg",
    profession: "Graphic Designer",
    description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consequuntur unde accusamus reprehenderit totam voluptatum, eaque ipsum accusantium? Ducimus, ipsum. Perferendis similique quisquam animi laudantium dolore ipsam dolorem amet quis."
},
  {
    name: "Michael Brown",
    image:
      "https://img.freepik.com/free-photo/3d-dia-de-muertos-cartoon-style-illustration_23-2151826817.jpg",
    profession: "Marketing Specialist",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consequuntur unde accusamus reprehenderit totam voluptatum, eaque ipsum accusantium? Ducimus, ipsum. Perferendis similique quisquam animi laudantium dolore ipsam dolorem amet quis."
  },
  {
    name: "Sophia Davis",
    image:
      "https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy_183364-81073.jpg",
    profession: "Project Manager",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consequuntur unde accusamus reprehenderit totam voluptatum, eaque ipsum accusantium? Ducimus, ipsum. Perferendis similique quisquam animi laudantium dolore ipsam dolorem amet quis."
  },
  {
    name: "James Wilson",
    image:
      "https://img.freepik.com/free-photo/celebration-labour-day-with-3d-cartoon-portrait-working-woman_23-2151306640.jpg",
    profession: "Data Analyst",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consequuntur unde accusamus reprehenderit totam voluptatum, eaque ipsum accusantium? Ducimus, ipsum. Perferendis similique quisquam animi laudantium dolore ipsam dolorem amet quis."
  },
];

export default function WhatUsersSaying() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd image (index 2)
//   const ITEM_WIDTH = 150; // Width of each image
//   const VISIBLE_ITEMS = 5; // Total number of items visible at once (center + 2 on each side)

  const handleScroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? clients.length - 1 : prevIndex - 1;
      } else if (direction === "right") {
        return prevIndex === clients.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the displayed images
  const getDisplayedImages = () => {
    const totalClients = clients.length;
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + totalClients) % totalClients);
    }
    return indices.map((index) => clients[index]);
  };

  const displayedImages = getDisplayedImages();

  return (
    <div className="font-poppins overflow-hidden py-20 bg-gray-100">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center mb-14">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <Anim>
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
              What Users Are Saying
            </h1>
          </Anim>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>

      {/* Card */}

      <section className="flex justify-center items-center mb-20">
        <div className="flex  flex-col sm:flex-row items-center bg-gradient-to-br from-white to-transparent  rounded-lg p-6 sm:p-8 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] space-y-0 sm:space-y-0 sm:space-x-6">
          {/* Profile Image */}
          <div className="border-2 border-customGreen rounded-full p-1 flex-shrink-0 -mt-20">
            <img
              src={clients[currentIndex].image}
              alt="image"
              className="h-20 w-20  object-cover rounded-full bg-white"
            />
          </div>
          {/* User Details */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 ">
            <h1 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-800">
              {clients[currentIndex].name}
            </h1>
            <h3 className="text-sm md:text-base text-gray-500">
              {clients[currentIndex].profession}
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
              {clients[currentIndex].description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-[25%] top-[140%] md:top-1/2 transform -translate-y-1/2 
             bg-gray-100 text-gray-800 border border-gray-300 
             p-3 rounded-full z-10 shadow-md hover:shadow-lg 
             hover:bg-gradient-to-t hover:from-green-400 hover:to-green-600 
             hover:border-green-500 transition-all duration-300 
             hover:text-white"
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} />
        </button>

        {/* Carousel Container */}
        <div className="relative  flex overflow-hidden items-center justify-center">
          <motion.div className="flex gap-4 " transition={{ duration: 0.5 }}>
            {displayedImages.map((client, i) => (
              <div
                key={i}
                className={`flex-shrink-0 relative rounded-full border-2 border-customGreen p-1  ${
                  i === 2
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-40 z-0"
                } transition-all duration-500`}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-[25%] top-[140%] md:top-1/2 transform -translate-y-1/2 
             bg-gray-100 text-gray-800 border border-gray-300 
             p-3 rounded-full z-10 shadow-md hover:shadow-lg 
             hover:bg-gradient-to-t hover:from-green-400 hover:to-green-600 
             hover:border-green-500 transition-all duration-300 
             hover:text-white"
        >
          <ArrowForwardIcon sx={{ fontSize: 20 }} />
        </button>
      </section>
    </div>
  );
}