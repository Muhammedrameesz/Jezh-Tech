import VisionImage from "../../assets/icons/Core.png";
import MissionImage from "../../assets/icons/cpu_1104950.png";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function VisionMission() {
  return (
    <div className="font-poppins  py-12  bg-gray-100 px-12 md:px-20 lg:px-28 rounded-lg  mb-10 mt-20">
      <div className="text-center mb-12">
        <AnimZF>
          <h1 className="text-4xl md:text-5xl mb-5 tracking-tight font-extrabold text-black ">
            Empowering Innovation: Our Vision and Mission
          </h1>
        </AnimZF>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center space-y-6 md:space-y-0 md:space-x-12">
        <Anim>
          <div className=" space-y-6 border-[5px] border-black p-5">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <img
                src={VisionImage}
                alt="Vision Icon"
                className="w-10 h-10 mr-3 bg-gray-900 rounded-lg"
              />
              Vision
            </h2>

            <div className="flex flex-row gap-3">
              <ArrowForwardRoundedIcon />
              <p className="text-base text-gray-800 leading-relaxed  font-semibold">
                To be a leader in driving digital transformation by delivering
                innovative, user-centric technology solutions.
              </p>
            </div>

            <div className="flex flex-row gap-3">
              <ArrowForwardRoundedIcon />
              <p className="text-base text-gray-800 leading-relaxed  font-semibold">
                To empower businesses and individuals with accessible,
                cutting-edge technology that shapes a smarter, more efficient
                future.
              </p>
            </div>
          </div>
        </Anim>
        <AnimRL>
          <div className="space-y-6 border-[5px] border-black p-5">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <img
                src={MissionImage}
                alt="Mission Icon"
                className="w-10 h-10 mr-3 bg-gray-900 rounded-lg"

              />
              Mission
            </h2>
            <div className="flex flex-row gap-3">
              <ArrowForwardRoundedIcon />

              <p className="text-base text-gray-800 leading-relaxed  font-semibold">
                To simplify complex processes by creating intuitive and
                efficient tech solutions that enhance productivity and growth.
              </p>
            </div>

            <div className="flex flex-row gap-3">
              <ArrowForwardRoundedIcon />

              <p className="text-base text-gray-800 leading-relaxed  font-semibold">
                To foster a collaborative environment where creativity,
                reliability, and excellence drive every project we undertake.
              </p>
            </div>
          </div>
        </AnimRL>
      </div>
    </div>
  );
}
