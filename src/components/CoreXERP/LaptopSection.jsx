import { useEffect, useState } from "react";
import Laptop from "../../assets/CoreXImages/corex dashboard-.png";
import Books from "../../assets/CoreXImages/booksSet.png";
// import { IoPlay } from "react-icons/io5";
// import Dashboardimage from "../../assets/CoreXImages/Dashbaord-1-2048x1515.png";

export default function LaptopSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // const handlePlayButtonClick = () => {
  //   setIsVideoPlaying(true);
  // };

  // const handleCloseVideo = () => {
  //   setIsVideoPlaying(false);
  // };

  // useEffect(() => {
  //   if (isVideoPlaying) {
  //     // Disable scrolling when video is open
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Re-enable scrolling when video is closed
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isVideoPlaying]);

  return (
    <div className="pt-5 pb-20 font-jakarta">
      <section className="relative mx-10 md:mx-20">
        {/* Background Books Image */}
        <img
          src={Books}
          alt="books"
          className="hidden md:block md:absolute md:-right-10 md:bottom-10 md:h-[170px] z-10"
        />

        {/* Laptop Image and Play Button */}
        <div className="relative ">
          <img src={Laptop} alt="laptop" className="w-full h-full" />
          {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
            <IoPlay
              className="bg-customGreen text-5xl md:text-8xl rounded-full p-4 cursor-pointer hover:bg-[#FF0000] transition-colors duration-200"
              onClick={handlePlayButtonClick}
            />
          </div> */}
        </div>

        {/* Rotated Text */}
        <div className="relative mt-5 lg:absolute lg:-left-[170px] lg:top-[280px] lg:-rotate-90 z-10">
          <span className="text-customGreen text-xl font-semibold">
            More Efficiency,{" "}
          </span>
          <span className="text-purple-500 text-xl font-semibold">
            Better Decisions,{" "}
          </span>
          <span className="text-customGreen text-xl font-semibold">
            Reduced Costs..{" "}
          </span>
        </div>
      </section>

      {isVideoPlaying && (
        <>
        </>
        // <div
        //   style={{ zIndex: 1000 }}
        //   className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
        // >
        //   {/* Close Button */}
        //   <button
        //     className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
        //     onClick={handleCloseVideo}
        //     aria-label="Close Video"
        //   >
        //     &times;
        //   </button>

        //   {/* Image */}
        //   <img
        //     src={Dashboardimage}
        //     alt="Dashboard preview"
        //     className="w-full h-full object-contain"
        //   />
        // </div>
      )}
    </div>
  );
}
