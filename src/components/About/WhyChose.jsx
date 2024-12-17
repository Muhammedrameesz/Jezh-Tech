import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../ui/Aceternity/Card3d.jsx";
import Content from "./WhychooseContent";
import AnimZF from "../../ui/AnimZF.jsx";
import Anim from "../../ui/Anim.jsx"


const My3DCard = () => {
  return (
    <>
      
       

        <div className="flex flex-col pt-20 items-center justify-center space-x-4">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <Anim>
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
              Why Choose Us?
            </h1>
          </Anim>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 p-6">
        {Content &&
          Content.map((item, i) => {
            return (
              
                <CardContainer key={i} containerClassName="h-full w-full ">
                  <CardBody className="bg-white border  font-poppins rounded-lg shadow-lg hover:shadow-2xl p-6 w-72 h-96">
                    {" "}
                    {/* Set custom width and height */}
                    <CardItem
                      translateX={10}
                      translateY={20}
                      translateZ={50}
                      rotateX={10}
                      rotateY={10}
                      className="flex flex-col items-center h-full"
                    >
                      <AnimZF delay={i*0.3}>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-56 h-44 mb-8 rounded-lg object-cover " 
                      />
                      </AnimZF>
                      <AnimZF delay={i*0.3}>
                      <div className="flex flex-col items-start ">
                        <h1 className="text-lg font-semibold mb-2 text-center text-gray-700">
                          {item.title}
                        </h1>
                        <p className="text-gray-700 text-sm leading-5">{item.text}</p>
                      </div>
                      </AnimZF>
                    </CardItem>
                  </CardBody>
                </CardContainer>
            );
          })}
      </div>
    </>
  );
};

export default My3DCard;
