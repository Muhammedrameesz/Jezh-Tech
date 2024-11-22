import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Success1 from "../../assets/icons/success.png";
import bird from "../../assets/icons/rb_1741.png";
import Client from "../../assets/images/Binumon.png";
import AnimTB from "../../ui/AnimTB.jsx"
import AnimBT from "../../ui/AnimBT.jsx"

export default function SeventhSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.section
      className="px-6 md:px-12 lg:px-20 py-16 bg-black font-poppins"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimTB>
          <motion.div
            className="relative group w-full"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-row items-center justify-center space-x-4">
              <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
              <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-customGreen via-white to-customGreen tracking-tighter">
                Success Stories Straight from Our Clients
              </h2>
              <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
            </div>
            <img
              src={Success1}
              alt="Success Story 1"
              className="w-full max-w-md rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          </AnimTB>

          <AnimBT>
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 mt-10">
              <div className=" px-10 rounded-xl py-10 relative">
                <span className="absolute top-0 left-0 h-[92%] w-1 bg-customGreen rounded-lg mt-1 "></span>
                <span className="absolute top-0 left-0 w-[70%] h-1 bg-customGreen rounded-lg ml-1"></span>
                <span className="absolute bottom-0 right-0 h-[92%] w-1 bg-customGreen rounded-lg mb-1"></span>
                <span className="absolute bottom-0 right-0 w-[70%] h-1 bg-customGreen rounded-lg mr-1"></span>
                <img
                  src={bird}
                  alt="bird.jpg"
                  className="absolute -top-10 -right-10 w-24 h-24"
                />
                <p className="text-gray-300 text-sm  leading-relaxed tracking-tight italic mb-6">
                  “I take great pride in the exceptional work undertaken by the
                  team on the Dakshin Sahodaya Schools Complex website. Their
                  expertise shines through, delivering a polished and impactful
                  online presence that truly showcases their skills. The
                  Electronic Voting Machine initiative led by the team has been
                  instrumental in fostering seamless and efficient elections at
                  both Adarsh Vidya Kendra and Rojavanam International School
                  has greatly enhanced the electoral process. Jezh Technology’s
                  Robo Fun initiative is leaving a positive imprint by nurturing
                  AI skills among students across schools. Their commitment to
                  fostering technological literacy is evident, making a
                  significant impact on the landscape.”
                </p>

                <div className="flex items-center justify-between  p-4 rounded-lg shadow-lg">
                  <div>
                    <p className="text-lg font-bold text-white">Binumon V R</p>
                    <span className="text-gray-400 text-sm italic">
                      Senior Principal
                    </span>
                  </div>
                  <img
                    src={Client}
                    alt="Profile"
                    className="h-20 w-20 rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out"
                  />
                </div>

                <motion.div
                  className="pt-4 flex justify-end items-end"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                >
                  <button className="px-3 mt-10 py-2 text-base bg-customGreen border-2 border-customGreen text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-black hover:text-white  hover:border-white transition duration-300 ">
                    Explore More Stories
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
          </AnimBT>
        </div>
      </div>
    </motion.section>
  );
}
