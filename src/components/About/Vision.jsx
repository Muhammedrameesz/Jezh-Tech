import VisionMission from "./visionMissionContent"; // Ensure this file exports the content array
import Anim from "../../ui/Anim.jsx";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";

export default function TestAnim() {
  return (
    <div className="py-20 font-poppins bg-gray-100">
      <AnimZF>
      <div className="flex flex-row py-16 items-center justify-center space-x-4">
        <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-b from-customGreen to-transparent"></span>
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
                className={`relative border h-[350px] w-full max-w-[500px] overflow-hidden rounded-lg before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%]
              ${i === 1 ? "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#D1D5DB_75%)] bg-black" : "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#000_75%)] bg-gray-300"}  
              before:animate-spin-slow
            `}
              >
                <div className="absolute inset-1 flex flex-col justify-center  bg-neutral-50  px-6 space-y-6">
                  {/* Icon and Title Row */}
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 mr-4 "
                    />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h2>
                  </div>

                  {/* List of Points */}
                  <div className="space-y-4">
                    {item.items?.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowForwardRoundedIcon className="text-gray-800 mt-1" />
                        <p className="text-gray-700 leading-relaxed font-semibold">
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
