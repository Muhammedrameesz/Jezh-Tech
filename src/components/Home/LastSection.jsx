import Anim from "../../ui/Anim.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

export default function LastSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 gap-12 pb-12 pt-12 p-6 font-poppins bg-gradient-to-r py-10 ">
      <Anim>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-customGreen via-black to-customGreen text-center leading-snug">
          Ready to Get Started?
        </h1>
      </Anim>

      <Anim delay={0.4}>
        <p className="text-center text-gray-800 font-semibold text-lg md:text-xl max-w-2xl leading-relaxed">
          “Contact us to discuss your project needs. We’re here to help bring
          your ideas to life!”
        </p>
      </Anim>

      <Anim delay={0.6}>
        <button >
          <HoverButton>
          Schedule Your Appointment Today
          </HoverButton>
        </button>
      </Anim>
    </div>
  );
}
