
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnimBT from "../../../ui/AnimBT.jsx";
import Underline from "../../../ui/Underline.jsx";
import { IoMdAdd } from "react-icons/io";

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
    <div className="py-20 font-poppins bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-[#0E314C] text-xl md:text-xl lg:text-2xl font-extrabold leading-tight mb-4
           "
        >
          Hardware Services
        </h1>
        <Underline />
        <p className="text-sm text-gray-500 mb-10 max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          sapiente. A ipsa veniam quos, perferendis, nobis maiores.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {content?.map((data, i) => (
          <AnimBT key={i} >
          <div
            className="bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 rounded-xl hover:shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-3 overflow-hidden"
          >
            <div className="flex justify-center items-center  mt-5">
              <div className="text-gray-800 ">{data.Icon}</div>
            </div>
            <div className="p-6">
              <h1 className="text-lg font-semibold text-gray-800 mb-2">
                {data.title}
              </h1>
              <p className="text-gray-600 mb-4 text-sm">{data.des}</p>
              <button className="flex items-center text-sm  text-gray-800 font-semibold rounded-full transition-all duration-300 ease-in-out hover:text-green-500">
                Learn More <IoMdAdd className="ml-1 text-lg" />
              </button>
            </div>
          </div>
          </AnimBT>
        ))}
      </div>
    </div>
  );
}
