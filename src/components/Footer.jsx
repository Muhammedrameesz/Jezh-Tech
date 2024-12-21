import { Link } from "react-router-dom";
import Jezh from "../assets/JezhLogo/Removal-40.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AnimBT from "../ui/AnimBT.jsx";
import ANim from "../ui/Anim.jsx";
import RandomPatterns2 from "../ui/RandomPatterns4.jsx";

export default function Footer() {
  const linkStyle = "text-gray-600 hover:text-green-600 transition";
  const iconStyle = { marginRight: "8px", color: "rgb(156, 163, 175)" };

  return (
    <footer className="relative font-poppins bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover opacity-10 z-0 "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/coloured-background-design_1164-257.jpg)",
        }}
      ></div>

      {/* Pattern Overlay */}
      <RandomPatterns2 />

      {/* Content */}
      <AnimBT>
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between py-12 px-6 md:px-12 lg:px-24 space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Jezh} alt="JezhTechLogo" className="h-32 w-32 mb-4" />
            <p className="text-gray-700 text-sm text-center md:text-left">
              Empowering technology to build a better future.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-800 font-semibold text-lg">Company</h1>
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
            <h1 className="text-gray-800 font-semibold text-lg">Products</h1>
            <Link to="/products/software" className={linkStyle}>
              Software
            </Link>
            <Link to="/products/hardware" className={linkStyle}>
              Hardware
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-800 font-semibold text-lg">Resources</h1>
            <Link to="/blog" className={linkStyle}>
              Blog
            </Link>
            <Link to="/social-media" className={linkStyle}>
              Social Media
            </Link>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-800 font-semibold text-lg">Contact Us</h1>
            <p className="text-gray-600 flex items-center">
              <EmailOutlinedIcon sx={iconStyle} />
              <a href="mailto:info@jezhtechnologies.com" className={linkStyle}>
                info@jezhtechnologies.com
              </a>
            </p>
            <p className="text-gray-600 flex items-center">
              <ContactPhoneOutlinedIcon sx={iconStyle} />
              <a href="tel:+919385722102" className={linkStyle}>
                +91 9385722102
              </a>
              ,{" "}
              <a href="tel:+918428807007" className={linkStyle}>
                +91 8428807007
              </a>
            </p>
            <p className="text-gray-600 flex items-center">
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

      {/* Location Cards */}
      <div className="relative z-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24">
          <ANim delay={0.3}>
            <div className="border border-gray-300  p-4 rounded text-center shadow-sm">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                India - Kanyakumari
              </h2>
              <p className="text-gray-600 text-sm">
                Sri Sai Complex,
                <br />
                Nagercoil, India, 629001
              </p>
            </div>
          </ANim>
          <ANim delay={0.4}>
            <div className="border border-gray-300  p-4 rounded text-center shadow-sm">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                India - Coimbatore
              </h2>
              <p className="text-gray-600 text-sm">
                Nava India, Avinashi Rd,
                <br />
                Coimbatore, India - 641006
              </p>
            </div>
          </ANim>
          <ANim delay={0.5}>
            <div className="border border-gray-300  p-4 rounded text-center shadow-sm">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                Dubai
              </h2>
              <p className="text-gray-600 text-sm">
                Sapphire Tower Deira,
                <br />
                780610, UAE
              </p>
            </div>
          </ANim>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200"></div>
      <div className="relative z-10 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Jezh Technologies. All rights reserved.
      </div>
    </footer>
  );
}
