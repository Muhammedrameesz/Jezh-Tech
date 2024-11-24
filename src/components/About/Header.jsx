import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

export default function Header() {
  return (
    <div className="relative top-14 flex flex-col justify-center min-h-screen items-center font-poppins px-4 ">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/rear-view-man-working-office_1048944-23684005.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid)`,
          filter: "blur(2px)",  
          backgroundAttachment:'fixed'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mt-0 bg-[rgba(255,255,255,0.5)] p-10">
        <Anim>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-8">
            About Us
          </h1>
        </Anim>

        <AnimRL>
          <p className="text-lg md:text-xl text-black mb-10 leading-relaxed">
            Trust us to simplify tech and drive success.
          </p>
        </AnimRL>

        <AnimZF>
          <button>
            <HoverButton>Contact Us Now</HoverButton>
          </button>
        </AnimZF>
      </div>
    </div>
  );
}
