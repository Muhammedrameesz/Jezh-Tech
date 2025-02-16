import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import HoverButton from "../../ui/SwipeButton.jsx/Swipe1.jsx";
import mainBanner from "../../assets/CoreXImages/main-banner-bg-coreX.png";
import corexImage from "../../assets/CoreXImages/CorexLogo_bg_removed.png";

export default function CoreXHeader() {
  const onScroll = () => {
    const scrollAmount = window.innerHeight * 0.99;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  const sentence =
    "Streamline workflows, cut costs, and unlock efficiency with our all-in-one ERP Platform.";

  return (
    <div className="relative min-h-screen pt-10 md:pt-14 flex flex-col justify-center items-center  font-jakarta px-4 overflow-hidden">
      <section className="absolute grid grid-cols-4 top-1/2  ">
        <img
          src={corexImage}
          alt=""
          className="h-full w-full object-contain  opacity-20"
        />
        <img
          src={corexImage}
          alt=""
          className="h-full w-full object-contain  opacity-20"
        />
        <img
          src={corexImage}
          alt=""
          className="h-full w-full object-contain  opacity-20"
        />
        <img
          src={corexImage}
          alt=""
          className="h-full w-full object-contain  opacity-20"
        />
      </section>
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={mainBanner} alt="" />
      </div>
      {/* <Patterns/> */}
      <div className="relative z-10  max-w-5xl mt-20 md:mt-24   p-10 rounded-lg gap-5 ">
        <section className="mt-10  text-center">
          <Anim key="anim-header">
            <div className="flex flex-col gap-2 mb-8">
            <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-customBlue ">
            Transformative ERP Solutions 
            </span>
            <span className="text-3xl md:text-4xl lg:text-6xl  text-customBlue font-medium">For Seamless Operations</span>
            </div>
          </Anim>

          <motion.div
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 1,
                },
              },
            }}
          >
            {sentence.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block font-montserrat"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <Anim key="anim-button" delay={3}>
            <div onClick={onScroll}>
              <HoverButton>Know More</HoverButton>
            </div>
          </Anim>
        </section>

        {/* <section 
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(null)}
        className="relative p-4 border border-red-400  max-w-[300px] max-h-[300px]">
          <motion.div
          initial={{width:0}}
          animate={hover ?{width:"100%",backgroundColor:'#0dc936'}:{width:0}}
          transition={{duration:0.3}}
          className="absolute w-full h-full left-0 top-0  -z-10"
          ></motion.div>
          <img src={corexImage} alt="coreX Logo" />
        </section> */}
      </div>
    </div>
  );
}
