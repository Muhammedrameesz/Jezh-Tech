import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../ui/Aceternity/Card3d.jsx";
import Content from "./WhychooseContent";
import AnimZF from "../../ui/AnimZF.jsx";


const My3DCard = () => {
  return (
    <>
      <AnimZF>
        <div className="flex flex-row pt-20 items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-b from-customGreen to-transparent"></span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl  text-center font-extrabold text-black">
            Why Choose Us
          </h1>

          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>
      </AnimZF>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 p-6">
        {Content &&
          Content.slice(0, 4).map((item, i) => {
            return (
              
                <CardContainer key={i} containerClassName="h-full w-full ">
                  <CardBody className="bg-white rounded-lg hover:shadow-2xl p-6 w-72 h-96">
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
                        className="w-full h-44 mb-8 rounded-lg" // Adjust image size
                      />
                      </AnimZF>
                      <AnimZF delay={i*0.3}>
                      <div className="flex flex-col items-start ">
                        <h1 className="text-xl font-bold mb-2 text-center">
                          {item.title}
                        </h1>
                        <p className="text-gray-600 ">{item.text}</p>
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
