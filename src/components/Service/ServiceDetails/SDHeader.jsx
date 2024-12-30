
import ANim from "../../../ui/Anim.jsx";
import Background from "../../../assets/image2/background/banner-bg1.jpg";
import Pattern from "../../../ui/RandomPatterns4.jsx"

function Header() {
 

  return (
    <div className="relative py-28 flex flex-col justify-center items-center gap-10 font-poppins  overflow-hidden">
      <div className="absolute w-full h-full -z-10">
        <img src={Background} alt="" />
      </div>
      <div></div>
      <Pattern/>
      <div className="flex flex-col items-center justify-center p-6 gap-6 mt-20 text-customBlue z-10 ">
        <ANim>
          <h1 className="text-2xl md:text-4xl  font-extrabold ">
           Services In Details
          </h1>
        </ANim>
        
      </div>
    </div>
  );
}

export default Header;
