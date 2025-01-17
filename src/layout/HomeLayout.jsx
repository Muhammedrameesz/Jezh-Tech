import { Outlet } from "react-router-dom";
import HomeNav from "../navBar/HomeNav";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer.jsx"
import { useEffect } from "react";
import SecurityFeatures from "../SecurityFeatures.jsx";

export default function HomeLayout() {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <>
        <SecurityFeatures/>
        <ScrollToTop />
        <HomeNav />
        <Outlet />
        <Footer/>
    </>
  );
}
