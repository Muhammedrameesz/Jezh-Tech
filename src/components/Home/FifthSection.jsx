import CustomerCen from "../../assets/icons/team-building.png";
import Deal from "../../assets/icons/tolerance.png";
import Innovation from "../../assets/icons/intelligence_11764993.png";
import AnimTB from "../../ui/AnimTB.jsx";
import AnimBT from "../../ui/AnimBT.jsx";


export default function FifthSection() {
  return (
    <div className="flex flex-col mt-20 items-center font-poppins px-6 py-16 bg-white mb-10">

      <div className="mb-10 text-center">
        <div className="flex items-center w-full">
          <div className="flex-grow h-1 bg-gradient-to-r from-customGreen to-transparent"></div>
          <AnimTB>
            <h1 className="mx-4 text-4xl md:text-5xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-customGreen via-black to-customGreen tracking-wide">
              Why Choose Us?
            </h1>
          </AnimTB>
          <div className="flex-grow h-1 bg-gradient-to-l from-customGreen to-transparent"></div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {[
          {
            icon: Deal,
            title: "Commitment to Quality",
            text: "Quality isn’t just a goal—it’s our standard. Our processes include rigorous quality checks to ensure that every solution we deliver meets the highest industry standards. You can trust us to get it right, every time.",
          },
          {
            icon: CustomerCen,
            title: "Client-Centric Approach",
            text: "Your satisfaction is our top priority. We believe in working as an extension of your team, maintaining open communication, and providing exceptional support at every step.",
          },
          {
            icon: Innovation,
            title: "Innovation at the Core",
            text: "We’re driven by technology and fueled by innovation. Our team is always exploring the latest advancements, ensuring that our clients benefit from cutting-edge solutions that are efficient, reliable, and future-ready.",
          },
        ].map((feature, index) => (
          <AnimBT key={index} delay={index * 0.3}>
            <div className="relative flex flex-col items-center p-8   bg-white transition-transform transform hover:-translate-y-4 hover:shadow-2xl duration-500">
              
               <span className="absolute left-0 top-0 h-[100%] w-[5px] bg-black"></span>
               <span className="absolute left-0 top-0 w-[35%] h-[5px] bg-black"></span>
               <span className="absolute left-0 bottom-0 w-[100%] h-[5px] bg-black"></span>
               <span className="absolute right-0 bottom-0 h-[100%] w-[5px] bg-black"></span>
               <span className="absolute right-0 top-0 w-[35%] h-[5px] bg-black"></span>

                <div className="absolute top-0  w-20 h-20 rounded-full  flex items-center justify-center -mt-12  shadow-lg">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-12 w-12"
                  />
                </div>
            
              <h2 className="text-2xl font-semibold text-gray-800 mb-4  text-center mt-7">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          </AnimBT>
        ))}
      </section>
    </div>
  );
}
