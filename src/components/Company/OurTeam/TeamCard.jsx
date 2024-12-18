import { AnimatedTestimonials } from "../../../ui/Aceternity/Testimonial.jsx";
import Anim from "../../../ui/Anim.jsx";

const MyComponent = () => {
  const testimonials = [
    {
      src: "https://img.freepik.com/free-photo/3d-render-little-boy-with-laptop-tools_1057-44642.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      name: "John Doe",
      designation: "Software Engineer",
      quote: "This is the best service I have ever used!",
    },
    {
      src: "https://img.freepik.com/free-photo/3d-illustration-cartoon-man-with-computer-various-objects_1057-46388.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      name: "Jane Smith",
      designation: "Product Manager",
      quote: "An excellent experience from start to finish!",
    },
    {
      src: "https://img.freepik.com/free-photo/portrait-man-christmas-celebrations_23-2150936477.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      name: "Samuel Green",
      designation: "UX Designer",
      quote: "Highly recommended for anyone looking to improve their workflow.",
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-boy-playing-piano_23-2150898665.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      name: "Alex Bruno",
      designation: "UX Designer",
      quote: "Highly recommended for anyone looking to improve their workflow.",
    },
    {
      src: "https://img.freepik.com/free-photo/fun-man-with-laptop-sitting-spaceship-3d-rendering_1057-44735.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      name: " John Samuel ",
      designation: "UX Designer",
      quote: "Highly recommended for anyone looking to improve their workflow.",
    },
  ];

  return (
    <div className="py-20 font-poppins bg-gray-100">
      <div className="flex flex-col pb-10 md:pb-20 items-center justify-center space-x-4">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <Anim>
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
              Meet Our Leaders
            </h1>
          </Anim>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
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
