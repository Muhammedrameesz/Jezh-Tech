import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import ContactImage from "../../assets/images/rb_2147837418.png";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-customWhite pb-20 font-jost">
    <div className="   items-center justify-center  px-4 font-jost grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-gray-800 text-2xl font-semibold">
          Think Big, Act Smart & Scale Fast with Lagoon
        </h1>
        <p className="text-gray-600 text-base">
          Do You Have Any Particular Questions? We&apos;re here to help.
        </p>
        <h1 className="text-gray-800 text-2xl font-semibold">
          Just Shoot us an email.
        </h1>
        <p className="text-gray-600 text-base">
          Jezh Technologies stands as an industry-leading AI-driven No-code
          Platform and IoT development Company that provides one-stop solutions
          for your business uplift. Knowing your requirements, our technical
          expert will schedule a call and discuss your idea in detail. All
          information will be kept confidential.{" "}
        </p>
        <div className="flex items-center justify-center">
          <img
            src={ContactImage}
            alt="image"
            className="h-[400px] w-[400px] "
          />
        </div>
        <h1 className="text-gray-800 text-2xl font-semibold">
          Interested in Crystal-Clear Products? Talk to our sales team.
        </h1>
        <p className="text-gray-600 text-base">
          Whether you have inquiries regarding pricing or are interested in
          scheduling one-on-one personalized demonstrations, we’re here to
          connect with you and assist in getting you started.{" "}
        </p>
      </div>


      <div className="w-full max-w-3xl bg-customWhite shadow-custom rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Fill this form to Signup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <div className="relative">
              <AiOutlineUser className="absolute top-3 left-3 text-gray-400 text-xl" />
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="pl-10 bg-customWhite py-3 block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Your Phone
            </label>
            <div className="relative">
              <AiOutlinePhone className="absolute top-3 left-3 text-gray-400 text-xl" />
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be a valid 10-digit number",
                  },
                })}
                className="pl-10 bg-customWhite py-3 block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
                placeholder="Enter your phone number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <div className="relative">
              <AiOutlineMail className="absolute top-3 left-3 text-gray-400 text-xl" />
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email must be valid",
                  },
                })}
                className="pl-10 bg-customWhite py-3 block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Services Field */}
          <div>
            <label
              htmlFor="services"
              className="block text-sm font-medium text-gray-700"
            >
              Services
            </label>
            <select
              id="services"
              {...register("services", { required: "Please select a service" })}
              className="pl-10 bg-customWhite py-3 block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
            >
              <option value="" className="text-gray-800">
                Select a service
              </option>
              <option
                value="Website design and development"
                className="text-gray-800"
              >
                Website design and development
              </option>
              <option
                value="Mobile application development"
                className="text-gray-800"
              >
                Mobile application development
              </option>
              <option
                value="Digital marketing service"
                className="text-gray-800"
              >
                Digital marketing service
              </option>
              <option value="Graphic design service" className="text-gray-800">
                Graphic design service
              </option>
            </select>
            {errors.services && (
              <p className="text-red-500 text-sm mt-1">
                {errors.services.message}
              </p>
            )}
          </div>

          {/* Products Field */}
          <div>
            <label
              htmlFor="products"
              className="block bg-customWhite text-sm font-medium text-gray-700"
            >
              Products
            </label>
            <select
              id="products"
              {...register("products", { required: "Please select a product" })}
              className="pl-10 py-3 bg-customWhite block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
            >
              <option value="" className="text-gray-800">
                Select a product
              </option>
              <option value="Time Tick" className="text-gray-800">
                Time Tick
              </option>
              <option value="Custom Developed ERP" className="text-gray-800">
                Custom Developed ERP
              </option>
              <option value="Atoll HRMS" className="text-gray-800">
                Atoll HRMS
              </option>
              <option value="Trackoon GPS" className="text-gray-800">
                Trackoon GPS
              </option>
            </select>
            {errors.products && (
              <p className="text-red-500 text-sm mt-1">
                {errors.products.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className="pl-10 bg-customWhite py-3 block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
              placeholder="Enter subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="pl-10 bg-customWhite py-3 block w-full rounded-lg border border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition duration-200"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="w-fit p-2 px-7 text-white font-semibold bg-customGreen rounded-lg shadow-md transform hover:bg-lime-500 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
