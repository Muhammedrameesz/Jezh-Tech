import Laptop from "../../assets/CoreXImages/big-laptop.png";
import Timetick1 from "../../assets/image2/prducts/TimeTick.png";
import TimetickMobile from "../../assets/image2/prducts/TimeTickMobile.jpeg";

export const LaptopImage = () => {
  return (
    <div className="relative w-full h-full">
  <img
    src={Laptop}
    alt="Laptop"
    className="hidden md:block absolute top-0 left-0 w-full h-full z-10 "
  />
  <img
    src={Timetick1}
    alt="timetick1"
    className="relative md:absolute top-5 left-1/2 transform -translate-x-1/2 h-[200px] w-[250px] sm:h-[300px] sm:w-[350px] md:h-[450px] md:w-[330px] lg:h-[350px] lg:w-[425px] xl:h-[320] z-20 object-cover rounded-lg"
  />
</div>

  );
};

export const MobileImage = () => {
  return (
    <div className="relative w-full h-[500px]">
    <img
      src="https://img.freepik.com/premium-vector/smartphone-mockup-white-screen-mobile-phone-vector_1163725-2463.jpg?w=360"
      alt="Laptop"
      className="absolute top-0 left-0 w-full h-full z-10 object-contain"
    />
    <img
      src={TimetickMobile}
      alt="timetick1"
      className="absolute top-10 left-1/2 transform -translate-x-1/2 h-[90%] w-full z-20 object-contain"
    />
  </div>
  
  );
};
