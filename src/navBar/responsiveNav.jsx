import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { navLinks, dropdownLinks } from "./navLinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ResponsiveNav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isIcon, setIsIcon] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-end items-end">
      <button  onClick={() => setOpen(!open)} className=" text-gray-950 z-20 ">
        {open ? <CloseIcon fontSize="large"/>:<MenuIcon fontSize="large"/>}
        
      </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-50 z-10 p-6 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="opacity-0 text-gray-50 font-semibold text-lg">
              Menu
            </h2>
            <button onClick={() => setOpen(false)} className="text-gray-900">
              <CloseIcon fontSize="large" />
            </button>
          </div>

          <ul className="flex flex-col mt-6 gap-6 text-gray-800">
            {navLinks.map((item) => (
              <li key={item.element} className="relative">
                <Link
                  to={item.path}
                  className={`font-semibold py-2 flex items-center justify-between space-x-2 transition-all duration-300 ${
                    item.hasDropdown ? "cursor-default" : "cursor-pointer"
                  } hover:text-gray-700`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setActiveLink(
                        activeLink === item.element ? null : item.element
                      );
                      setIsIcon((prev) => ({
                        ...prev,
                        [item.element]: !prev[item.element],
                      }));
                    } else {
                      setOpen(false);
                    }
                  }}
                >
                  <span>{item.element}</span>

                  {item.hasDropdown && (
                    <button onClick={() => setIsIcon(!isIcon)}>
                      {isIcon[item.element] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </button>
                  )}
                </Link>
                <hr className="border-t border-gray-200" />

                {item.hasDropdown && activeLink === item.element && (
                  <ul className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-lg py-3 transition-transform transform duration-300 ease-in-out">
                    {dropdownLinks
                      .filter((subItem) => subItem.ref === item.element)
                      .map((subItem) => (
                        <li key={subItem.element} className="flex items-center">
                          <img
                            src={subItem.icon}
                            alt="icon"
                            className="h-8 w-8 mr-2 p-1 cursor-pointer bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"
                          />
                          <div>
                            <Link
                              to={subItem.path}
                              className="text-gray-800 hover:text-gray-700 block font-semibold py-1 transition-all duration-300 ease-in-out"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.element}
                            </Link>
                            <p className="ml-2 text-base text-gray-500 leading-tight tracking-tight">
                              {subItem.des}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <button className="bg-green-600 text-gray-50 font-medium px-5 py-2 rounded-lg border border-green-700 hover:bg-green-700 hover:border-green-600 transition-all duration-300 ease-in-out shadow-md">
              Login
            </button>
            <button className="text-black px-5 py-2 font-medium rounded-lg border border-gray-300 hover:text-green-500 hover:border-green-500 transition-all duration-300 ease-in-out shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
