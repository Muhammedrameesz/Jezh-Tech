import Bg from "../../assets/icons/rb_30331.png";
import Anim from "../../ui/Anim.jsx";
import ANimRL from "../../ui/AnimRL.jsx";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white min-h-screen px-6 py-12 mx-6 md:mx-12 lg:mx-20 mt-20 font-poppins">
      <Anim>
        <div className=" text-center md:text-left space-y-6 md:pr-12 border-2 border-y-customGreen border-l-customGreen border-r-white p-4 rounded-xl">
          <span className="text-customGreen font-semibold text-lg uppercase tracking-wide">
            Who We Are?
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Serving Since 2021
          </h1>
          <p className="text-gray-700 leading-relaxed md:text-lg">
            Jezh Technologies is a forward-thinking company focused on
            delivering innovative tech solutions. We specialize in smart IoT and
            AI-powered applications that simplify processes and help businesses
            thrive in a digital world. Our team is committed to creating
            user-friendly, efficient technology that drives success. We work
            closely with clients to deliver tailored solutions that meet their
            unique needs. At Jezh Technologies, we are more than just a
            provider—we’re a trusted partner shaping the future of technology.
          </p>
          <button className="bg-customGreen text-black border-2  border-customGreen font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-customGreen">
            View Services
          </button>
        </div>
      </Anim>

      <ANimRL>
        <div className="w-full mt-8 md:mt-0 flex justify-center">
          <img
            src={Bg}
            alt="About Jezh Technologies"
            className="rounded-2xl max-w-md transform transition-all duration-500 hover:scale-105"
          />
        </div>
      </ANimRL>
    </div>
  );
}
