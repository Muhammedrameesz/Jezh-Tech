import AnimRL from "../../../ui/AnimRL.jsx";
import AnimatedImage from "../../Home/Animated-Images/AnimatedImages3.jsx";
import ServiceLeft from "../../../assets/image2/SevicePageImg/service-left-main-pic.62057aa2.png";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Anim from "../../../ui/Anim.jsx";
import Underline from "../../../ui/Underline.jsx";

export default function ForthSection() {
  const content = [
    {
      key: "Internet",
      title: "Internet of Things (IoT)",
      Icon: <SettingsInputAntennaOutlinedIcon />,
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <AutoAwesomeIcon />,
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <SmartToyIcon />,
    },
    {
      key: "Internet",
      title: "Internet of Things (IoT)",
      Icon: <SettingsInputAntennaOutlinedIcon />,
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <AutoAwesomeIcon />,
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <SmartToyIcon />,
    },
    {
        key: "Artificial",
        title: "Artificial Intelligence (AI)",
        Icon: <AutoAwesomeIcon />,
      },
      {
        key: "Robotics",
        title: "Robotics & Automation",
        Icon: <SmartToyIcon />,
      },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-10 items-center pb-16 pt-20 px-6 font-poppins">
      <Anim>
        <div className="relative flex flex-col items-start  p-4 lg:p-6 rounded-md  ">
          {/* Header */}

          <h1 className="text-[#0E314C] text-xl md:text-xl lg:text-2xl font-extrabold leading-tight mb-4
           ">
            Hardware Services
          </h1>
          <Underline />
          <p className="text-sm text-gray-500 mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            sapiente. A ipsa veniam quos, perferendis, nobis maiores.
          </p>

          {/* Expertise Sections */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-5  w-full">
            {content.map((item) => (
              <div
                key={item.key}
                className="flex  md:flex-row gap-3 shadow-custom  bg-white p-2 rounded-md  transform hover:-translate-y-2  transition-all duration-500 hover:bg-gradient-to-tl from-customGreen to-green-500 group "
              >
                <div className="text-customGreen group-hover:text-white transition-colors duration-500 ease-in-out ">
                  {item.Icon}
                </div>
                <div className="flex flex-col">
                  <h2  className="text-sm font-semibold tracking-wide text-gray-500 mb-2 group-hover:text-white transition-colors duration-500 ease-in-out">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Anim>

      <div className="mt-[10%] md:mt-[10%] relative overflow-hidden">
        <div className="block md:hidden">
          <AnimRL>
            <img
              src={ServiceLeft}
              alt="service"
              className="max-w-xs sm:max-w-sm h-auto object-contain"
            />
          </AnimRL>
        </div>
        <div className="hidden md:block">
          <AnimatedImage />
        </div>
      </div>

      {/* Right Section */}
    </div>
  );
}
