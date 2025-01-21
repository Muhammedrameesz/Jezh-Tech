import Header from "../components/CoreXERP/CorexHeader.jsx"
import Laptop from "../components/CoreXERP/LaptopSection.jsx"
import Features from "../components/CoreXERP/Features.jsx"
import About from "../components/CoreXERP/AboutCoreX.jsx"
import Partners from "../components/About/LogoHover.jsx"
import ThreeColumnLayout from "../components/CoreXERP/ThreeColumnLayout.jsx"
import LineIntegration from "../components/CoreXERP/LineIntegration.jsx"
import WhatOurUsersSaying from "../components/CoreXERP/WhatOurUsersSaying.jsx"
import DarkThemedSection from "../components/CoreXERP/DarkThemedSection.jsx"
import Faq from "../components/DefoultFaq.jsx"
import Form from "../components/Contact/Contact.jsx"
import LatestNewsAndBlog from "../components/CoreXERP/LatestNewsAndBlog.jsx"
import Subscribe from "../components/CoreXERP/Subscribe.jsx"
// import PricinPlans from "../components/CoreXERP/Pricing.jsx"
import PricingPlansSec from "../components/CoreXERP/PricingPlans.jsx"

export default function CoreX() {
  return (
  <>
  <Header/>
  <Laptop/>
  <Partners/>
  <Features/>
  <About/>
  <ThreeColumnLayout/>
  <LineIntegration/>
  <WhatOurUsersSaying/>
  {/* <PricinPlans/> */}
  <PricingPlansSec/>
  <DarkThemedSection/>
  <LatestNewsAndBlog/>
  <Subscribe/>
  <Faq/>
  <Form/>
  </>
  )
}
