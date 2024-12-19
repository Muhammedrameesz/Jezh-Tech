import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import { RiRobot3Line } from "react-icons/ri";
import Underline from "../../ui/Underline.jsx";

export default function Service() {
  return (
    <div className=" font-poppins py-20">
      <div className="flex flex-col justify-center items-center  mb-14 space-x-4">
        
          <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
            What We Do
          </h1>
          <Underline />
       

        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg leading-6">
            Experience the power of technology with JEZH Technologies. We design
            and develop customized solutions that optimize your operations,
            elevate your brand, and deliver exceptional results
          </p>
        </Anim>
      </div>
      <div className=" flex justify-center items-center bg-white mx-5 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {/* Card 1 */}

          <Anim delay={0.4}>
            <div className="bg-white h-[370px] md:h-[460px] hover:bg-gradient-to-tl from-customGreen to-green-500 rounded-lg border border-dashed border-green-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-green-200 group-hover:bg-white transition-all duration-500 rounded-full w-12 h-12">
                  <HomeWorkOutlinedIcon
                    sx={{ transition: "all 0.6s" }}
                    className="text-green-700 text-lg "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 cursor-pointer hover:underline">
                  Home & Industrial Automation
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-500">
                  Need a smarter space? We’ve got the tech! JEZH Technologies
                  specializes in IoT automation that makes homes smarter and
                  industries more efficient. From boosting security to
                  automating daily tasks, we create solutions that simplify life
                  and streamline operations.
                </p>
              </div>
            </div>
          </Anim>
          {/* Card 2 */}
          <Anim delay={0.6}>
            <div className="bg-white h-[370px] md:h-[460px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-blue-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-blue-200 group-hover:bg-white transition-all duration-500 rounded-full w-12 h-12">
                  <LanguageOutlinedIcon
                    sx={{ transition: "all 0.6s" }}
                    className="text-blue-700 text-lg "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 cursor-pointer hover:underline">
                  Website Development & Digital Presence
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-500">
                  Need a powerful online presence? JEZH Technologies specializes
                  in designing and developing custom websites that are not only
                  visually engaging but also optimized for user experience and
                  functionality. We make sure your site is ready to engage and
                  convert visitors seamlessly.
                </p>
              </div>
            </div>
          </Anim>
          {/* Card 3 */}
          <AnimRL delay={0.4}>
            <div className="bg-white h-[370px] md:h-[460px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-rose-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-rose-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <CodeOutlinedIcon
                    sx={{ transition: "all 0.6s" }}
                    className="text-rose-700 text-lg "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 cursor-pointer hover:underline">
                  RESEARCH & DEVELOPMENT
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-500">
                  We offer e-commerce development services, building secure,
                  scalable, and user-friendly online stores to boost your sales
                  engagement and customer. We deliver cutting-edge solutions
                  that transform spaces, enhance online experiences, and drive
                  business growth.
                </p>
              </div>
            </div>
          </AnimRL>
          {/* Card 4 */}
          <AnimRL delay={0.6}>
            <div className="bg-white h-[370px] md:h-[460px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-lime-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-lime-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <RiRobot3Line
                    sx={{ transition: "all 0.6s" }}
                    className="text-lime-700 text-xl "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 cursor-pointer hover:underline">
                  AI & ROBOTICS WORKSHOPS
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-500">
                  We are an organization dedicated to advancing AI and Robotics
                  education. We provide immersive, hands-on learning experiences
                  that empower individuals to develop critical skills in
                  artificial intelligence, robotics, and automation. Our
                  programs equip learners with the practical knowledge and
                  expertise necessary to thrive in the rapidly evolving fields
                  of AI and Robotics.
                </p>
              </div>
            </div>
          </AnimRL>
        </div>
      </div>
    </div>
  );
}
