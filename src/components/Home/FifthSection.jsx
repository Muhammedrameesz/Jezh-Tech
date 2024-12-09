import AnimTB from "../../ui/AnimTB.jsx";
import AnimBT from "../../ui/AnimBT.jsx";
import {FifthContent} from "./fifthSectionContent"


export default function FifthSection() {
  return (
    <div className="flex flex-col mt-10 items-center font-poppins px-6 py-16 bg-white mb-10">

      <div className="mb-10 md:mb-20 text-center">
        <div className="flex items-center w-full">
          <div className="flex-grow h-1 bg-gradient-to-r from-customGreen to-transparent"></div>
          <AnimTB>
          <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-b from-customGreen to-transparent"></span>
          <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight   ">
            Why Choose Us?
          </h1>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
          </AnimTB>
          <div className="flex-grow h-1 bg-gradient-to-l from-customGreen to-transparent"></div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {FifthContent.map((feature, index) => (
          <AnimBT key={index} delay={index * 0.3}>
            <div className="relative flex flex-col items-center p-8   bg-white transition-transform transform shadow-xl ">
              
               {/* <span className="absolute left-0 top-0 h-[100%] w-[1px] bg-customGreen"></span> */}
               <span className="absolute left-0 top-0 w-[35%] h-[5px] bg-neutral-300"></span>
               <span className="absolute left-0 bottom-0 w-[100%] h-[5px] bg-neutral-300"></span>
               {/* <span className="absolute right-0 bottom-0 h-[100%] w-[1px] bg-customGreen"></span> */}
               <span className="absolute right-0 top-0 w-[35%] h-[5px] bg-neutral-300"></span>

                <div className="absolute top-0  w-20 h-20 rounded-full  flex items-center justify-center -mt-12  shadow-lg bg-white">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-12 w-12"
                  />
                </div>
            
              <h2 className="text-2xl font-semibold text-gray-800 mb-4  text-center mt-7">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          </AnimBT>
        ))}
      </section>
    </div>
  );
}
