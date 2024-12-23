import Anim from "../../ui/Anim.jsx";
import HoverButton from "../../ui/HoverButton2.jsx";
import HoverLogo from "../LogoHover.jsx"

export default function LastSection() {
  // const TextColor="text-white"
  return (
    <div className="relative flex flex-col items-center justify-center bg-custom-gradient gap-12 pb-44 pt-12 p-6 font-poppins mb-40  ">
     <HoverLogo/>
      <Anim>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center leading-snug">
          Ready to Get Started?
        </h1>
      </Anim>

      <Anim delay={0.4}>
        <p className="text-center text-gray-100 text-lg md:text-xl max-w-2xl leading-relaxed">
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
