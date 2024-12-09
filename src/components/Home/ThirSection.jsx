
import Tech from "../../assets/icons/internet-things_10019258.png";
import Ai from "../../assets/icons/artificial-intelligence_18067159.png";
import Robot from "../../assets/icons/robotics_1129358.png";
import AnimRl from "../../ui/AnimRL.jsx";
import AnimatedImage from "./Animated-Images/Animation1.jsx"

export default function ThirSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 items-center bg-gray-100 font-poppins mt-20 px-6 md:px-20 lg:px-24 overflow-hidden pb-20">
        <div className="mt-[50%]">
          <AnimatedImage/>
        </div>
      

      <AnimRl>
        <div className="flex flex-col items-start space-y-8 p-4 lg:p-6 relative overflow-hidden  mt-20">
          <div
            className="absolute inset-0 bg-no-repeat bg-right-top   ml-80 rotate-45   opacity-10"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/multicolor-squares-pattern-background_1195-312.jpg?uid=R121738979&ga=GA1.1.333942242.1728979190&semt=ais_hybrid)",
            }}
            
          ></div>

          <div className="flex flex-row items-center justify-center space-x-4 ">
            <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
            <h1 className="text-black text-center text-xl md:text-2xl lg:text-2xl font-extrabold leading-tight  mb-4  ">
              Our Expertise in Innovation
            </h1>
            <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
          </div>

          <div className="flex flex-col md:flex-row gap-5  ">
            <img
              src={Tech}
              alt="technology"
              className="w-14 h-14  bg-gradient-to-b from-white to-gray-200 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl md:text-xl font-semibold text-gray-800  mb-2">
                Internet of Things (IoT)
              </h2>
              <p className="text-sm text-gray-600 tracking-normal">
                We specialize in connecting devices and systems to make your
                home, business, or industrial environments smarter, safer, and
                more efficient.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5  ">
            <img
              src={Ai}
              alt="technology"
              className="w-14 h-14  bg-gradient-to-b from-white to-gray-200 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
                Artificial Intelligence (AI)
              </h2>
              <p className="text-sm text-gray-600  tracking-normal ">
                Our AI solutions empower businesses to optimize processes,
                improve decision-making, and drive automation through
                intelligent systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 ">
            <img
              src={Robot}
              alt="technology"
              className="w-14 h-14  bg-gradient-to-b from-white to-gray-200 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
                Robotics & Automation
              </h2>
              <p className="text-sm text-gray-600  tracking-normal ">
                We integrate robotics and automation technology to streamline
                tasks, improve productivity, and ensure operational excellence
                across industries.
              </p>
            </div>
          </div>
        </div>
      </AnimRl>
    </div>
  );
}
