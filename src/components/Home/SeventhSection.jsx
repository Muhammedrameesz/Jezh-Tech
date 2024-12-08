import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
      className="px-4 md:px-8 lg:px-16 py-12 mt-8 bg-white font-poppins"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 justify-center lg:justify-start mb-10">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-black text-center">
            Success Stories Straight from Our Clients
          </h2>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
        <div className="grid gap-16 items-center lg:grid-cols-2 relative">
          {/* Left Section */}
          <AnimTB>
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center text-center space-y-6 lg:items-center lg:text-left">
                <img
                  src="https://img.freepik.com/free-photo/business-background-design_1156-861.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"
                  alt="Success Story 1"
                  className="max-w-full w-[500px] h-[500px] rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </AnimTB>

          {/* Right Section */}
          <AnimBT>
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="relative px-4 md:px-8 lg:px-12 py-10 bg-neutral-50 rounded-xl shadow-lg">
                  {/* Border lines */}
                  {/* <span className="absolute top-0 left-0 h-full w-1 bg-black rounded-lg"></span> */}
                  <span className="absolute top-0 left-0 w-[90%] h-1 bg-black rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 h-[95%] w-1 bg-black rounded-lg"></span>
                  <span className="absolute bottom-0 right-0 w-full h-1 bg-black rounded-lg"></span>

                  {/* Logo */}
                  <img
                    src={JezhLogo}
                    alt="Logo"
                    className="absolute -top-12 -right-8 w-16 h-16 md:w-20 md:h-20"
                  />

                  {/* Quote Section */}
                  <div className="">
                    <p className="text-green-800 text-sm leading-relaxed tracking-tight italic mb-6 bg-neutral-100 p-5 rounded-lg shadow-inner">
                      “I take great pride in the exceptional work undertaken by
                      the team on the Dakshin Sahodaya Schools Complex website.
                      Their expertise shines through, delivering a polished and
                      impactful online presence that truly showcases their
                      skills. The Electronic Voting Machine initiative led by
                      the team has been instrumental in fostering seamless and
                      efficient elections at both Adarsh Vidya Kendra and
                      Rojavanam International School. Jezh Technology’s Robo Fun
                      initiative is leaving a positive imprint by nurturing AI
                      skills among students across schools. Their commitment to
                      fostering technological literacy is evident, making a
                      significant impact on the landscape.”
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center justify-between space-x-4">
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
                        className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300"
                      />
                    </div>
                  </div>

                  {/* Explore More Button */}
                  <motion.div
                    className="pt-4 flex justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  >
                    <HoverButton>Explore More Stories</HoverButton>
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
