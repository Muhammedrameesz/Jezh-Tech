import WhyChooseContent from "./WhychooseContent";
import Anim from "../../ui/Anim.jsx"

export default function TestAnim() {
  return (
    <>
      <div className="pt-10 ">
        <h1 className="text-4xl   md:text-5xl mb-16 text-center tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-customGreen via-black  to-customGreen">
          Why Choose Us
        </h1>

      <div className="flex justify-center items-center mx-3  max-h-screen bg-[#fff] space-x-4">
        {WhyChooseContent.map((item, i) => (
          <div
            key={i}
            className="relative   w-[300px] h-[300px]  overflow-hidden before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#8fd14f_100%)] before:animate-spin-slow mx-10"
          >

            <div className="absolute  flex flex-col justify-center items-center top-[5px] right-[5px] bottom-[5px] left-[5px]  px-2 bg-white">
              <Anim delay={i+1*0.3}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-32 object-cover  mb-4"
              />
              <h1 className="text-gray-800 text-xl font-semibold mb-2 text-center">
                {item.title}
              </h1>
              <p className="text-gray-700 text-center">{item.text}</p>
              </Anim>
            </div>
            
          </div>
        ))}
      </div>
      </div>

    </>
  );
}
