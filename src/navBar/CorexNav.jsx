import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jezhpng from "../assets/JezhLogo/Removal-40.png";
import { navLinks, dropdownLinks } from "./navLinks.jsx";
import ResponsiveNav from "./CorexResponsiveNav.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import SupportButton from "../ui/SwipeButton.jsx/SupportButton.jsx";

export default function HomeNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("coreX Business Suite");
  const [hover, setHover] = useState(null);
  const [linkActive, setLinkActive] = useState("coreX Business Suite");
  const [activeRef, setActiveRef] = useState(null);
  const [activeDrop, setActiveDrop] = useState(null);

  const handleLinkClick = (element, ref) => {
    setIsDropdownOpen(false);
    setActiveLink("");
    setLinkActive(element);
    setActiveRef(ref);
  };

  const handleClear = async () => {
    setActiveDrop(null);
    setActiveLink(null);
    setActiveRef(null);
    setLinkActive(null);
    activeLink(null);
  };

  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="font-jakarta z-50 max-w-6xl w-full shadow-custom flex items-center fixed bg-white rounded-full left-1/2 transform -translate-x-1/2 "
      initial={{ top: isScrolled ? 0 : 80 }}
      animate={{ top: isScrolled ? 0 : 80 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{zIndex:1000}}
    >
      {/* Logo Section */}
      <Link to="/" className="flex-shrink-0 ml-5 md:ml-10">
        <img
          onClick={handleClear}
          src={jezhpng}
          alt="jezhIcon"
          className="h-28 w-28 object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex-grow flex justify-center items-center">
        <ul className="hidden lg:flex justify-between items-center list-none">
          {navLinks.map((item) => (
            <li
              key={item.element}
              className="relative"
              onMouseEnter={() => {
                if (item.hasDropdown) {
                  setActiveLink(item.element);
                  setIsDropdownOpen(true);
                }
              }}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                onClick={() => {
                  setLinkActive(item.element);
                  setActiveRef(null);
                  setActiveDrop(null);
                }}
                onMouseEnter={() => setHover(item.element)}
                onMouseLeave={() => setHover(null)}
                to={item.hasDropdown ? "#" : item.path}
                className={`${
                  linkActive === item.element ||
                  activeRef === item.element ||
                  activeDrop === item.element
                    ? "text-customGreen"
                    : "text-gray-600"
                } tracking-tight leading-relaxed px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:text-customGreen hover:scale-105 ${
                  item.hasDropdown &&
                  isDropdownOpen &&
                  activeLink === item.element &&
                  "text-customGreen"
                } ${item.hasDropdown ? "cursor-text" : "cursor-pointer"}`}
              >
                {item.element}
                {item.hasDropdown && (
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: "transform 0.5s",
                      transform: hover === item.element ? "translateY(4px)" : "none",
                      "&:hover": {
                        transform: "translateY(4px)",
                      },
                    }}
                  />
                )}
              </Link>
              {item.hasDropdown &&
                isDropdownOpen &&
                activeLink === item.element && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <div className="absolute left-0 right-0 top-6 bg-transparent h-6 " />
                    <div className="absolute left-1/2 right-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-white z-10 top-12 rotate-45" />
                    <motion.ul className="absolute left-1/2 top-12 -translate-x-1/2 w-96 rounded-2xl bg-white p-2 py-3 shadow-custom " style={{zIndex:10000}}>
                      {dropdownLinks
                        .filter((subItem) => subItem.ref === activeLink)
                        .map((subItem) => (
                          <li
                            onMouseEnter={() => setActiveDrop(subItem.ref)}
                            onMouseLeave={() => setActiveDrop(null)}
                            key={subItem.element}
                            className="flex items-center px-4 py-2 transition-transform duration-500 hover:translate-x-2 group relative"
                          >
                            <Link
                              onClick={() =>
                                handleLinkClick(subItem.element, subItem.ref)
                              }
                              to={subItem.path}
                              className="text-gray-900 cursor-pointer transition-all duration-300 ease-in-out group-hover:text-gray-700"
                            >
                              <motion.div className="text-customGreen text-2xl mr-2 p-2 shadow-lg rounded-full transition-all duration-500">
                                {subItem.icon}
                              </motion.div>
                            </Link>
                            <div className="flex flex-col mx-2">
                              <Link
                                onClick={() =>
                                  handleLinkClick(subItem.element, subItem.ref)
                                }
                                to={subItem.path}
                                className={`${
                                  linkActive === subItem.element
                                    ? "text-customGreen"
                                    : "text-gray-600"
                                } transition-all duration-300 font-medium ease-in-out group-hover:text-customGreen`}
                              >
                                {subItem.element}
                              </Link>
                              <Link
                                onClick={() =>
                                  handleLinkClick(subItem.element, subItem.ref)
                                }
                                to={subItem.path}
                                className="text-gray-400 cursor-pointer transition-all duration-300 ease-in-out "
                              >
                                <p className="text-sm ">{subItem.des}</p>
                              </Link>
                              <span className="w-64 mt-3 h-[1px] bg-slate-200"></span>
                            </div>
                          </li>
                        ))}
                    </motion.ul>
                  </motion.div>
                )}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div
        onClick={() => navigate("/contact")}
        className="hidden lg:flex gap-4 mr-10 font-semibold"
      >
        <SupportButton>Contact Us</SupportButton>
      </div>

      {/* Responsive Navigation */}
      <div className="flex lg:hidden justify-end items-center">
        <ResponsiveNav />
      </div>
    </motion.nav>
  );
}
