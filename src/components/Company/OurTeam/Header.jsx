// import { GoogleGeminiEffect } from "../../../ui/Aceternity/Gemini.jsx";
import AnimatedButton from "../../../ui/HoverButton.jsx"

function App() {
  // const pathLengths = [0.3, 0.5, 0.8, 0.9, 0.6];

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center gap-10 font-poppins bg-neutral-100">
      {/* <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Our Team"
        description="Our team is a dynamic, collaborative group focused on innovation, excellence, and continuous learning in a supportive and inclusive environment."
        className="my-custom-class"
      /> */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold ">Our Team</h1>
      <p className="max-w-3xl text-center text-neutral-700">
        Our team is a dynamic, collaborative group focused on innovation,
        excellence, and continuous learning in a supportive and inclusive
        environment.
      </p>
      <AnimatedButton>Know More</AnimatedButton>
    </div>
  );
}

export default App;
