import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/Company/AboutUs.jsx";
import OurTeam from "../pages/Company/OurTeam.jsx";
import Partners from "../pages/Company/Partners.jsx";
import Services from "../pages/Services.jsx";
import Software from "../pages/Products/Software.jsx";
import Hardware from "../pages/Products/Hardware.jsx";
import Sobablu from "../pages/Sobablu.jsx";
import Blog from "../pages/Resources/Blog.jsx";
import SocialMedia from "../pages/Resources/SocialMedia.jsx";
import Contact from "../pages/contact.jsx";
import BlogDetails from "../pages/Resources/BlogDetals/BlogDetails.jsx";

export const Router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/products/software",
        element: <Software />,
      },
      {
        path: "/products/hardware",
        element: <Hardware />,
      },
      {
        path: "/sovablu",
        element: <Sobablu />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/social-media",
        element: <SocialMedia />,
      },
      {
        path: "/blog/details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
