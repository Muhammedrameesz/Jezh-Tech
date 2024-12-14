import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";

export default function Service() {
  return (
    <div className="">
      <div className="flex items-center justify-center mt-20 mb-10 space-x-4 ">
        <div className="h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></div>
        <h1 className="text-center text-3xl sm:text-4xl  font-extrabold text-[#0E314C] dark:text-white">
          Industries We Serve
        </h1>
        <div className="h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></div>
      </div>
      <div className=" flex justify-center items-center bg-white mx-5 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {/* Card 1 */}

          <Anim delay={0.4}>
            <div className="bg-white h-[350px] md:h-[400px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-green-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-green-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <HomeWorkOutlinedIcon className="text-green-700 text-lg " />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-300 cursor-pointer hover:underline">
                  Home & Industrial Automation
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">
                  Need a smarter space? We’ve got the tech! JEZH Technologies
                  specializes in IoT automation that makes homes smarter and
                  industries more efficient. From boosting security to
                  automating daily tasks, we create solutions that simplify life
                  and streamline operations.
                </p>
              </div>
            </div>
          </Anim>
          {/* Card 2 */}
          <Anim delay={0.6}>
            <div className="bg-white h-[350px] md:h-[400px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-blue-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-blue-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <LanguageOutlinedIcon className="text-blue-700 text-lg " />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-300 cursor-pointer hover:underline">
                  Website Development & Digital Presence
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">
                  Need a powerful online presence? JEZH Technologies specializes
                  in designing and developing custom websites that are not only
                  visually engaging but also optimized for user experience and
                  functionality. We make sure your site is ready to engage and
                  convert visitors seamlessly.
                </p>
              </div>
            </div>
          </Anim>
          {/* Card 3 */}
          <AnimRL delay={0.4}>
            <div className="bg-white h-[350px] md:h-[400px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-rose-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-rose-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <ViewAgendaOutlinedIcon className="text-rose-700 text-lg " />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-300 cursor-pointer hover:underline">
                  Title
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe, repellendus. Dicta autem, nesciunt eligendi sequi
                  quibusdam distinctio voluptatibus omnis commodi ipsum debitis,
                  necessitatibus in consequuntur qui dignissimos! Tempora,
                  pariatur quas?
                </p>
              </div>
            </div>
          </AnimRL>
          {/* Card 4 */}
          <AnimRL delay={0.6}>
            <div className="bg-white h-[350px] md:h-[400px] hover:bg-gradient-to-tl  from-customGreen to-green-500 rounded-lg border border-dashed border-amber-200 hover:border-none font-poppins group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-amber-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <CodeOutlinedIcon className="text-amber-700 text-lg " />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-300 cursor-pointer hover:underline">
                  Title
                </h2>

                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora nemo officia sapiente est ab molestias ea dolore,
                  fugiat cumque, et, possimus sit vel maiores repellendus minus?
                  Deserunt a facere placeat!
                </p>
              </div>
            </div>
          </AnimRL>
        </div>
      </div>
    </div>
  );
}
