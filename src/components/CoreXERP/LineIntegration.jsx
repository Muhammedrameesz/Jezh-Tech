import Line from "../../assets/CoreXImages/integrations-line.png";

import Jezh from "../../assets/JezhLogo/[removal.ai]_c1169356-884f-45c3-b5bd-0ce584a16d48-jezhblk.png";
import BoobaTaxi from "../../assets/partners/BoobaTaxi.jpeg";
import Enyard from "../../assets/partners/Enyard new.png";
import Goyaka from "../../assets/partners/Goyaka.png";
import lagoon from "../../assets/partners/lagoon logo.png";
import UaeCh from "../../assets/partners/UAE Chauffeur.png";
import Witblox from "../../assets/partners/Witblox.png";

export default function LineIntegration() {
  const imageArray = [Jezh, BoobaTaxi, Enyard, Goyaka, lagoon, UaeCh, Witblox];

  return (
    <div className="pb-20 font-jost">
      <section className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-customBlue">
          Effortlessly Collaborate with{" "}
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-customBlue">
          Our Trusted<span className="font-semibold"> Partners</span>
        </h1>
        <p className="text-base text-gray-500 max-w-2xl text-center mt-2">
          Discover our esteemed partners dedicated to delivering innovative
          solutions, ensuring seamless support and success for your business
          goals.
        </p>
      </section>

      <section className="hidden lg:block relative mx-5 md:mx-16 mt-5 md:mt-10 lg:mt-16 ">
        <img src={Line} alt="Lines" />

        {/* Sub Images  */}
        <img
          src={Jezh}
          alt="jezhLogo"
          className="relative md:absolute w-40 h-40 top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#dff7df] rounded-full"
        />

        <img
          src={BoobaTaxi}
          alt=""
          className="relative md:absolute w-20 h-20 top-[0%] left-[23%] -translate-x-1/2 -translate-y-1/2 rounded-full object-contain bg-[#ffeaf5] p-2"
        />
        <img
          src={Enyard}
          alt=""
          className="relative md:absolute w-24 h-24 bottom-[-33%] left-[23%] -translate-x-1/2 -translate-y-1/2 rounded-full object-contain bg-[#ffeaf5] p-2"
        />
        <img
          src={Goyaka}
          alt=""
          className="relative md:absolute w-24 h-24 bottom-[10%] left-[-0%] -translate-x-1/2 -translate-y-1/2 rounded-full object-contain bg-[#dee0ff] p-2"
        />

        <img
          src={lagoon}
          alt=""
          className="relative md:absolute w-24 h-24 top-[-32%] right-[23%] translate-x-1/2 translate-y-1/2 rounded-full object-contain bg-[#ffeaf5] p-2"
        />
        <img
          src={Witblox}
          alt=""
          className="relative md:absolute w-24 h-24 bottom-[2%] right-[23%] translate-x-1/2 translate-y-1/2 rounded-full object-contain bg-[#ffeaf5] p-2"
        />
        <img
          src={UaeCh}
          alt=""
          className="relative md:absolute w-24 h-24 bottom-[45%] right-[-0%] translate-x-1/2 translate-y-1/2 rounded-full object-contain bg-[#dee0ff] p-2"
        />
      </section>

      <div className="flex items-center justify-center py-10">
        <section className="grid lg:hidden grid-cols-2 justify-center items-center gap-10">
          {imageArray?.map((item, i) => (
            <img
              key={i}
              src={item}
              alt="images"
              className="w-[150px] h-[150px] md:w-[150 md:h-[150px]"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
