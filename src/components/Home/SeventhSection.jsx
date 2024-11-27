import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import Success1 from "../../assets/icons/success.png";
import Client from "../../assets/images/Binumon.png";
import AnimTB from "../../ui/AnimTB.jsx";
import AnimBT from "../../ui/AnimBT.jsx";
import JezhLogo from "../../assets/images/jezhLogo.png";
import HoverButton from "../../ui/HoverButton.jsx";


export default function SeventhSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.section
      className="px-6 md:px-12 lg:px-20 py-16 mt-10 bg-white font-poppins"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 gap-16 items-center relative">
          <AnimTB>
            <motion.div
              className="relative group w-full"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-row items-center justify-center space-x-4 ">
                <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-extrabold text-black ">
                  Success Stories Straight from Our Clients
                </h2>
                <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
              </div>
              <img
                src="https://img.freepik.com/premium-photo/business-handshake-finance-prosperity-money-technology-asset-background_31965-59921.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"
                alt="Success Story 1"
                className="relative md:absolute  max-w-lg z-10 mt-10 md:mt-52   "
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
              <div className="space-y-4 mt-5 ml:0 lg:ml-56">
                <div className=" px-10 rounded-xl py-10 relative ">
                  <span className="absolute top-0 left-0 h-[100%] w-[5px] bg-black rounded-lg "></span>
                  <span className="absolute top-0 left-0 w-[92%] h-[5px] bg-black rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 h-[95%] w-[5px] bg-black rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 w-[100%] h-[5px] bg-black rounded-lg"></span>
                 
                    <img
                      src={JezhLogo}
                      alt="bird.jpg"
                      className="absolute -top-12 -right-8 w-20 h-20 "
                    />

                    <div className="pl-0 lg:pl-[40%]">
                  
                  <p className="text-green-800 text-sm  leading-relaxed tracking-tight italic mb-6">
                    “I take great pride in the exceptional work undertaken by
                    the team on the Dakshin Sahodaya Schools Complex website.
                    Their expertise shines through, delivering a polished and
                    impactful online presence that truly showcases their skills.
                    The Electronic Voting Machine initiative led by the team has
                    been instrumental in fostering seamless and efficient
                    elections at both Adarsh Vidya Kendra and Rojavanam
                    International School has greatly enhanced the electoral
                    process. Jezh Technology’s Robo Fun initiative is leaving a
                    positive imprint by nurturing AI skills among students
                    across schools. Their commitment to fostering technological
                    literacy is evident, making a significant impact on the
                    landscape.”
                  </p>

                  <div className="flex items-center justify-between  p-4 rounded-lg hover:shadow-lg">
                    <div>
                      <p className="text-lg font-bold text-black">
                        Binumon V R
                      </p>
                      <span className="text-gray-600 text-sm italic">
                        Senior Principal
                      </span>
                    </div>
                    <img
                      src={Client}
                      alt="Profile"
                      className="h-20 w-20 rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out"
                    />
                  </div>
                  </div>

                  <motion.div
                    className="pt-4 flex justify-end items-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  >
                    <span className="mt-10">
                      <HoverButton>Explore More Stories</HoverButton>
                    </span>
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
