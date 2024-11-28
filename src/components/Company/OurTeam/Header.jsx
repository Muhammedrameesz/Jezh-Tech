import { GoogleGeminiEffect } from "../../../ui/Aceternity/Gemini.jsx";

function App() {
  const pathLengths = [0.3, 0.5, 0.8, 0.9, 0.6];

  return (
    <div className="mt-20 ">
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Our Team"
        description="Our team is a dynamic, collaborative group focused on innovation, excellence, and continuous learning in a supportive and inclusive environment."
        className="my-custom-class"
      />
    </div>
  );
}

export default App;
