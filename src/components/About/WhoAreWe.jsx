// import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Underline from "../../ui/Underline.jsx";

const contentArray = [
  {
    title: "Our Story",
    icon: SettingsOutlinedIcon,
    description:
      "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
  },
  {
    title: "Our Mission",
    icon: SettingsOutlinedIcon,
    description:
      "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
  },
  {
    title: "Our Vission",
    icon: SettingsOutlinedIcon,
    description:
      "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-50  py-20 font-jost  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-20">
        <Anim>
          <section className="mt-5 md:mt-20">
            <p className="bg-purple-300 w-fit py-1 px-2 rounded-3xl text-xs text-gray-500 mb-3">
              Who We Are?
            </p>
            <h1 className="text-[#0E314C] text-start text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-5 ">
              Serving Since 2021
            </h1>
            <Underline/>

            <p className="text-sm text-gray-500 leading-6 mb-4">
              Jezh Technologies is a forward-thinking company focused on
              delivering innovative tech solutions. We specialize in smart IoT
              and AI-powered applications that simplify processes and help
              businesses thrive in a digital world.
            </p>
            <p className="text-sm text-gray-500 leading-6">
              Our team is committed to creating user-friendly, efficient
              technology that drives success. We work closely with clients to
              deliver tailored solutions that meet their unique needs. At Jezh
              Technologies, we are more than just a provider—we’re a trusted
              partner shaping the future of technology.
            </p>
          </section>
        </Anim>

        <AnimRL>
          <section>
            <img
              src="https://startp-next.envytheme.com/_next/static/media/about-one.15a914b7.png"
              alt=""
            />
          </section>
        </AnimRL>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center mx-10 md:mx-20 gap-5 mt-10 md:mt-20">
        {contentArray?.map((data, i) => (
          <Anim key={i} delay={i * 0.2}>
            <div className="flex flex-col gap-3 group bg-white p-2 rounded-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-row gap-2">
                <data.icon
                  className={`rounded-full p-1 
                         ${i === 0 && "bg-red-200 text-red-500 group-hover:bg-red-500 group-hover:text-white"}
                         ${i === 1 && "bg-lime-200 text-lime-500 group-hover:bg-lime-500 group-hover:text-white"}
                         ${i === 2 && "bg-blue-200 text-blue-500 group-hover:bg-blue-500 group-hover:text-white"}

                         `}
                  style={{ fontSize: 26, transition: "all 0.6s " }} // Use `style` for inline font size
                />

                <h1 className="text-[#0E314C] text-lg font-semibold">
                  {data.title}
                </h1>
              </div>
              <p className="text-gray-500 text-sm leading-6">
                {data.description}
              </p>
            </div>
          </Anim>
        ))}
      </div>
    </div>
  );
}
