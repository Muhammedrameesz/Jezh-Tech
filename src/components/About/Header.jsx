import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

// import { Boxes } from "../../ui/Aceternity/Background2.jsx";

export default function Header() {
  return (
    <div className="relative top-14 flex bg-gray-100 flex-col justify-center min-h-screen items-center font-poppins px-4 overflow-hidden">
      {/* Background Animation */}
      {/* <Boxes /> */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mt-0 bg-[rgba(255,255,255,0.5)] p-10">
        <Anim key="anim-header">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-8">
            About Us
          </h1>
        </Anim>

        <AnimRL key="anim-description">
          <p className="text-lg md:text-xl text-black mb-10 leading-relaxed">
            Trust us to simplify tech and drive success.
          </p>
        </AnimRL>

        <AnimZF key="anim-button">
          {/* Removed the outer <button> tag */}
          <div >
          <HoverButton >Contact Us Now</HoverButton>
          </div>
        </AnimZF>
      </div>
    </div>
  );
}
