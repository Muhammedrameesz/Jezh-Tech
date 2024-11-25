import Bg from "../../assets/icons/who we are.png";
import Anim from "../../ui/Anim.jsx";
import HoverButton from "../../ui/HoverButton.jsx";

export default function WhoWeAre() {
  return (
    <div className=" flex flex-col  items-center justify-center bg-gradient-to-t from-oracleGray to-gray-200 min-h-screen px-6 py-12 mx-6 md:mx-12 lg:mx-20 mt-28 font-poppins">
      <Anim>
        <div className="relative text-center md:text-left space-y-6 max-w-2xl p-10 border-[5px] bg-white border-black">
          <div className="absolute left-[60%]  -translate-y-1/2 z-10 w-56 h-56 bg-white rounded-full ">
            <img src={Bg} alt="who we are" />
          </div>

          <span className="text-customGreen font-semibold text-lg uppercase tracking-wide">
            Who We Are?
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Serving Since 2021
          </h1>
          <p className="  ">
            Jezh Technologies is a forward-thinking company focused on
            delivering innovative tech solutions. We specialize in smart IoT and
            AI-powered applications that simplify processes and help businesses
            thrive in a digital world. Our team is committed to creating
            user-friendly, efficient technology that drives success. We work
            closely with clients to deliver tailored solutions that meet their
            unique needs. At Jezh Technologies, we are more than just a
            provider—we’re a trusted partner shaping the future of technology.
          </p>
          <button>
            <HoverButton>View Services</HoverButton>
          </button>
        </div>
      </Anim>
    </div>
  );
}
