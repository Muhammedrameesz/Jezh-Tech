import Anim from "../../ui/Anim.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

export default function LastSection() {
  // const TextColor="text-white"
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-green-500 via-customGreen to-transparent gap-12 pb-12 pt-12 p-6 font-poppins  py-10 ">
      <Anim>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center leading-snug">
          Ready to Get Started?
        </h1>
      </Anim>

      <Anim delay={0.4}>
        <p className="text-center text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed">
          “Contact us to discuss your project needs. We’re here to help bring
          your ideas to life!”
        </p>
      </Anim>

      <Anim delay={0.6}>
        <span >
          <HoverButton>
          Schedule Your Appointment Today
          </HoverButton>
        </span>
      </Anim>
    </div>
  );
}
