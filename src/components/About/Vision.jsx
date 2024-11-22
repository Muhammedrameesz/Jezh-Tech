import VisionImage from "../../assets/icons/Core.png";
import MissionImage from "../../assets/icons/cpu_1104950.png";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";

export default function VisionMission() {
  return (
    <div className="bg-black py-12 px-6 max-h-screen mx-6 md:mx-12 lg:mx-20">
      <div className="text-center mb-12">
        <AnimZF>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Empowering Innovation: Our Vision and Mission
          </h1>
        </AnimZF>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center space-y-6 md:space-y-0 md:space-x-12">
        <Anim>
          <div className=" space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <img
                src={VisionImage}
                alt="Vision Icon"
                className="w-8 h-8 mr-3"
              />
              Vision
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              To be a leader in driving digital transformation by delivering
              innovative, user-centric technology solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              To empower businesses and individuals with accessible,
              cutting-edge technology that shapes a smarter, more efficient
              future.
            </p>
          </div>
        </Anim>
        <AnimRL>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <img
                src={MissionImage}
                alt="Mission Icon"
                className="w-8 h-8 mr-3"
              />
              Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To simplify complex processes by creating intuitive and efficient
              tech solutions that enhance productivity and growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              To foster a collaborative environment where creativity,
              reliability, and excellence drive every project we undertake.
            </p>
          </div>
        </AnimRL>
      </div>
    </div>
  );
}
