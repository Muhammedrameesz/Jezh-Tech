import web from "../../assets/icons/imgbin_digital-marketing-web-development-search-engine-optimization-online-presence-management-computer-icons-png.png";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import Animations from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";

export default function SecSection() {
  return (
    <>
      <div className="w-full font-helvetica mt-20 flex flex-col items-center bg-gradient-to-b from-white to-gray-50  ">
        <div className="flex items-center justify-center mb-12 space-x-4">
          <div className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></div>
          <h1 className="font-poppins text-center text-5xl md:text-6xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-customGreen via-black  to-customGreen  ">
            Industries We Serve
          </h1>
          <div className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-start justify-items-center text-center">
          <Animations>
            <div className="flex flex-col items-center space-y-6 bg-black rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out ">
              <HomeWorkOutlinedIcon
                className="text-gray-500"
                sx={{ fontSize: "60px" }}
              />
              <h1 className="text-2xl font-semibold text-slate-200">
                Home & Industrial Automation
              </h1>
              <p className="text-base text-gray-400 leading-relaxed">
                Need a smarter space? We’ve got the tech! JEZH Technologies
                specializes in IoT automation that makes homes smarter and
                industries more efficient. From boosting security to automating
                daily tasks, we create solutions that simplify life and
                streamline operations. Let’s make your space work for you.
              </p>
              <button className="bg-customGreen border-2 border-customGreen text-black font-semibold py-2 px-6 rounded-full hover:bg-black  hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ">
                Know More
              </button>
            </div>
          </Animations>
          <AnimRL>
            <div className="flex flex-col items-center space-y-6 bg-black rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out ">
              <img src={web} alt="aoutomation" className="h-16 w-h-16 " />

              <h1 className="text-2xl font-semibold text-slate-200">
                Website Development & Digital Presence
              </h1>
              <p className="text-base text-gray-400 leading-relaxed ">
                Need a powerful online presence? JEZH Technologies specializes
                in designing and developing custom websites that are not only
                visually engaging but also optimized for user experience and
                functionality. We make sure your site is ready to engage and
                convert visitors seamlessly.
              </p>
              <button className="bg-customGreen border-2 border-customGreen text-black font-semibold py-2 px-6 rounded-full hover:bg-black  hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ">
                Know More
              </button>
            </div>
          </AnimRL>
        </section>
      </div>
    </>
  );
}
