import {
  FaBullhorn,
  FaPaintBrush,
  FaLaptopCode,
  FaVideo,
  FaWindowMaximize,
  FaEye,
  FaMobileAlt,
  FaCube,
} from "react-icons/fa";

const careerList = [
  {
    career: "Digital Marketer Executive",
    icon: <FaBullhorn />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "Graphic Designer",
    icon: <FaPaintBrush />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "MERN Stack Developer",
    icon: <FaLaptopCode />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "Video Editor",
    icon: <FaVideo />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "UI/UX Designer",
    icon: <FaWindowMaximize />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "Computer Vision Engineer",
    icon: <FaEye />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "Flutter Developer",
    icon: <FaMobileAlt />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "Unity 3D Developer",
    icon: <FaCube />,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    career: "Three.js Developer",
    icon: <FaCube />, // Using the same cube icon for 3D development
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const CareerList = () => {
  return (
    <section className="py-20 font-jost">
      <div className="mx-10 md:mx-20 shadow-custom py-10">
        <div className="text-center mt-8 px-4 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E314C] mb-2">
            Embark Your Journey To Success
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto text-center font-semibold ">
            Seeking Skilled Individuals Across Various Fields to Join Our
            Dynamic Talent Pool.
          </p>
        </div>

        {/* Career List */}
        <div className="career-list grid grid-cols-1 md:grid-cols-3 gap-3 mx-5 md:mx-10 ">
          {careerList.map((item, index) => (
            <div
              key={index}
              className="career-item flex flex-col items-start p-4 border-b gap-2 "
            >
              <div className="icon text-4xl mb-3 text-gray-800">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0E314C]">
                {item.career}
              </h3>
              <p className="text-sm text-gray-500 max-w-lg font-semibold">
                {item.quote}
              </p>
              <div>
                <button
                  onClick={() => alert("Application form will open soon!")}
                  className="bg-customGreen text-black py-2 px-6 rounded-md font-semibold text-sm transition-all duration-300 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-customGreen focus:ring-offset-2"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerList;
