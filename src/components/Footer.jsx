import { Link } from "react-router-dom";
import Jezh from "../assets/icons/[removal.ai]_abada9aa-5991-43bc-beb5-8f7be43142e9-jezh (1).png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AnimBT from "../ui/AnimBT.jsx";

export default function Footer() {
  const linkStyle = "text-gray-400 hover:text-customGreen transition";
  const iconStyle = {
    mr: 1,
    color: "rgb(156, 163, 175)",
    opacity: "var(--tw-text-opacity)",
  };

  return (
    <footer className="bg-black text-white">
      <AnimBT>
        <div className="flex sticky flex-col md:flex-row items-start justify-between py-12 px-6 md:px-12 lg:px-24 space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <img src={Jezh} alt="JezhTechLogo" className="h-32 w-32 mb-4" />
            <p className="text-gray-400 text-sm text-center md:text-left">
              Empowering technology to build a better future.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">
              Company
            </h1>
            <Link to="/about-us" className={linkStyle}>
              About Us
            </Link>
            <Link to="/our-team" className={linkStyle}>
              Our Team
            </Link>
            <Link to="/partners" className={linkStyle}>
              Partners
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">
              Products
            </h1>
            <Link to="/products/software" className={linkStyle}>
              Software
            </Link>
            <Link to="/products/hardware" className={linkStyle}>
              Hardware
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">
              Resources
            </h1>
            <Link to="/blog" className={linkStyle}>
              Blog
            </Link>
            <Link to="/social-media" className={linkStyle}>
              Social Media
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">
              Contact Us
            </h1>
            <p className="text-gray-300">
              <EmailOutlinedIcon sx={iconStyle} />
              <a href="mailto:info@jezhtechnologies.com" className={linkStyle}>
                info@jezhtechnologies.com
              </a>
            </p>
            <p className="text-gray-300">
              <ContactPhoneOutlinedIcon sx={iconStyle} />
              <a href="tel:+919385722102" className={linkStyle}>
                +91 9385722102
              </a>
              ,{" "}
              <a href="tel:+918428807007" className={linkStyle}>
                +91 8428807007
              </a>
            </p>
            <p className="text-gray-300">
              <LanguageOutlinedIcon sx={iconStyle} />
              <a
                href="https://www.jezhtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                www.jezhtechnologies.com
              </a>
            </p>
          </div>
        </div>
      </AnimBT>

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24 justify-center items-center">
          <div className="border border-gray-600 p-4 rounded text-center">
            <h2 className="text-white text-lg font-semibold mb-2">
              India - Kanyakumari
            </h2>
            <p className="text-gray-400 text-sm">
              Sri Sai Complex,
              <br />
              Nagercoil, India, 629001
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <a href="mailto:info@jezhtechnologies.com" className={linkStyle}>
                info@jezhtechnologies.com
              </a>
            </p>
          </div>

          <div className="border border-gray-600 p-4 rounded text-center">
            <h2 className="text-white text-lg font-semibold mb-2">
              India - Coimbatore
            </h2>
            <p className="text-gray-400 text-sm">
              Nava India, Avinashi Rd,
              <br />
              Coimbatore, India - 641006
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <a href="mailto:info@jezhtechnologies.com" className={linkStyle}>
                info@jezhtechnologies.com
              </a>
            </p>
          </div>

          <div className="border border-gray-600 p-4 rounded text-center">
            <h2 className="text-white text-lg font-semibold mb-2">Dubai</h2>
            <p className="text-gray-400 text-sm">
              Sapphire Tower Deira,
              <br />
              780610, UAE
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <a href="mailto:info@jezhtechnologies.com" className={linkStyle}>
                info@jezhtechnologies.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700"></div>
      <div className="py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Jezh Technologies. All rights reserved
      </div>
    </footer>
  );
}
