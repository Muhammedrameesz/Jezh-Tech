import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Anim from "../../../ui/Anim.jsx";
import { useState} from "react";

import Underline from "../../../ui/Underline.jsx";
import Team1 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.04.04 PM.jpeg";
import Team2 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.13 PM.jpeg";
import Team3 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.49 PM.jpeg";
import Team4 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.47.59 PM.jpeg";
import Sai from "../../../assets/Team/WhatsApp Image 2024-12-30 at 9.04.19 PM.jpeg";
import Midhun from "../../../assets/Team/WhatsApp Image 2024-12-30 at 9.04.32 PM.jpeg";

import SreeParvathy from "../../../assets/Team/Sree Parvathy.jpeg"
import GopiKrishna from "../../../assets/Team/Gopi-Krishna.jpeg"
import Niksha from "../../../assets/Team/Niksha.jpeg"
import Smrithy from "../../../assets/Team/Smirthy.jpeg"
import GiftyMol from "../../../assets/Team/GiftyMol.jpeg"
import VishnuNarayanan from "../../../assets/Team/Vishnu Narayanan.jpeg"
import Subash from "../../../assets/Team/Subash.jpeg"
import Anish from "../../../assets/Team/Anish.jpeg"
import KeerthyVasan from "../../../assets/Team/Keerthi Vasan.jpeg"
 import Ramees from "../../../assets/Team/Ramees.jpeg"
import Neeraj from "../../../assets/Team/Neeraj.jpeg"


const IconStyle =
  "h-4 w-4 cursor-pointer text-violet-500 hover:text-green-500 transform hover:-translate-y-1 transition-all duration-500";
const content = [
  {
    title: "Shabin",
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
    image: Team3,
  },
  {
    title: "Jinu Martin",
    role: "Director",
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
    image: Team2,
  },
  
  {
    title: "Arshitha",
    role: "HOP",
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
    image: Team4,
  },
  {
    title: "Mahesh",
    role: "Full Stack developer",
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
    image: Team1,
  },
  {
    title: "Sai Srikanth",
    role: "COO",
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
    image:Sai,
 },
  {
    title: "Mithun Shaker",
    role: "Tech Lead",
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
    image:Midhun,
  },
  
  {
    title: "Dharani",
    role: " Graphic Designer",
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
    title: "Sree Parvathi",
    role: "Content Writer",
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
    image:SreeParvathy,
      
  },
  {
    title: "Gopi Krishna",
    role: "Cyber Security",
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
    image:GopiKrishna,
  },
  {
    title: "Niksha",
    role: "IOT Research Assistant -Intern",
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
    image:Niksha,
  },
  {
    title: "Smirthy",
    role: "IOT Research Assistant -Intern",
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
    image:Smrithy,
  },
  {
    title: "GiftyMol",
    role: "Digital Marketer - Intern",
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
    image:GiftyMol,
  },
  {
    title: "Vishnu Narayanan",
    role: "Digital Marketer - Intern",
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
    image:VishnuNarayanan,
  },
  {
    title: "Muhammed Ramees Khan",
    role: "Full stack developer - Intern",
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
    image:Ramees,
  },
  {
    title: "Keerthi Vasan",
    role: "No Code developer - Intern",
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
    image:KeerthyVasan,
  },
  {
    title: "Subash",
    role: "No Code developer - Intern",
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
    image:Subash,
  },
  {
    title: "Anish",
    role: "No Code developer - Intern",
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
    image:Anish,
  },
  {
    title: "Neeraj",
    role: "No Code developer - Intern",
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
    image:Neeraj,
  },
];

export default function AllTeam() {
  const [hover, setHover] = useState(null);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickNext();
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-customWhite py-20 font-jost">
      <Anim>
        <div className="flex flex-col pb-10 md:pb-20 items-center justify-center">
          <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
            Meet Our Team
          </h1>
          <Underline />

          <p className="text-base text-gray-500 text-center max-w-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Anim>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 md:mx-10">
        {content.map((data, i) => (
          <div key={i} className="flex justify-center">
            <motion.div
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="relative flex flex-col items-center text-center shadow-md bg-gradient-to-tr from-white to-white rounded-lg group p-6 hover:shadow-custom transition-shadow duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <motion.div
                className="absolute top-28 w-full bg-customWhite"
                initial={{ opacity: 1, height: "10px" }}
                animate={{
                  opacity: hover === i ? 0 : 1,
                  height: hover === i ? 0 : "10px",
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7 }}
              />
              <motion.img
                src={data.image}
                alt={data.title}
                className="w-[130px] h-[130px] z-10 object-cover mt-4 rounded-full border-2 border-customGreen/40 group-hover:border-customGreen transition-all duration-500"
                transition={{ duration: 0.3 }}
              />
              <div className="mt-6 bg-gradient-to-t from-green-500 to-customGreen py-2 w-full rounded-3xl group-hover:rounded-none transition-all duration-700">
                <h3 className="text-base tracking-wider font-semibold text-white">
                  {data.title}
                </h3>
                <p className="text-xs text-white">{data.role}</p>
              </div>

              <div className="flex justify-center space-x-4 mt-4 ">
                {data.media.map((icon, idx) => (
                  <span
                    key={idx}
                    className="text-customGreen text-lg flex items-center gap-4"
                  >
                    {Object.values(icon)}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-sm mt-4">{data.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

  
    </div>
  );
}
