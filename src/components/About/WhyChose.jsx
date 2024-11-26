import WhyChooseContent from "./WhychooseContent";
import Anim from "../../ui/Anim.jsx";

export default function TestAnim() {
  return (
    <div className="pt-10 pb-10 font-poppins">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-16 text-center  font-extrabold text-black">
        Why Choose Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 justify-center items-center">
        {WhyChooseContent.map((item, i) => (
          <div
            key={i}
            className={`relative border  h-[320px] w-full max-w-[270px] overflow-hidden before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%]
              ${i % 2 === 0 ? "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#8fd14f_75%)] bg-black" : "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#000_75%)] bg-[#8fd14f]"}  
              before:animate-spin-slow
            `}
          >
            <div className="absolute inset-2 flex flex-col justify-center items-center bg-gray-50  p-4">
              <Anim delay={i * 0.3}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-36 object-cover mb-4"
                />
                <h1 className="text-gray-800 text-xl font-semibold mt-2 mb-2 text-center">
                  {item.title}
                </h1>
                <p className="text-gray-700 tracking-tight text-sm text-center">{item.text}</p>
              </Anim>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
