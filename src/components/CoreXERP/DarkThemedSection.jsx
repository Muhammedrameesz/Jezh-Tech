import { useNavigate } from "react-router-dom";
import Man1 from "../../assets/CoreXImages/man1.png"
import Man2 from "../../assets/CoreXImages/man2.png"


export default function DarkThemedSection() {
  const navigate =useNavigate()
  return (
    <div className="py-10 font-jost flex flex-col justify-center items-center p-5 md:p-10 lg:p-20">
      <section className="relative w-full p-5  flex flex-col justify-center items-center gap-8 py-20  rounded-3xl bg-gradient-to-br from-black via-green-950 to-black">
        <h1 className="text-white text-center font-semibold text-3xl md:text-5xl lg:text-7xl max-w-4xl leading-loose">
          Experience the Power{" "}
          <span className="font-normal">of Our Platform</span>
        </h1>
        <p className="text-gray-50 tracking-wide">
          Start your free trial today and see the difference in your workflow.
        </p>
        <button 
        onClick={()=>navigate("/contact")}
        className="bg-purple-800 text-white text-sm font-semibold tracking-wider p-3 px-6 rounded-full hover:bg-customGreen transition-all duration-300 ">
          Start Free Trail
        </button>
        <img src={Man1} alt="man" className="hidden md:block absolute bottom-10 left-10 h-[160px] "/>
        <img src={Man2} alt="man" className="hidden md:block absolute bottom-10 right-10 h-[100px]  "/>
      </section>
    </div>
  );
}
