export default function Pricing() {
  return (
    <div className="font-jost pt-14 pb-5">
      <section className="flex flex-col justify-center items-center text-center gap-4 mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-customBlue">
          Simple <span className="font-semibold">Pricing,</span> Tailored for
          Your Needs
        </h1>
        <p className="text-base text-gray-500">
          Choose the plan that works for you and get started today!
        </p>
      </section>

      <section>
        <div className="overflow-x-auto p-4 ">
          <table className="min-w-full border-collapse border-x  border-gray-300">
            <thead>
              <tr className="bg-[#dff7df] text-left  font-semibold text-xl ">
                <th className="p-4 border-b border-r border-gray-300">Plan</th>
                <th className="p-4 border-b border-r border-gray-300">Basic</th>
                <th className="p-4 border-b border-r border-gray-300 bg-[#dff7df] text-center font-bold">
                  Pro{" "}
                  <span className="text-xs font-light text-green-500">
                    (Most Popular)
                  </span>
                </th>
                <th className="p-4 border-b border-gray-300">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Price Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r  font-semibold border-gray-300">
                  Price
                </td>
                <td className="p-4 border-b border-r border-r-customBlue text-gray-500 border-gray-300">
                  $10/month
                </td>
                <td className="p-4 border-r border-r-customBlue text-center text-gray-500 bg-[#dff7df]">
                  $30/month
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  $100/month
                </td>
              </tr>
              {/* Team Members Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r font-semibold  border-gray-300">
                  Team Members
                </td>
                <td className="p-4 border-b border-r border-r-customBlue text-gray-500 border-gray-300">
                  5
                </td>
                <td className="p-4 border-r text-center border-r-customBlue text-gray-500 bg-[#dff7df]">
                  50
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  Unlimited
                </td>
              </tr>
              {/* Storage Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r font-semibold border-gray-300">
                  Storage
                </td>
                <td className="p-4 border-b border-r border-r-customBlue text-gray-500 border-gray-300">
                  10GB
                </td>
                <td className="p-4 border-r text-center border-r-customBlue text-gray-500 bg-[#dff7df]">
                  100GB
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  1TB
                </td>
              </tr>
              {/* Support Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r font-semibold border-gray-300">
                  Support
                </td>
                <td className="p-4 border-b border-r border-r-customBlue text-gray-500 border-gray-300">
                  Email
                </td>
                <td className="p-4 border-r border-r-customBlue text-center text-gray-500 bg-[#dff7df]">
                  Email + Chat
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  24/7 Dedicated Support
                </td>
              </tr>
              {/* Analytics Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r font-semibold border-gray-300">
                  Analytics
                </td>
                <td className="p-4 border-b border-r border-r-customBlue text-gray-500 border-gray-300">
                  Basic Reports
                </td>
                <td className="p-4 border-r text-center border-r-customBlue text-gray-500 bg-[#dff7df]">
                  Advanced Insights
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  Custom Reports
                </td>
              </tr>
              {/* Integrations Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r  font-semibold border-gray-300">
                  Integrations
                </td>
                <td className="p-4 border-b border-r border-r-customBlue text-gray-500 border-gray-300">
                  Limited
                </td>
                <td className="p-4 border-r text-center border-r-customBlue text-gray-500 bg-[#dff7df]">
                  Extensive
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  All Apps
                </td>
              </tr>
              {/* Account Manager Row */}
              <tr className="text-base">
                <td className="p-4 border-b border-r font-semibold border-gray-300">
                  Account Manager
                </td>
                <td className="p-4 border-b text-gray-500 border-r border-r-customBlue border-gray-300">
                  No
                </td>
                <td className="p-4 border-r text-gray-500 text-center border-r-customBlue bg-[#dff7df]">
                  Yes
                </td>
                <td className="p-4 border-b text-gray-500 border-gray-300">
                  Yes
                </td>
              </tr>
              {/* Customization Row */}
              <tr className="text-base">
                <td className="p-4 border-b font-semibold border-r">
                  Customization
                </td>
                <td className="p-4 border-b text-gray-500 border-r border-r-customBlue">No</td>
                <td className="p-4  border-r text-gray-500 text-center border-r-customBlue bg-[#dff7df]">
                  Limited
                </td>
                <td className="p-4 border-b text-gray-500 ">Full</td>
              </tr>
              {/* Get Started Buttons for Basic, Pro, and Enterprise */}
              <tr className="text-base">
                <td className="p-4 border-b border-r">
                  <button className="opacity-0">Get Started</button>
                </td>
                <td className="p-4 border-b border-r border-r-customBlue">
                  <button className="rounded-full border p-2 px-6 font-semibold text-gray-800 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                    Get Started
                  </button>
                </td>
                <td className="p-4  border-r text-center border-r-customBlue bg-[#dff7df]">
                  <button className="rounded-full bg-customGreen border p-2 px-6 font-semibold text-white border-customGreen hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300">
                    Get Started
                  </button>
                </td>
                <td className="p-4 border-b ">
                  {" "}
                  <button className="rounded-full border p-2 px-6 font-semibold text-gray-800 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                    Get Started
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

         <div className="flex justify-center items-center text-center mt-5">
            <h1 className="text-sm text-gray-500">Pick a plan that matches your goals. No hidden fees, cancel anytime.</h1>
         </div>
    </div>
  );
}
