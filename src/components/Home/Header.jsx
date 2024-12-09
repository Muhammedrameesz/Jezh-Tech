import { useNavigate } from "react-router-dom";
import Anim from "../../ui/Anim.jsx";
import AnimRl from "../../ui/AnimRL.jsx";
import AnimBT from "../../ui/AnimZF.jsx";
import BackgroundBeamsWithCollision from "../../ui/Aceternity/Background1.jsx";
import HoverButton from "../../ui/HoverButton.jsx";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  };
  const url = "https://img.freepik.com/free-vector/white-background-with-hexagonal-line-pattern-design_1017-28442.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid";

  return (
    <BackgroundBeamsWithCollision url={url} className="relative custom-class">
      <div className="font-poppins bg-white text-black min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-12">
        
        {/* Wave Decoration */}
        <div className="absolute -left-14 top-6 w-[25%] md:w-[20%] h-[20%] md:h-[30%] rounded-full rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            <path
              d="M0,70 Q25,85 50,70 T100,70 V100 H0 Z"
              fill="#8fd14f"
              className="animate-wave"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative text-center max-w-screen-lg px-4 md:px-10 rounded-lg mt-20 md:mt-16">
          <Anim>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black leading-snug mb-2 md:mb-8">
              Your Trusted Partner for Innovative Technology Solutions
            </h1>
          </Anim>
          <AnimRl>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed mb-6 md:mb-12">
              Discover reliable solutions that simplify technology and accelerate your growth.
            </p>
          </AnimRl>
          <Anim>
            <div onClick={handleClick} className="flex justify-center sm:justify-start items-center mt-0 md:mt-16 ml-0 lg:ml-14">
              <HoverButton>Get Started</HoverButton>
            </div>
          </Anim>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
