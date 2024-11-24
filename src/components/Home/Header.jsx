import { useNavigate } from "react-router-dom";
import Anim from "../../ui/Anim.jsx";
import AnimRl from "../../ui/AnimRL.jsx";
import AnimBT from "../../ui/AnimZF.jsx";
import BG from "../../assets/images/15364601_5585459.jpg";
import HoverButton from "../../ui/HoverButton.jsx";


export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  };

  return (
    <>
      <div
        id="hero-section"
        className="relative font-poppins bg-white text-black min-h-screen flex items-center justify-center overflow-hidden "
       
      >
        <div className="absolute inset-0 z-0 bg-cover bg-center"
         style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(2px)",  

        }}
        >

        </div>
        <div className="relative text-center max-w-screen-lg px-20  rounded-lg top-16 ">
          <Anim>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-snug mb-10">
              Your Trusted Partner for <br /> Innovative Technology Solutions
            </h1>
          </Anim>
          <AnimRl>
            <p className="text-lg md:text-2xl text-gray-900 leading-relaxed mb-12">
              Discover reliable solutions that simplify technology and
              accelerate your growth.
            </p>
          </AnimRl>
          <AnimBT>
            <button onClick={handleClick}>
              <HoverButton>
                Get Started
              </HoverButton>
            </button>
          </AnimBT>
        </div>
      </div>
    </>
  );
}
