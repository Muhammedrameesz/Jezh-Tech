import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnimBT from "../../../ui/AnimBT.jsx";
import Underline from "../../../ui/Underline.jsx";
import { GoArrowRight } from "react-icons/go";

export default function ForthSection() {
  const content = [
    {
      key: "Internet",
      title: "Internet of Things (IoT)",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <AutoAwesomeIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <SmartToyIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Internet",
      title: "Internet of Things (IoT)",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <AutoAwesomeIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <SmartToyIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <AutoAwesomeIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <SmartToyIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
  ];

  return (
    <div className="py-20 font-jost bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-[#0E314C] text-xl md:text-xl lg:text-2xl font-semibold leading-tight mb-4
           "
        >
          Hardware Services
        </h1>
        <Underline />
        <p className="text-base text-gray-500 mb-10 max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          sapiente. A ipsa veniam quos, perferendis, nobis maiores.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
        {content?.map((data, i) => (
          <AnimBT key={i}>
            <div className="bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 rounded-xl hover:shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-3 overflow-hidden">
              <div className="flex justify-start items-center  mt-5">
                <div className="text-gray-800 ml-5 ">{data.Icon}</div>
              </div>
              <div className="p-6">
                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                  {data.title}
                </h1>
                <p className="text-gray-600 mb-4 text-sm font-semibold">
                  {data.des}
                </p>
                <button className="flex items-center justify-between px-4 py-2 text-sm text-gray-800 font-semibold rounded-full bg-white shadow  transition-all duration-300 ease-in-out hover:text-customGreen">
                  <span className="flex-grow text-left">Learn More</span>
                  <GoArrowRight className="text-lg ml-2" />
                </button>
              </div>
            </div>
          </AnimBT>
        ))}
      </div>
    </div>
  );
}
