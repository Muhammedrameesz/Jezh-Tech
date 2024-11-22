import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";

export default function Header() {
  return (
    <div
      className="relative top-14 flex flex-col  justify-center min-h-screen items-center font-poppins  px-4"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149197765.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center max-w-xl mt-0">
        <Anim>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-300 mb-8">
            About Us
          </h1>
        </Anim>

        <AnimRL>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Trust us to simplify tech and drive success.
          </p>
        </AnimRL>
        <AnimZF>
          <button className="bg-customGreen text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-customGreen">
            Contact Us Now
          </button>
        </AnimZF>
      </div>
    </div>
  );
}
