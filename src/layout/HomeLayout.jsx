import { Outlet } from "react-router-dom";
import HomeNav from "../navBar/HomeNav";
import ScrollToTop from "../components/ScrollToTop";
// import SmoothScroll from "../components/SmoothScroll.jsx";
import Footer from "../components/Footer.jsx"

export default function HomeLayout() {
  return (
    <>
      {/* <SmoothScroll> */}
        <ScrollToTop />
        <HomeNav />
        <Outlet />
        <Footer/>
      {/* </SmoothScroll> */}
    </>
  );
}
