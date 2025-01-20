import Laptop from "../../assets/CoreXImages/big-laptop.png"
import Books from "../../assets/CoreXImages/booksSet.png"
import { IoPlay } from "react-icons/io5";

export default function LaptopSection() {
  return (
    <div className="pt-5 pb-20 font-jost">
        <section className="relative mx-10 md:mx-20">
            <img src={Books} alt="books" className="hidden md:block md:absolute md:-right-10 md:bottom-10 md:h-[170px] -z-10"/>
            <div className="relative"> 
            <img src={Laptop} alt="laptop" className="w-full h-full z-0"/>
               <div className="absolute top-1/3 left-1/2 -translate-x-1/2 ">
                  <IoPlay className="bg-customGreen text-5xl md:text-8xl rounded-full p-4 cursor-pointer hover:bg-[#FF0000] transition-colors duration-200"/>
               </div>
            </div>
            <div className="relative mt-5 lg:absolute lg:-left-[150px] lg:top-[220px] lg:-rotate-90">
                <span className="text-customGreen text-xl font-semibold">More Efficiency,  </span>
                <span className="text-purple-500 text-xl font-semibold">Better Decisions,   </span>
                <span className="text-customGreen text-xl font-semibold">Reduced Costs..   </span>

            </div>
        </section>

    </div>
  )
}
