
import ANim from "../../../../ui/Anim.jsx";
import Pattern from "../../../../ui/RandomPatterns3.jsx"
import Background from "../../../../assets/image2/background/banner-bg1.jpg"

import useSoftwareProductsDetails from "../../../../store/SoftwareProduct"
import { useEffect } from "react";

function Header() {
    const productsDetails = useSoftwareProductsDetails((state)=>state.softwareProductsDetails)
    useEffect(()=>{
        console.log(productsDetails);
    },[productsDetails])

  return (
    <div 
    className="relative py-20 flex flex-col justify-center items-center gap-10 font-poppins  overflow-hidden mt-10 md:mt-20">
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Pattern/>
      <div className="flex flex-col items-center justify-center p-6 gap-6 mt-20 text-neutral-900  ">
        <ANim>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold ">
           {productsDetails.title}
          </h1>
        </ANim>
      </div>
    </div>
  );
}

export default Header;


