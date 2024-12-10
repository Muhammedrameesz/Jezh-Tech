import VisionMission from "./visionMissionContent"; // Ensure this file exports the content array
import Anim from "../../ui/Anim.jsx";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";

export default function TestAnim() {
  return (
    <div className="pb-20 pt-10 font-poppins bg-gray-200">
      <AnimZF>
      <div className="flex flex-row py-16 items-center justify-center space-x-4">
        <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
        <h1 className="text-4xl  md:text-5xl mb-5 tracking-tight text-center max-w-xl font-extrabold text-black">
          Empowering Innovation: Our Vision and Mission
        </h1>
        <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
      </div>
        
      </AnimZF>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 justify-center items-center">
        {VisionMission?.map((item, i) => {
          const Animated = i === 0 ? Anim : AnimRL;
          return (
            <Animated key={i}>
              <div
                className={`relative border h-[350px] w-full max-w-[500px] overflow-hidden rounded-lg before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] shadow-2xl
              ${i === 1 ? "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#8fd14f_75%)] bg-red-500" : "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#EF4444_75%)] bg-customGreen"}  
              before:animate-spin-slow
            `}
              >
                <div className="absolute inset-1 flex flex-col justify-center bg-gray-950 shadow-xl  px-6 space-y-6 ">
                  {/* Icon and Title Row */}
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 mr-4   "
                    />
                    <h2 className="text-2xl font-bold text-gray-200">
                      {item.title}
                    </h2>
                  </div>

                  {/* List of Points */}
                  <div className="space-y-4">
                    {item.items?.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowForwardRoundedIcon className="text-gray-300 mt-1" />
                        <p className="text-gray-300 leading-relaxed font-medium">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
          );
        })}
      </div>


      
    </div>
  );
}
