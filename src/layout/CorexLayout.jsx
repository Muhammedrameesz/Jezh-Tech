import { Outlet } from "react-router-dom";
import CoreXNav from "../navBar/CorexNav.jsx";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer.jsx"
import { useEffect } from "react";

export default function HomeLayout() {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <>
        <ScrollToTop />
        <CoreXNav />
        <Outlet />
        <Footer/>
    </>
  );
}
