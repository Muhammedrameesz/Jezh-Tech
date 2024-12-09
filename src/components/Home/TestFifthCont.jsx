import { FifthContent } from "./fifthSectionContent";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../ui/Aceternity/Card3d.jsx";

export default function TestFifthCont() {
  return (
    <div className="font-poppins min-h-screen overflow-hidden">
      <div className="flex flex-row items-center justify-center space-x-4">
        <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-b from-customGreen to-transparent"></span>
        <h1 className="text-black text-center text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight  mb-4 ">
          Why Choose Us?
        </h1>
        <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-20 gap-10 justify-center items-center  ">
        {FifthContent &&
          FifthContent.map((item, i) => (
            <CardContainer key={i} >
              <CardBody className=" relative bg-white rounded-lg hover:shadow-2xl p-6">


                <span className="absolute left-0 top-0 h-[100%] w-[5px] bg-black"></span>
                <span className="absolute left-0 top-0 w-[35%] h-[5px] bg-black"></span>
                <span className="absolute left-0 bottom-0 w-[100%] h-[5px] bg-black"></span>
                <span className="absolute right-0 bottom-0 h-[100%] w-[5px] bg-black"></span>
                <span className="absolute right-0 top-0 w-[35%] h-[5px] bg-black"></span>

                <div className="absolute top-0  left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full  flex items-center justify-center  shadow-lg">
                  <img src={item.icon} alt={item.title} className="h-12 w-12" />
                </div>

                <CardItem
                  translateX={10}
                  translateY={20}
                  translateZ={50}
                  rotateX={10}
                  rotateY={10}
                  className="flex flex-col  h-full justify-center pt-14 pb-6 px-4"
                >
                  {/* <img
                    src={item.image}
                    alt="image"
                    className="w-64 h-36 mb-5 mt-5"
                  /> */}
                  <div className="flex gap-4 mb-4">
                    <img src={item.icon} alt="icon" className="h-8 w-8 " />
                    <h1 className="font-bold text-lg md:text-xl">
                      {item.title}
                    </h1>
                  </div>
                  <p className="max-w-xs text-[15px] leading-snug text-neutral-600">
                    {item.text}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
      </div>
    </div>
  );
}
