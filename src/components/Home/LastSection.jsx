import Anim from "../../ui/Anim.jsx";

export default function LastSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-16 mb-12 p-6 font-poppins ">
      <Anim>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center leading-snug">
          Ready to Get Started?
        </h1>
      </Anim>

      <Anim delay={0.4}>
        <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          “Contact us to discuss your project needs. We’re here to help bring
          your ideas to life!”
        </p>
      </Anim>

      <Anim delay={0.6}>
        <button className="bg-customGreen py-3 px-6 rounded-full text-black font-semibold text-lg shadow-md hover:bg-white hover:text-black border-2 border-customGreen  transition-all duration-300 hover:shadow-xl transform ">
          Schedule Your Appointment Today
        </button>
      </Anim>
    </div>
  );
}
