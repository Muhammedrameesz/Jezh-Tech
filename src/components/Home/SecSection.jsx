import { BentoGrid, BentoGridItem } from "../../ui/Aceternity/BentoGrid.jsx";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import Anim from "../../ui/Anim.jsx"
import AnimRL from "../../ui/AnimRL.jsx"

const App = () => {
  return (
    <div className="pt-20 font-poppins min-h-screen">
      <div className="flex items-center justify-center mb-12 space-x-4 ">
        <div className="h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></div>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white">
          Industries We Serve
        </h1>
        <div className="h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></div>
      </div>
      <BentoGrid>
        <Anim>
        <BentoGridItem
          title="Home & Industrial Automation"
          description="Need a smarter space? We’ve got the tech! JEZH Technologies specializes in IoT automation that makes homes smarter and industries more efficient. From boosting security to automating daily tasks, we create solutions that simplify life and streamline operations."
          header={
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
              Home & <br /> Industrial Automation
            </h2>
          }
          icon={<HomeWorkOutlinedIcon className="text-neutral-800" />}
          image="https://img.freepik.com/free-vector/person-controlling-smart-home-with-tablet_1284-54597.jpg"
          imageAlt="Home Automation Image"
        />
        </Anim>
        <AnimRL>
        <BentoGridItem
          title="Website Development & Digital Presence"
          description="Need a powerful online presence? JEZH Technologies specializes in designing and developing custom websites that are not only visually engaging but also optimized for user experience and functionality. We make sure your site is ready to engage and convert visitors seamlessly."
          header={
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
              Website Development & <br /> Digital Presence
            </h2>
          }
          icon={<LanguageRoundedIcon className="text-neutral-800" />}
          image="https://img.freepik.com/premium-photo/web-development-coding-programming-internet-technology-business-concept_1296497-282.jpg"
          imageAlt="Web Development Image"
        />
        </AnimRL>
      </BentoGrid>
    </div>
  );
};

export default App;
