import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Anim from "../../../ui/AnimBT.jsx";
import Underline from "../../../ui/Underline.jsx";
import { AnimatePresence, motion } from "framer-motion";
import useSoftwareDetails from "../../../store/HardwareProduct.js";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ForthSection() {
  const navigate = useNavigate();
  const softwareProductDet = useSoftwareDetails(
    (state) => state.setHardwareProductsDetails
  );

  const handleClick = async (title, index) => {
    try {
      // Validate inputs
      if (!title || typeof title !== "string") {
        throw new Error("Title is missing or invalid.");
      }
      if (typeof index !== "number") {
        throw new Error("Index is missing or not a valid number.");
      }

      // Call the state setter with provided title and index
      await softwareProductDet({ title, index });

      // Navigate to the target page
      navigate("/hardwareProductsDetails");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const content = [
    {
      title: "Smart Safety Helmet",
      Icon: <AutoAwesomeIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      title: "Electronic Voting Machines (EVMs)",
      Icon: <SmartToyIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      title: "Washroom Automation",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      title: "Guest Greeting Device",
      Icon: <AutoAwesomeIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      title: "School Automation",
      Icon: <SmartToyIcon />,
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repudiandae eum adipisci dolorem delectus fugiat tempora",
    },
    {
      title: "Smart AI Coat ",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Al-enabled smart coat represents a significant advancement in wearable healthcare technology, offering a proactive approach to health management.",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-10">
        {content?.map((data, i) => (
          <Anim key={i}>
            <motion.div
              initial={{ rotateX: 0 }}
              whileHover={{ rotateX: 25 }}
              transition={{ duration: 0, ease: "easeInOut" }}
              className={` h-[280px]  bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 rounded-xl hover:shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-3 overflow-hidden group relative`}
            >
              <motion.div className="flex justify-start items-center ml-5 mt-5">
                <motion.div className="text-gray-800 bg-white rounded-full p-3 group-hover:bg-customGreen group-hover:text-white transition-colors duration-1000">
                  {data.Icon}
                </motion.div>
              </motion.div>

              <div className="p-6">
                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                  {data.title}
                </h1>
                <p className="text-gray-600 mb-4 text-sm font-semibold">
                  {data.des}
                </p>
              </div>

              <AnimatePresence>
                <motion.button
                  onClick={() => handleClick(data.title, i)}
                  className="flex ml-auto text-sm px-3 p-2 bg-white text-gray-800 font-semibold rounded-full ease-in-out hover:text-white hover:bg-customGreen transition-colors duration-1000 absolute bottom-5 right-5"
                >
                  Learn More{" "}
                  <MdKeyboardDoubleArrowRight className="ml-1 text-lg" />
                </motion.button>
              </AnimatePresence>
            </motion.div>
          </Anim>
        ))}
      </div>
    </div>
  );
}
