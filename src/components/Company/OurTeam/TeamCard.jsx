import { CiFacebook } from "react-icons/ci";
import { AnimatedTestimonials } from "../../../ui/Aceternity/Testimonial.jsx";
import Anim from "../../../ui/Anim.jsx";
import Underline from "../../../ui/Underline.jsx"
import { FiTwitter } from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";


import Team2 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.13 PM.jpeg"
import Team3 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.49 PM.jpeg"
import Team4 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.47.59 PM.jpeg"
import Sai from "../../../assets/Team/WhatsApp Image 2024-12-30 at 9.04.19 PM.jpeg"
import Midhun from "../../../assets/Team/WhatsApp Image 2024-12-30 at 9.04.32 PM.jpeg"

const IconStyle =
  "h-4 w-4 cursor-pointer text-purple-500 hover:text-green-500 transform hover:-translate-y-1 transition-all duration-500";
const testimonials = [
 
  {
    name: "Shabin",
    designation: "Founder & CEO",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Shabin is the driving force behind Jezh Technologies, leading with vision, innovation, and a commitment to excellence in technology and business growth.",
    src:Team3,
  },
  {
    name: "Jinu Martin",
    designation: "Director & CTO",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Jinu Martin is instrumental in shaping Jezh Technologies' overall direction, bringing strategic expertise, leadership, and a commitment to driving growth and innovation.",
    src:Team2,
  },
  {
    name: "Arshitha",
    designation: "Head of Operation",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Arshitha plays a key role at Jezh Technologies, ensuring smooth processes, efficient management, and a steadfast commitment to operational excellence and growth.",
    src:Team4,
  },
  {
    name: "Sai Srikanth",
    designation: "Chief Operating Officer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Sai Srikanth leads with a focus on operational excellence, driving efficiency, innovation, and seamless execution across all functions at Jezh Technologies for optimal results.",
    src:Sai,
 },
  {
    name: "Mithun Shaker",
    designation: "Technical Lead",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Mithun is the mastermind behind our cutting-edge solutions, combining technical expertise, innovative thinking, and a passion for excellence in delivering top-tier technology.",
    src:Midhun,
  },
];

const MyComponent = () => {

  return (
    <div className="py-20 font-jost bg-white">
      <div className="flex flex-col pb-10 md:pb-20 items-center justify-center space-x-4">
        
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
              Meet Our Leaders
            </h1>
            <Underline/>
          
        <Anim delay={0.4}>
          <p className="text-base text-gray-500 text-center max-w-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default MyComponent;
