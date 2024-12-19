import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import AnimBT from "../../ui/AnimBT.jsx";
import Underline from "../../ui/Underline.jsx";

export default function OurFeatures() {
  return (
    <section className="min-h-screen font-poppins bg-gray-100 pt-20 pb-10">
      <div className="flex flex-col justify-center items-center mx-10 ">
        <h1 className="text-xl  md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
          Our Features
        </h1>
        <Underline />

        <p className="text-sm text-gray-500 text-center max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-16 my-20 gap-8">
        <section className="flex flex-col items-center justify-center gap-5 ">
          <AnimBT>
            <div className="flex flex-col md:flex-row gap-5 bg-gray-50 rounded-lg p-5 group hover:bg-white hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-700">
              <span className="flex items-center justify-center bg-green-200 group-hover:bg-green-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <SettingsSuggestOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-green-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold w-fit text-gray-700 cursor-pointer hover:text-green-500">
                  Incredible Infrastructure
                </h1>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-gray-50 p-5 group hover:bg-white hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-700">
              <span className="flex items-center justify-center bg-fuchsia-200 group-hover:bg-fuchsia-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <DashboardOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-fuchsia-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>

              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                  Simple Dashboard
                </h1>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-gray-50 p-5 group hover:bg-white hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-700">
              <span className="flex items-center justify-center bg-orange-200 group-hover:bg-orange-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <ViewInArOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-orange-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                  Drag & Drop Functionality
                </h1>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </AnimBT>
        </section>

        <section className="flex flex-col items-center justify-center gap-5 ">
          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-gray-50 p-5 group hover:bg-white hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-700">
              <span className="flex items-center justify-center bg-green-200 group-hover:bg-green-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <EmailOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-green-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                  Email Notifications
                </h1>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-gray-50 p-5 group hover:bg-white hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-700">
              <span className="flex items-center justify-center bg-fuchsia-200 group-hover:bg-fuchsia-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <InfoOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-fuchsia-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                  Information Retrieval
                </h1>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-gray-50 p-5 group hover:bg-white hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-700">
              <span className="flex items-center justify-center bg-orange-200 group-hover:bg-orange-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <NotificationsNoneOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-orange-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                  Deadline Reminders
                </h1>
                <p className="text-sm text-gray-400 ">
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </AnimBT>
        </section>
      </div>
    </section>
  );
}
