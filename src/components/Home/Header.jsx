import { useNavigate } from "react-router-dom";
import Anim from "../../ui/Anim.jsx";
import AnimRl from "../../ui/AnimRL.jsx";
import AnimBT from "../../ui/AnimZF.jsx"

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  };

  return (
    <>
    <div
      id="hero-section"
      className="relative font-poppins bg-white text-black min-h-screen flex items-center justify-center  px-4"
      style={{
        backgroundImage:
          `url(https://img.freepik.com/premium-vector/gradient-white-background-with-cubes_23-2149151830.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        
        
      }}
    >
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md -z-10"></div>

      {/* Main content */}
      <div className="relative text-center max-w-screen-lg p-6 px-20  rounded-lg top-16">
        <Anim>
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-snug mb-10">
            Your Trusted Partner for <br /> Innovative Technology Solutions
          </h1>
        </Anim>

        <AnimRl>
          <p className="text-lg md:text-2xl text-gray-900 leading-relaxed mb-12">
            Discover reliable solutions that simplify technology and accelerate your growth.
          </p>
        </AnimRl>
         
         <AnimBT>
        <button
          onClick={handleClick}
          className="px-6 py-3 text-lg font-bold text-black bg-customGreen rounded-xl border-2 border-customGreen hover:bg-white transition-all duration-300 shadow-lg"
        >
          Get Started
        </button>
        </AnimBT>
      </div>
    </div>
  </>
  );
}
