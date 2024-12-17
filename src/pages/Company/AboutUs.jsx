import Header from "../../components/About/Header"
// import WhoWeAre from "../../components/About/WhoWeAre.jsx"
import Vision from "../../components/About/Vision.jsx"
import WhyChoose from "../../components/About/WhyChose.jsx"
import  About from "../../components/About/AboutUs.jsx"
import StckyScroll from "../../ui/Aceternity/stickyScroll/StckyScrollRevealDemo.jsx"
import WhoAreWe from "../../components/About/WhoAreWe.jsx"
import DefoultFeature from "../../components/Home/SixthSection.jsx"


export default function AboutUs() {
  return (
    <>
    <Header/>
    <About/>
    <WhoAreWe/>
    {/* <WhoWeAre/> */}
    <StckyScroll/>
    <Vision/>
    <WhyChoose/>
   <DefoultFeature/>
    
    </>
  )
}
