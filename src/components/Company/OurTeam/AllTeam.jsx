import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AnimBT from "../../../ui/AnimBT.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import Anim from "../../../ui/Anim.jsx";
import Underline from "../../../ui/Underline.jsx";

const IconStyle =
  "h-5 w-5 cursor-pointer text-violet-500 hover:text-gray-700 transform hover:-translate-y-2 transition-all duration-500";
const content = [
  {
    title: "Name",
    role: "CEO & Founder",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    image:
      "https://img.freepik.com/premium-photo/3d-rendering-teenager-with-laptop-his-hands-surrounded-by-robots_1057-42934.jpg?w=740",
  },
  {
    title: "Name",
    role: "Project Manager",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    image:
      "https://img.freepik.com/free-photo/view-3d-woman-using-laptop_23-2150710060.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Name",
    role: "Web Developer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    image:
      "https://img.freepik.com/free-photo/3d-render-little-boy-with-laptop-tools_1057-44642.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Name",
    role: "UI/UX Designer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    image:
      "https://img.freepik.com/free-photo/view-3d-girl-with-open-book_23-2150709876.jpg?t=st=1734178498~exp=1734182098~hmac=27401588a48d99bad9a7a4dda02ef1f7e3a2986fe11656a8b853bf7d8b7ff801&w=740",
  },
  {
    title: "Name",
    role: "UI/UX Designer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    image:
      "https://img.freepik.com/free-photo/3d-portrait-people_23-2150793856.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Name",
    role: "UI/UX Designer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    image:
      "https://img.freepik.com/free-photo/view-3d-man-using-laptop_23-2150709796.jpg?t=st=1734533673~exp=1734537273~hmac=1e290ff0f1ea4d1db8d72fd1c4ec1a75a63c7a91a5327c8865252d7c72f7fa7a&w=740",
  },
];

export default function AllTeam() {
  const [hover, setHover] = useState(null);
  return (
    <div className="bg-purple-100 py-20 font-poppins">
      <div className="flex flex-col pb-10 md:pb-20 items-center justify-center space-x-4">
        <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
          Meet Our Team
        </h1>
        <Underline />

        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {content?.map((data, i) => (
          <AnimBT key={i} delay={0.2 * i}>
            <motion.div
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="relative  flex flex-col items-center text-center bg-gradient-to-tr from-white to-white rounded-lg group p-6 hover:shadow-2xl transition-shadow duration-500  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <motion.div
                className="absolute top-28 w-full bg-purple-100 "
                initial={{ opacity: 1, height: "10px" }}
                animate={{
                  opacity: hover === i ? 0 : 1,
                  height: hover === i ? 0 : "10px",
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7 }}
              />

              {/* Image Section */}
              <motion.img
                src={data.image}
                alt={data.title}
                className=" w-[130px] h-[130px] z-10 object-cover mt-4 rounded-full border-2 border-green-200 group-hover:border-green-500 transition-all duration-500"
                // whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Section */}
              <div className="p-6 ">
                <div className=" mb-6 bg-custom-gradient py-2 px-16 rounded-3xl group-hover:rounded-none transition-all duration-700">
                  <h3 className="text-base tracking-wider font-semibold text-white">
                    {data.title}
                  </h3>
                  <p className="text-xs text-white">
                    {data.role}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mb-5">
                  {data.media.map((icon, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 transition-transform duration-300"
                    >
                      {icon.Linkidin}
                      {icon.Twitter}
                      {icon.faceBook}
                      {icon.github}
                    </div>
                  ))}
                </div>

                <p className="text-gray-500 text-sm mt-4">
                  {data.description}
                </p>
              </div>
            </motion.div>
          </AnimBT>
        ))}
      </section>
    </div>
  );
}
