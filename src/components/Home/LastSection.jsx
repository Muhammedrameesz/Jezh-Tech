import Anim from "../../ui/Anim.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

export default function LastSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-16 mb-12 p-6 font-poppins bg-gradient-to-r my-10 ">
      <Anim>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-customGreen via-black to-customGreen text-center leading-snug">
          Ready to Get Started?
        </h1>
      </Anim>

      <Anim delay={0.4}>
        <p className="text-center text-gray-800 text-lg md:text-xl max-w-2xl leading-relaxed">
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
