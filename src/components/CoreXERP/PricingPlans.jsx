import { IoMdCheckmark } from "react-icons/io";
import {useNavigate} from "react-router-dom"

export default function PricingPlans() {
  const navigate = useNavigate()

  const iconStyle = "text-customGreen text-xl";
  return (
    <div className="font-jakarta pt-10 bg-white">
      <section className="flex flex-col justify-center items-center text-center gap-4 mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-customBlue font-medium">
          Simple <span className="font-bold">Pricing,</span> Tailored for
          Your Needs
        </h1>
        <p className="text-base text-gray-500">
          Choose the plan that works for you and get started today!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-8 
         px-4 md:px-10 py-5 md:py-10 w-full max-w-screen-xl mx-auto">
        {/* Card 1  */}

        <div className=" min-h-[750px] border p-8 rounded-3xl bg-gradient-to-bl from-green-50 via-white to-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h1 className="text-xl md:text-2xl text-gray-800 font-bold mb-6 tracking-wide">
          Standard
          </h1>
          <h5 className="mb-3 text-gray-500 text-sm uppercase tracking-wide">
            Starts at
          </h5>
          <h1 className="font-bold text-5xl md:text-6xl mb-4 text-gray-800">
            $30{" "}
            <span className="font-normal text-base text-gray-500">
              per month/user
            </span>
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
          This plan is ideal for small businesses and startups seeking a streamlined solution.  Manage your core operations with ease, from accounting and inventory to CRM and reporting.
          </p>
          <button
            className="border rounded-full my-6 flex justify-center items-center py-3 px-6 w-full
               hover:bg-customGreen hover:text-white text-customGreen font-semibold transition-colors duration-300 ease-in-out shadow-md"
          >
            Get Started
          </button>
          <span className="w-full h-[1px] bg-gray-300 my-6"></span>
          <h1 className="mb-4 text-gray-800 font-bold text-lg">
            Free, forever
          </h1>

          <div className="space-y-4">
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> 1 user
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Unlimited calendars
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Unlimited event types
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Workflows
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Integrate with your
              favorite app
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Accept payments via
              Stripe
            </h1>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="border min-h-[750px] p-8 rounded-3xl bg-gradient-to-bl from-red-50 via-white to-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h1 className="text-xl md:text-2xl text-gray-800 font-bold mb-6 tracking-wide">
          Professional
          </h1>
          <h5 className="mb-3 text-gray-500 text-sm uppercase tracking-wide">
            Starts at
          </h5>
          <h1 className="font-bold text-5xl md:text-6xl mb-4 text-gray-800">
            $65{" "}
            <span className="font-normal text-base text-gray-500">
              per month/user
            </span>
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
          In this plan, we have enhanced features for growing businesses.
          Empower your teams with advanced tools and automation.  Streamline workflows, improve collaboration, and gain deeper insights into your business performance.
          </p>
          <button
            className="border rounded-full my-6 flex bg-customGreen text-white justify-center items-center py-3 px-6 w-full
               hover:bg-white hover:text-customGreen font-semibold transition-colors duration-300 ease-in-out shadow-md"
          >
            Get Started
          </button>
          <span className="w-full h-[1px] bg-gray-300 my-6"></span>
          <h1 className="mb-4 text-gray-800 font-bold text-lg">
            Free, forever
          </h1>

          <div className="space-y-4">
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> 1 user
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Unlimited calendars
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Unlimited event types
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Workflows
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Integrate with your
              favorite app
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Accept payments via
              Stripe
            </h1>
          </div>
        </div>

        {/* CARD 3  */}
        <div  className="min-h-[750px] border p-8 rounded-3xl bg-gradient-to-bl from-blue-50 via-white to-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h1 className="text-xl md:text-2xl text-gray-800 font-bold mb-6 tracking-wide">
            Enterprice
          </h1>
          {/* <h5 className="mb-3 text-gray-500 text-sm uppercase tracking-wide">
            Starts at
          </h5>
          <h1 className="font-bold text-5xl md:text-6xl mb-4 text-gray-800">
            $15{" "}
            <span className="font-normal text-base text-gray-500">
              per month/user
            </span>
          </h1> */}
          <p className="text-gray-600 mb-6 leading-relaxed">
          Optimize Your Enterprise with CoreX.Comprehensive solutions for large organizations.Tailored for complex business needs, providing maximum control, scalability, and performance.  Gain enterprise-grade security, advanced analytics, and dedicated support for seamless integration and optimization.
          </p>
          <button
          onClick={()=>navigate("/contact")}
            className="border rounded-full my-6 flex justify-center items-center py-3 px-6 w-full
               hover:bg-customGreen hover:text-white text-customGreen font-semibold transition-colors duration-300 ease-in-out shadow-md"
          >
            Contact Us
          </button>
          <span className="w-full h-[1px] bg-gray-300 my-6"></span>
          <h1 className="mb-4 text-gray-800 font-bold text-lg">
            Free, forever
          </h1>

          <div className="space-y-4">
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> 1 user
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Unlimited calendars
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Unlimited event types
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Workflows
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Integrate with your
              favorite app
            </h1>
            <h1 className="flex gap-3 items-center text-gray-600">
              <IoMdCheckmark className={`${iconStyle}`} /> Accept payments via
              Stripe
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
