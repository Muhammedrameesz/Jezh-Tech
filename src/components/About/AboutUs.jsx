// import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const contentArray = [
  {
    title: "Our History",
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
    title: "Who We Are",
    icon: SettingsOutlinedIcon,
    description:
      "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white  py-20 font-poppins  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-20">
        <Anim>
          <section>
            <img
              src="https://startp-next.envytheme.com/_next/static/media/about4.b4b8d97a.png"
              alt=""
            />
          </section>
        </Anim>

        <AnimRL>
          <section className="mt-5 md:mt-14">
            <p className="bg-purple-300 w-fit py-1 px-2 rounded-3xl text-xs text-gray-500 mb-3">
              About Us
            </p>
            <h1 className="text-[#0E314C] text-start text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-2 ">
              Engaging New Audiences Through Smart Approach
            </h1>
            <div className="bg-gradient-to-tr from-customGreen to-transparent w-32 h-1 mb-5"></div>

            <p className="text-sm text-gray-500 leading-6 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-gray-500 leading-6">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
              sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
              augue velit cursus nunc.Donec vitae sapien ut libero venenatis
              faucibus tempus.
            </p>
          </section>
        </AnimRL>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center mx-10 md:mx-20 gap-5 mt-8">
        {contentArray?.map((data, i) => (
          <Anim key={i} delay={i * 0.2}>
            <div className="flex flex-col gap-3 group bg-gradient-to-tl from-gray-50 to-transparent p-2 rounded-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-row gap-2">
                <data.icon
                  className={`rounded-full p-1 
                         ${i === 0 && "bg-green-200 text-green-500 group-hover:bg-green-500 group-hover:text-white"}
                         ${i === 1 && "bg-violet-200 text-violet-500 group-hover:bg-violet-500 group-hover:text-white"}
                         ${i === 2 && "bg-orange-200 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"}
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
