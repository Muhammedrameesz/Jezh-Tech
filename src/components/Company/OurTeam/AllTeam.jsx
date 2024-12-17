import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Anim from "../../../ui/Anim.jsx";

const IconStyle =
  "h-4 w-4 cursor-pointer text-green-500 hover:text-violet-700 transform hover:-translate-y-2 transition-all duration-500";
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
];

export default function AllTeam() {
  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-36">
        Meet Our Team
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {content?.map((data, i) => (
          <>
          
            <div
              key={i}
              className="relative mb-32 flex flex-col items-center text-center bg-white rounded-lg shadow-md  hover:shadow-2xl group transition-shadow duration-500"
            >

                <div className="absolute h-[100px] -top-28 w-full bg-white group-hover:pb-10"/>
              {/* Image Section */}
              
                <img
                  src={data.image}
                  alt={data.title}
                  className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] object-cover rounded-full"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div> */}
              

              {/* Content Section */}
              <div className="p-6 mt-10">
                <h3 className="text-xl font-semibold text-gray-800">
                  {data.title}
                </h3>
                <p className="text-sm text-green-500 font-medium mb-3">
                  {data.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{data.description}</p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4">
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
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
}
