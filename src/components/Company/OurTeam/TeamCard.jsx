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
  "h-4 w-4 cursor-pointer text-violet-500 hover:text-green-500 transform hover:-translate-y-1 transition-all duration-500";
const testimonials = [
 
  {
    name: "Shabin",
    designation: "CEO & Founder",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    src:Team3,
  },
  {
    name: "Jinu Martin",
    designation: "Director",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    src:Team2,
  },
  {
    name: "Arshitha",
    designation: "HOP",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    src:Team4,
  },
  {
    name: "Sai Srikanth",
    designation: "COO",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    src:Sai,
 },
  {
    name: "Mithun Shaker",
    designation: "Tech Lead",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    src:Midhun,
  },
];

const MyComponent = () => {

  return (
    <div className="py-20 font-poppins bg-gray-100">
      <div className="flex flex-col pb-10 md:pb-20 items-center justify-center space-x-4">
        
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
              Meet Our Leaders
            </h1>
            <Underline/>
          
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg leading-6">
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
