import Header from "../../components/About/Header";
import About from "../../components/About/AboutUs.jsx";
import WhoAreWe from "../../components/About/WhoAreWe.jsx";
import DefoultFeature from "../../components/Home/SixthSection.jsx";
import OurClientFeedBack from "../../components/About/OurClientsFeedBack.jsx";
import LogoHover from "../../components/About/LogoHover.jsx";
import CoreTeam from "../../components/About/CoreTeam.jsx";
import Faq from "../../components/DefoultFaq.jsx";
import Form from "../../components/Contact/Contact.jsx";
import OurVision from "../../components/Career/Journey.jsx";

export default function AboutUs() {
  return (
    <>
      <Header />
      <About />
      <WhoAreWe />
      <OurVision />
      <CoreTeam />
      <OurClientFeedBack />
      <DefoultFeature />
      <LogoHover />
      <Faq />
      <Form />
    </>
  );
}
