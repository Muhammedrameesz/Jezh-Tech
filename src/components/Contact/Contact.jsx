import Image from "../../assets/Contact/Contact us-pana.png";
import ContactForm from "../Contactform.jsx";
import Underline from "../../ui/Underline.jsx";

export default function Contact() {
  return (
    <div className="pb-10 pt-10 font-jakarta">
      <div className="flex flex-col justify-center items-center mx-10 mb-20">
        <h1 className="text-xl  md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
        Get In Touch With Us
        </h1>
        <Underline />

        <p className="text-md text-gray-500 text-center max-w-lg">
        Anything On your Mind. We’ll Be Glad To Assist You!
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mx-auto max-w-7xl gap-5">
        <section className="">
          <img src={Image} alt="image" className="h-auto w-full object-cover" />
        </section>
        <section>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
