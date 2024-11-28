import Header from "../components/Home/Header.jsx";
import SecSection from "../components/Home/SecSection.jsx";
import ThirSection from "../components/Home/ThirSection.jsx";
import ForthSection from "../components/Home/ForthSection.jsx";
import FifthSection from "../components/Home/FifthSection.jsx";
import SixthSection from "../components/Home/SixthSection.jsx";
import SeventhSection from "../components/Home/SeventhSection.jsx";
import LastSection from "../components/Home/LastSection.jsx";
import Footer from "../components/Footer.jsx";
import { Divider } from "@mui/material";



export default function Home() {
  return (
    <>
      <Header />
      <SecSection />
   
      <ThirSection />
      <Divider sx={{marginX:'10%',}} className=" bg-neutral-400"/>
      <ForthSection />
      <FifthSection />

      <SixthSection />
      <SeventhSection />
      
      <LastSection />
      <Footer />
    </>
  );
}
