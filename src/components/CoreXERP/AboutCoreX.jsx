import { useNavigate } from "react-router-dom";
import HoverButton from "../../ui/SwipeButton.jsx/Swipe1.jsx";

export default function AboutCoreX() {
  const navigate = useNavigate();
  const contents = [
    {
      title: "Seamless Integration",
      description:
        "CoreX offers seamless integration capabilities, allowing it to connect with various third-party applications and systems. This eliminates the need for manual data entry and reduces the risk of errors. Whether it's connecting with your accounting software, CRM, e-commerce platform, or any other business tool, CoreX streamlines your workflows and ensures data consistency across all platforms.",
    },
    {
      title: "Advanced Analytics and Reporting",
      description:
        "CoreX provides robust analytics and reporting tools that give you a comprehensive view of your business performance. With interactive dashboards and customizable reports, you can gain insights into key metrics such as sales trends, inventory levels, customer behavior, and financial performance. This data-driven approach empowers you to make informed decisions and optimize your business operations.",
    },
  ];

  return (
    <div className="relative bg-[#ada8f0] min-h-screen py-16 font-jost">
      <div className="absolute w-[50%] h-[95%] bg-[#b5b1f2] backdrop-blur-3xl top-5 rounded-full left-1/3 -translate-x-1/3 border border-[#c8c5e9]"></div>
      <div className="absolute w-[50%] h-[95%] bg-[#b5b1f2] backdrop-blur-3xl top-5 rounded-full right-1/3 translate-x-1/3 border border-[#c8c5e9] "></div>

      <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto p-6 space-y-4 ">
        <span className="p-2 px-6 shadow-xl rounded-full bg-[#a6a1ee] text-white text-sm z-10">
          About CoreX ERP
        </span>
        <h1 className="text-2xl md:text-3xl  leading-relaxed text-gray-700 z-10">
          Simplify operations with <span className="font-semibold">CoreX,</span>  our all-in-one ERP software. <span className="font-semibold mr-1">CoreX</span>  
          integrates essential business functions like accounting, inventory,
          CRM,HRM,and project management, giving you a unified view of your
          organization and boosting efficiency.
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6 z-10">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-3xl p-6 max-w-lg w-full flex flex-col items-start text-start transform 
                hover:-translate-y-2 transition-transform duration-500
                ${index === 0 && "bg-[#dff7df]"}     ${index === 1 && "bg-[#fff6ea]"} 
                `}
          >
            <h2 className="text-2xl font-semibold text-customBlue mb-4">
              {content.title}
            </h2>
            <p className="text-gray-500">{content.description}</p>
          </div>
        ))}
      </div>

      <div
        onClick={() => navigate("/about-us")}
        className="flex items-center justify-center py-5 mt-4"
      >
        <HoverButton>More ABout Us</HoverButton>
      </div>
    </div>
  );
}
