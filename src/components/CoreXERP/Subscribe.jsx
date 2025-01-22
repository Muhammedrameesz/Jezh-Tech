import { useState } from "react";
import Man3 from "../../assets/CoreXImages/man3.png";
import { toast } from "react-toastify";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!agree) {
      toast.error("You must agree to the privacy policy.");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
    setAgree(false);
  };
  return (
    <div className="py-10 flex flex-col justify-center items-center font-jost bg-white ">
      <section className="relative p-16 px-20 md:px-28 lg:px-36 bg-[#7e05ff] grid grid-cols-1 gap-5 md:gap-10 lg:gap-16 md:grid-cols-2 rounded-3xl">
        <div className="flex flex-col text-white text-3xl md:text-4xl">
          <span className="font-semibold">
            Subscribe <span className="font-normal"> to our</span>
          </span>{" "}
          <span>newsletter for the latest</span>{" "}
          <span>updates & insights!</span>
        </div>

        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative md:absolute top-5 w-full p-5 pr-20 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500 active:border-green-500"
          />
          <button
            onClick={handleSubscribe}
            className="absolute top-8 right-2 bg-customGreen text-white px-6 py-3 rounded-full hover:bg-[#7e05ff] focus:outline-none transition-colors duration-300 text-sm font-semibold"
          >
            Subscribe
          </button>

          <div className="relative md:absolute flex gap-3 right-5 bottom-0 text-white text-sm mt-10 md:mt-0 ml-10 md:ml-0">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="w-4 h-4 text-green-500 focus:ring-green-500 focus:ring-2 border-gray-300 rounded-md checked:bg-green-500"
            />

            <span>I agree with the privacy policy</span>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={Man3}
            alt="man"
            className="absolute h-[120px] left-[48%] -translate-x-1/2 bottom-10"
          />
        </div>
      </section>
    </div>
  );
}
