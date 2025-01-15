import Slider from "react-slick";
import "../../css/CustomSlickSlide.css";
import "slick-carousel/slick/slick-theme.css";
import BinuMon from "../../assets/images/Binumon.png";
import QuotationImg from "../../assets/partners/quotation-mark.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import { TiStarFullOutline } from "react-icons/ti";

export default function WhatOurUsersSaying() {
  const reviews = [
    {
      title: "Outstanding Website Development and Innovation",
      description:
        "The Jezh team delivered a standout Dakshin Sahodaya website, revolutionized school elections with EVMs, and fostered AI skills through Jezh Technology's Robo Fun, demonstrating innovation and commitment to technological advancement.",
      designation: "Senior Principal",
      name: "Binumon",
      image: BinuMon,
      quoteImage: QuotationImg,
    },
    {
      title: "Streamlined Election Process with EVMs",
      description:
        "Jezh's Electronic Voting Machine streamlined our election process with its affordability and user-friendly design, making it an excellent solution for efficient voting management.",
      designation: "CEO",
      name: "Ravi Shankar",
      image:
        "https://img.freepik.com/free-photo/3d-illustration-young-businessman-using-laptop-his-office_1057-45785.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted",
      quoteImage: QuotationImg,
    },
    {
      title: "Exceptional Customization for Our Website",
      description:
        "Jezh Technologies developed our website with remarkable service and exceptional customization to meet our specific requirements. We are extremely pleased with the outstanding results.",
      designation: "CEO",
      name: "Arun Kumar",
      image:
        "https://img.freepik.com/free-photo/3d-illustration-young-businessman-using-laptop-his-office_1057-45785.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted",
      quoteImage: QuotationImg,
    },
    {
      title: "Transforming Office Operations with IoT Automation",
      description:
        "Innovative approach of Jezh Technologies to IoT automation transformed our office operations. Their professionalism and technical expertise are commendable.",
      designation: "Project Manager",
      name: "Divya Prasad",
      image:
        "https://img.freepik.com/free-photo/3d-rendering-cute-girl-with-glasses-working-her-laptop_1057-45909.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted",
      quoteImage: QuotationImg,
    },
    {
      title: "Creative E-commerce Development Beyond Expectations",
      description:
        "Our e-commerce site, developed by Jezh Technologies, exceeded our expectations. Their team’s creativity and attention to detail truly stood out.",
      designation: "Project Manager",
      name: "Nithya Ramesh",
      image:
        "https://img.freepik.com/free-photo/3d-rendering-cute-girl-with-glasses-working-her-laptop_1057-45909.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted",
      quoteImage: QuotationImg,
    },
  ];

  // Custom Arrow Components
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <FaArrowRight
        className={className}
        style={{
          ...style,
          color: "#a0d201", // Set arrow color
          fontSize: "24px",
          right: "10px",
          top:0,
          zIndex: 1,
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "5px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          
        }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowLeft
        className={className}
        style={{
          ...style,
          color: "#a0d201", 
          fontSize: "24px",
          left: "10px",
          top:0,
          zIndex: 1,
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "5px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          
        }}
        onClick={onClick}
      />
    );
  };

  // PropTypes for custom arrow components
  CustomNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  CustomPrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: window.innerWidth <= 768, 
    arrows: window.innerWidth > 768, 
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,
    // autoplaySpeed: 1000,
  };

  const stars = Array(5).fill(0);

  return (
    <div className=" py-20 font-jost min-h-screen bg-gradient-to-br from-purple-500 via-purple-100 to-transparent ">
      <h2 className="text-3xl md:text-4xl  text-center text-customBlue mb-8 md:mb-10">
        What Our Users Are <span className="font-semibold">Saying</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {/* Column 1 */}
        <div className="bg-gradient-to-br from-white via-white to-green-300 shadow-lg rounded-3xl p-6 md:p-8 flex flex-col items-start text-left mx-4 md:mx-0  md:ml-10">
          <h3 className="md:text-base text-gray-500 mb-4">REVIEWED ON</h3>
          <img
            src="https://startp-next.envytheme.com/images/saas/clutch-logo.png"
            alt="Clutch Logo"
            className="mb-4"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-customGreen mb-4">
            4.9/5
          </h1>
          <p className="text-gray-600 text-base md:text-lg ">
            <span className="flex justify-start space-x-1">
              {stars.map((_, i) => (
                <span className="text-yellow-500 text-2xl" key={i}>
                  <TiStarFullOutline />
                </span>
              ))}
            </span>
            <span className="block mt-2">Based on 1K+ reviews</span>
          </p>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-2 bg-gradient-to-br from-white via-white to-transparent shadow-sm rounded-3xl p-4 mx-4 md:mx-0 relative overflow-hidden">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-6 relative ">
                <div className="flex flex-col items-start text-start ">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                    {review.title}
                  </h4>
                  <p className="text-gray-500 leading-7 italic mb-5">
                    {review.description}
                  </p>

                  <div className="flex gap-4 relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    />
                    <div className="py-5">
                      <p className="text-gray-800 font-medium">{review.name}</p>
                      <p className="text-gray-500 text-sm">
                        {review.designation}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={review.quoteImage}
                  alt="QuotationImg"
                  className="w-20 h-auto absolute right-10 bottom-7"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <section className="py-5 mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-0 justify-between mx-auto">
          <div className="flex flex-col justify-center items-center border-none md:border-r md:border-dashed md:border-gray-400">
            <span className="text-customBlue text-4xl md:text-6xl font-semibold">
              10+
            </span>{" "}
            <span className="text-base text-gray-500">Clients</span>
          </div>
          <div className="flex flex-col justify-center items-center border-none md:border-r md:border-dashed md:border-gray-400">
            <span className="text-customBlue text-4xl md:text-6xl font-semibold">
              20+
            </span>{" "}
            <span className="text-base text-gray-500">Projects</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-customBlue text-4xl md:text-6xl font-semibold">
              100+
            </span>{" "}
            <span className="text-base text-gray-500">Happy Customers</span>
          </div>
        </div>
      </section>
    </div>
  );
}
