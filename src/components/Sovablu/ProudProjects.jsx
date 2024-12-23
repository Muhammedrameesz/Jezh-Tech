import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/CustomSlickSlide.css";
import { useState } from "react";
import Underline from "../../ui/Underline";
import AddIcon from "@mui/icons-material/Add";
import { AnimatePresence, motion } from "framer-motion";
import Pattern from "../../ui/Pattern5.jsx";

const ImageCarousel = () => {
  const images = [
    "https://img.freepik.com/free-vector/travel-landing-page_52683-4853.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/gradient-nature-web-design_52683-2654.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/colorful-business-solution-landing-page_52683-8065.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/illustration-concept-web-design-with-person-who-is-setting-layout-web_101434-761.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-psd/business-strategy-landing-page-template_23-2150699159.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/flat-design-consultancy-landing-page-template_23-2150121214.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [hover, setHover] = useState(null);

  return (
    <div className="relative py-10">
      <Pattern />
      <div className="flex flex-col  items-start justify-center mx-5 md:mx-20 max-w-md font-poppins mb-8 mt-4 ">
        <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
          Proud Projects That Make Us Stand Out
        </h1>
        <Underline />

        <p className="text-sm text-gray-500   leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="w-[90%] mx-auto py-10">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-[250px] h-[220px] z-40"
              />
              <AnimatePresence>
                {hover === index && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute top-5 right-10 bg-green-400 rounded-full text-white p-2 shadow-lg hover:bg-purple-400 transition-colors duration-500"
                  >
                    <AddIcon sx={{ fontSize: "30px" }} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
