import Header from "../components/Sovablu/Header.jsx"
import HoverLogo from "../components/About/LogoHover.jsx"
import FeaturedSolutions from "../components/Sovablu/FeaturedSolutions.jsx"
import AboutUs from "../components/Sovablu/AboutSection.jsx"
// import OurService from "../components/Sovablu/OurServicecs.jsx"
import UserExp from "../components/Home/SixthSection.jsx"
import ProudProjects from "../components/Sovablu/ProudProjects.jsx"
import PricingPlans from "../components/Sovablu/PricinPlans.jsx"
import OurClient from "../components/Sovablu/ClientsFeedback.jsx"
import OurRecentStory from "../components/Sovablu/OurRecentStory.jsx"
import StartYourFreeTrail from "../components/Sovablu/StartYourFreeTrail.jsx"
import RoundedCards from "../components/Sovablu/RoundedCards.jsx"
import SovablueFaq from "../components/Sovablu/SovableFaq.jsx"

export default function Sobablu() {
  return (
    <>
    <Header/>
    <HoverLogo/>
    <FeaturedSolutions/>
    <RoundedCards/>
    <AboutUs/>
    {/* <OurService/> */}
    <UserExp/>
    <ProudProjects/>
    <PricingPlans/>
    <OurClient/>
    <OurRecentStory/>
    <SovablueFaq/>
    <StartYourFreeTrail/>
    </>
  )
}
