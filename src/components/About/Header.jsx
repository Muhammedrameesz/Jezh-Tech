import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

export default function Header() {
  return (
    <div
      className="relative top-14 flex flex-col justify-center items-center bg-gray-100 min-h-screen font-poppins px-4 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-vector/modern-abstract-white-background-template-design-black-with-lighting-illustration_1044505-617.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed", 
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mt-0 bg-[rgba(255,255,255,0.5)] p-10 rounded-lg shadow-md">
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
          <div>
            <HoverButton>Contact Us Now</HoverButton>
          </div>
        </AnimZF>
      </div>
    </div>
  );
}
