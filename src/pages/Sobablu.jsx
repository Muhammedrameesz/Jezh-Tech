import Header from "../components/Sovablu/Header.jsx"
import HoverLogo from "../components/About/LogoHover.jsx"
import FeaturedSolutions from "../components/Sovablu/FeaturedSolutions.jsx"
import UserExp from "../components/Home/SixthSection.jsx"
import ProudProjects from "../components/Sovablu/ProudProjects.jsx"
import OurClient from "../components/Sovablu/ClientsFeedback.jsx"
// import StartYourFreeTrail from "../components/Sovablu/StartYourFreeTrail.jsx"
import RoundedCards from "../components/Sovablu/RoundedCards.jsx"
import SovablueFaq from "../components/Sovablu/SovableFaq.jsx"
import Form from "../components/Contact/Contact.jsx"

export default function Sobablu() {
  return (
    <>
    <Header/>
    <FeaturedSolutions/>
    <RoundedCards/>
    <UserExp/>
    <ProudProjects/>
    <HoverLogo/>
    <OurClient/>
    <SovablueFaq/>
    <Form/>
    </>
  )
}
