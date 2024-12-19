import { useEffect, useState, useRef } from "react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import HoverButton from "../../ui/HoverButton.jsx";
import Anim from "../../ui/Anim.jsx";
import Underline from "../../ui/Underline.jsx";

export default function StatsSection() {
  const projectsRef = useRef(null);
  const customersRef = useRef(null);
  const othersRef = useRef(null);

  const [projectsCount, setProjectsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [othersCount, setOthersCount] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentProjectsRef = projectsRef.current;

    if (currentProjectsRef) observer.observe(currentProjectsRef);

    return () => {
      if (currentProjectsRef) observer.unobserve(currentProjectsRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1000;
      const steps = 100;
      const incrementProjects = 10 / steps;
      const incrementCustomers = 20 / steps;
      const incrementOthers = 100 / steps;

      let currentProjects = 0;
      let currentCustomers = 0;
      let currentOthers = -1;

      const interval = setInterval(() => {
        currentProjects += incrementProjects;
        currentCustomers += incrementCustomers;
        currentOthers += incrementOthers;

        setProjectsCount(Math.round(currentProjects));
        setCustomersCount(Math.round(currentCustomers));
        setOthersCount(Math.round(currentOthers));

        if (
          currentProjects >= 10 &&
          currentCustomers >= 20 &&
          currentOthers >= 100
        ) {
          clearInterval(interval);
        }
      }, duration / steps);
    }
  }, [isVisible]);

  return (
    <div
      className="relative bg-gradient-to-t from-white py-14 font-poppins
    "
    >
      <div
        className="absolute  inset-0 bg-no-repeat bg-cover rotate-180 top-10 left-20 right-20 bottom-10 rounded-xl opacity-10"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/coloured-background-design_1164-257.jpg?t=st=1734158786~exp=1734162386~hmac=81d7c5903a0022540b6ecc7bdbc30fc04f7ecc3accd3c2e7dd7716c9ca84fb44&w=740)",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center  mb-5">
        
          
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl max-w-lg font-semibold leading-tight  mb-4">
              We always try to understand users expectation
            </h1>
            <Underline/>
         
         
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 justify-center md:space-x-12 space-y-8 md:space-y-0 p-10 ">
        <div
          ref={projectsRef}
          className="flex bg-white z-40 flex-row gap-5 text-center border-b-2 md:border-0 md:border-b-0 border-dotted border-gray-600 md:pl-8 md:pb-0 pb-4"
        >
          <div className="flex justify-center items-center">
            <AssignmentOutlinedIcon
              fontSize="medium"
              className="text-gray-500"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl  font-semibold text-customGreen">{`${projectsCount}+`}</h1>
            <p className="text-md md:text:lg text-gray-600  ">Projects</p>
          </div>
        </div>

        <div
          ref={customersRef}
          className="flex bg-white z-40 flex-row gap-5 text-center border-b-2 md:border-l-2 md:border-b-0 border-dotted border-gray-400 md:pl-8 md:pb-0 pb-4"
        >
          <div className="flex justify-center items-center">
            <AssignmentOutlinedIcon
              fontSize="medium"
              className="text-gray-500"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl  font-semibold text-customGreen">{`${customersCount}+`}</h1>
            <p className="text-md md:text:lg text-gray-600">Projects</p>
          </div>
        </div>

        <div
          ref={othersRef}
          className="flex bg-white z-40 flex-row gap-5 text-center border-b-2 md:border-l-2 md:border-b-0 border-dotted border-gray-400 md:pl-8 md:pb-0 pb-4"
        >
          <div className="flex justify-center items-center">
            <GroupRemoveOutlinedIcon
              fontSize="medium"
              className="text-gray-500"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-customGreen ">{`${othersCount}+`}</h1>
            <p className="text-md md:text:lg text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
      <Anim>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-10 border-2 border-dotted border-gray-300 mx-10 md:mx-52 lg:mx-72 p-5 md:p-8">
          <div>
            <h1 className="text-[#0E314C] text-lg md:text-xl font-semibold">
              Have any question about us?
            </h1>
            <p className="text-sm text-gray-500">
              Don&apos;t hesitate to contact us
            </p>
          </div>

          <HoverButton>Contact Us</HoverButton>
        </div>
      </Anim>
    </div>
  );
}
