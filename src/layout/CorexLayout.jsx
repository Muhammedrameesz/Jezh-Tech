import { Outlet } from "react-router-dom";
import CoreXNav from "../navBar/CorexNav.jsx";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";
import SecurityFeatures from "../SecurityFeatures.jsx";
import { IoLogoWhatsapp } from "react-icons/io";

export default function HomeLayout() {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <>
      <SecurityFeatures />
      <ScrollToTop />
      <CoreXNav />
      <div
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=9385722102&text&type=phone_number&app_absent=0",
            "_blank"
          )
        }
        className="fixed bottom-5 right-5 cursor-pointer z-50 text-3xl bg-white p-2 shadow-2xl hover:shadow-custom transition-all duration-300 rounded-full text-green-500"
      >
        <IoLogoWhatsapp className="" />
      </div>

      <Outlet />
      <Footer />
    </>
  );
}
