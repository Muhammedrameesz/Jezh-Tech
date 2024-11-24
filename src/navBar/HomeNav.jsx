import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import jezhpng from "../assets/icons/[removal.ai]_abada9aa-5991-43bc-beb5-8f7be43142e9-jezh (1).png";
import { navLinks, dropdownLinks } from "./navLinks";
import ResponsiveNav from "./responsiveNav.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HomeNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <nav
        className="py-4 px-8 shadow-md z-40 w-full max-w-full flex items-center justify-around fixed top-0 bg-white  "
        style={{
          boxShadow: " rgba(0, 0, 0, 0.5) 0px 20px 40px -40px inset",
        }}
      >
        <Link to="/" className="flex-shrink-0">
          <img
            src={jezhpng}
            alt="jezhIcon"
            className=" h-16 w-16 object-contain bg-black rounded-full "
          />
        </Link>

        <ul className="hidden lg:flex font-helvetica lg:gap-4 gap-8 justify-center items-center list-none ml-32">
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
                disabled={item.hasDropdown}
                to={item.hasDropdown ? params : item.path}
                className={`text-gray-950 font-semibold tracking-tight leading-relaxed px-4 py-2 rounded-full transition-all duration-300 transform hover:text-gray-700 hover:scale-105 
                ${item.hasDropdown ? "cursor-text " : "cursor-pointer"}`}
              >
                {item.element}

                {item.hasDropdown && (
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: "transform 0.5s",
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
                  <>
                   <div className="absolute left-0 right-0 top-6 bg-transparent h-6 "/>
                   <div className="absolute left-1/2 right-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-white z-10 top-12 rotate-45"/>
                  </>
                )}
             

              {item.hasDropdown &&
                isDropdownOpen &&
                activeLink === item.element && (
                  <ul
                    className="absolute  left-1/2 top-12 -translate-x-1/2 w-96 rounded-2xl bg-white p-2 py-3 border border-slate-300 "
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.56) 0px 20px 40px 4px",
                      // borderRadius: "30px 0px 30px 0px",
                    }}
                  >

                    {dropdownLinks
                      .filter((subItem) => subItem.ref === activeLink)
                      .map((subItem) => (
                        <li
                          key={subItem.element}
                          className="flex items-center px-4 py-2  transition-transform duration-500 hover:translate-x-2 group relative"
                        >
                          <img
                            onClick={() => navigate(`${subItem.path}`)}
                            src={subItem.icon}
                            alt="icon"
                            className="h-10 w-10 mr-2 p-1 cursor-pointer bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"
                          />
                          <div className="flex flex-col">
                            <Link
                              onClick={() => setIsDropdownOpen(false)}
                              to={subItem.path}
                              className="text-gray-800 font-helvetica font-semibold px-2  transition-all duration-300 ease-in-out group-hover:text-gray-700"
                            >
                              {subItem.element}
                            </Link>
                            <Link to={subItem.path} className="mb-1">
                              <p className="text-xs font-helvetica text-gray-600">
                                {subItem.des}
                              </p>
                            </Link>
                          </div>
                        </li>
                      ))}
                  </ul>
                  
                )}

            </li>
          ))}
        </ul>

        <div className="hidden lg:flex font-helvetica gap-4">
          <button className="bg-gray-900  text-white  font-semibold px-5 py-1 rounded-lg border-2 border-gray-900 shadow-md hover:border-gray-900 hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out">
            Login
          </button>
          <button className="text-black px-5  py-1 font-semibold rounded-lg border-2 border-gray-900 hover:text-white hover:border-gray-900 hover:bg-gray-900 shadow-md transition-all duration-300 ease-in-out">
            Sign Up
          </button>
        </div>

        <div className="flex lg:hidden">
          <ResponsiveNav />
        </div>
      </nav>
    </div>
  );
}
