import { useEffect, useState } from "react";
import Laptop from "../../assets/CoreXImages/big-laptop.png";
import Books from "../../assets/CoreXImages/booksSet.png";
import { IoPlay } from "react-icons/io5";

export default function LaptopSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    if (isVideoPlaying) {
      // Disable scrolling when video is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when video is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoPlaying]);

  return (
    <div className="pt-5 pb-20 font-jost">
      <section className="relative mx-10 md:mx-20">
        {/* Background Books Image */}
        <img
          src={Books}
          alt="books"
          className="hidden md:block md:absolute md:-right-10 md:bottom-10 md:h-[170px] -z-10"
        />

        {/* Laptop Image and Play Button */}
        <div className="relative">
          <img src={Laptop} alt="laptop" className="w-full h-full z-0" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
            <IoPlay
              className="bg-customGreen text-5xl md:text-8xl rounded-full p-4 cursor-pointer hover:bg-[#FF0000] transition-colors duration-200"
              onClick={handlePlayButtonClick}
            />
          </div>
        </div>

        {/* Rotated Text */}
        <div className="relative mt-5 lg:absolute lg:-left-[150px] lg:top-[220px] lg:-rotate-90">
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
        <div
          style={{ zIndex: 1000 }}
          className="fixed inset-0 top-[0px] bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            onClick={handleCloseVideo}
          >
            &times;
          </button>
          <iframe
            width="80%"
            height="90%"
            src="https://www.youtube.com/embed/4yBxb5RQxPs?autoplay=1&controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}
