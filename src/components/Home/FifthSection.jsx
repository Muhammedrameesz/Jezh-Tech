import CustomerCen from "../../assets/icons/team-building.png";
import Deal from "../../assets/icons/tolerance.png";
import Innovation from "../../assets/icons/intelligence_11764993.png";
import AnimTB from "../../ui/AnimTB.jsx";
import AnimBT from "../../ui/AnimBT.jsx";

export default function FifthSection() {
  return (
    <div className="flex flex-col mt-20 items-center px-6 bg-gradient-to-t from-black  to-black py-16 font-helvetica">
      <div className="mb-10 text-center ">
        <div className="flex flex-col items-center">
          <div className="flex items-center w-full">
            <div className="flex-grow h-1 bg-gradient-to-r from-customGreen to-transparent"></div>
            <AnimTB>
              <h1 className="mx-4 text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-poppins ">
                Why Choose Us?
              </h1>
            </AnimTB>
            <div className="flex-grow h-1 bg-gradient-to-r from-customGreen to-transparent"></div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start justify-center w-full max-w-6xl mx-auto">
        <AnimBT>
          <div className="flex flex-col  rounded-xl shadow-2xl p-8 bg-gradient-to-br from-gray-50 to-gray-100 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border border-customGreen relative">
            <span className="absolute top-0 left-0 h-24 w-1 bg-customGreen rounded-lg mt-1 "></span>
            <span className="absolute top-0 left-0 w-24 h-1 bg-customGreen rounded-lg ml-1"></span>
            <span className="absolute bottom-0 right-0 h-24 w-1 bg-customGreen rounded-lg mb-1"></span>
            <span className="absolute bottom-0 right-0 w-24 h-1 bg-customGreen rounded-lg mr-1"></span>

            <span className="absolute right-0 top-0 h-1 w-20 "></span>

            <div className="flex items-center justify-center mb-3  ">
              <img src={Deal} alt="commitmentjpj" className="h-14 w-1h-14  " />
            </div>
            <h2 className="text-center text-2xl md:text-3xl lg:text-2xl font-extrabold text-slate-900 mb-6 ">
              Commitment to Quality
            </h2>
            <p className="text-base text-gray-700 leading-tight font-semibold tracking-tighter">
              Quality isn’t just a goal—it’s our standard. Our processes include
              rigorous quality checks to ensure that every solution we deliver
              meets the highest industry standards. You can trust us to get it
              right, every time.
            </p>
          </div>
        </AnimBT>

        <AnimBT delay={0.4}>
          <div className="flex flex-col  rounded-xl shadow-2xl p-8  transform transition-all duration-500 ease-in-out bg-gradient-to-br from-gray-50 to-gray-100 hover:scale-105 hover:shadow-2xl border border-customGreen relative">
            <div className="flex items-center justify-center mb-3">
              <span className="absolute bottom-0 left-0 h-24 w-1 bg-customGreen rounded-lg mb-1 "></span>
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-customGreen rounded-lg ml-1"></span>
              <span className="absolute top-0 right-0 h-24 w-1 bg-customGreen rounded-lg mt-1"></span>
              <span className="absolute top-0 right-0 w-24 h-1 bg-customGreen rounded-lg mr-1"></span>

              <img
                src={CustomerCen}
                alt="commitmentjpj"
                className="h-14 w-1h-14 "
              />
            </div>
            <h2 className="text-center text-2xl md:text-3xl lg:text-2xl font-extrabold text-slate-900 mb-6 ">
              Client-Centric Approach
            </h2>
            <p className="text-base text-gray-700 leading-tight font-semibold tracking-tighter">
              Your satisfaction is our top priority. We believe in working as an
              extension of your team, maintaining open communication, and
              providing exceptional support at every step.Stay informed and
              trust us to guide you every step of the way.
            </p>
          </div>
        </AnimBT>

        <AnimBT delay={0.6}>
          <div className="flex flex-col rounded-xl shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border border-customGreen relative">
            <div className="flex items-center justify-center mb-3">
              <span className="absolute top-0 left-0 h-24 w-1 bg-customGreen rounded-lg mt-1 "></span>
              <span className="absolute top-0 left-0 w-24 h-1 bg-customGreen rounded-lg ml-1"></span>
              <span className="absolute bottom-0 right-0 h-24 w-1 bg-customGreen rounded-lg mb-1"></span>
              <span className="absolute bottom-0 right-0 w-24 h-1 bg-customGreen rounded-lg mr-1"></span>

              <img
                src={Innovation}
                alt="commitmentjpj"
                className="h-14 w-1h-14  "
              />
            </div>
            <h2 className="text-center text-2xl md:text-3xl lg:text-2xl font-extrabold text-slate-900 mb-6 ">
              Innovation at the Core
            </h2>
            <p className="text-base text-gray-700 leading-tight font-semibold tracking-tighter">
              We’re driven by technology and fueled by innovation. Our team is
              always exploring the latest advancements, ensuring that our
              clients benefit from cutting-edge solutions that are efficient,
              reliable, and future-ready.
            </p>
          </div>
        </AnimBT>
      </section>
    </div>
  );
}
