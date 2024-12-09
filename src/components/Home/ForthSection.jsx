
import Built from "../../assets/icons/sustainable-energy_10633778.png";
import Adaptable from "../../assets/icons/cpu_1104950.png";
import Digital from "../../assets/icons/intelligence_11764993.png";
import Anim from "../../ui/Anim.jsx";
import AnimatedImage from "./Animated-Images/AnimatedImages3.jsx"

export default function ForthSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-20 items-center pb-16 pt-20 px-6 pd:px-20 lg:px-24  font-poppins">
      <Anim>
      <div className="flex flex-col items-start space-y-8 p-4  lg:p-6 rounded-md  ">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <h1 className="text-black text-center text-xl md:text-xl lg:text-2xl font-extrabold leading-tight  mb-4 ">
            Customized Solutions for Every Business
          </h1>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>

        <div className="flex flex-col md:flex-row gap-5 ">
          <img
            src={Built}
            alt="Built.jpg"
            className="w-14 h-14  bg-gradient-to-b from-white to-gray-200 p-2 rounded-full"
          />

          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2 ">
              Built for Your Industry
            </h2>
            <p className="text-sm text-gray-600 tracking-normal ">
              Whether it&apos;s smart homes, e-commerce, healthcare, or
              manufacturing, we align our services to meet the specific needs of
              each industry
            </p>
          </div>
        </div>
        

        <div className="flex flex-col md:flex-row gap-5 ">
          <img
            src={Adaptable}
            alt="Adaptable.jpg"
            className="w-14 h-14 bg-gradient-to-b from-white to-gray-200 p-2 rounded-full"
          />

          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2 ">
              Adaptable & Scalable
            </h2>
            <p className="text-sm text-gray-600 tracking-normal">
              Our solutions grow with your business, with easy integration and
              scalability as your company evolves.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5  ">
          <img
            src={Digital}
            alt="Digital.jpg"
            className="w-14 h-14  bg-gradient-to-b from-white to-gray-200 p-2 rounded-full"
          />

          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold  text-gray-800 mb-2">
              Technology with a Personal Touch
            </h2>
            <p className="text-sm text-gray-600 tracking-normal">
              Our team is dedicated to understanding your business’s unique
              requirements and delivering solutions that resonate with your
              goals.
            </p>
          </div>
        </div>
      </div>
      </Anim>

        <div className=" mt-[30%] relative overflow-hidden  ">
          <div
            className="absolute inset-0 bg-no-repeat bg-right-top   ml-72 rotate-45   opacity-20"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/multicolor-squares-pattern-background_1195-312.jpg?uid=R121738979&ga=GA1.1.333942242.1728979190&semt=ais_hybrid)",
            }}
          ></div>
          <AnimatedImage/>
        </div>
    </div>
  );
}
