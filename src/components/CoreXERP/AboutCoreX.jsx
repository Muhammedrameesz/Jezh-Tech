import HoverButton from "../../ui/SwipeButton.jsx/Swipe1.jsx";

export default function AboutCoreX() {
  const contents = [
    {
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Seamless Integration",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="relative bg-purple-400 min-h-screen py-16">
      <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto p-6 space-y-4">
        <span className="p-2 px-6 shadow-xl rounded-full bg-purple-500 text-white text-sm">
          About CoreX ERP
        </span>
        <h1 className="text-2xl  leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span className="font-semibold">Cupiditate sequi</span> tenetur nulla iste optio doloremque
          culpa nesciunt, sapiente libero nostrum dignissimos, minima quod nemo
          voluptatem rem. Aspernatur cum unde quod.
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-lg p-6 max-w-lg w-full flex flex-col items-start text-start transform 
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

      <div className="flex items-center justify-center py-5 mt-4">
        <HoverButton>More ABout Us</HoverButton>
      </div>
    </div>
  );
}
