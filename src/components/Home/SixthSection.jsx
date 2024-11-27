import { useEffect, useState, useRef } from "react";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';

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
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 justify-center md:space-x-12 space-y-8 md:space-y-0 p-10 bg-gradient-to-t from-black to-black text-white">
      <div
        ref={projectsRef}
        className="flex flex-row gap-5 text-center border-b-2 md:border-0 md:border-b-0 border-dotted border-gray-600 md:pl-8 md:pb-0 pb-4"
      >
        <div className="flex justify-center items-center">
        <AssignmentOutlinedIcon fontSize="large" className="text-gray-200"/>
        </div>

        <div>
          <h1 className="text-6xl font-bold">{`${projectsCount}+`}</h1>
          <p className="text-xl text-customGreen font-semibold ">Projects</p>
        </div>
      </div>

      <div
        ref={customersRef}
        className="flex flex-row gap-5 text-center border-b-2 md:border-l-2 md:border-b-0 border-dotted border-gray-600 md:pl-8 md:pb-0 pb-4"
      >
        <div className="flex justify-center items-center">
        <AssignmentOutlinedIcon  fontSize="large" className="text-gray-200"/>
        </div>
        <div>
          <h1 className="text-6xl font-bold">{`${customersCount}+`}</h1>
          <p className="text-xl text-customGreen font-semibold">Projects</p>
        </div>
      </div>

      <div
        ref={othersRef}
        className="flex flex-row gap-5 text-center border-b-2 md:border-l-2 md:border-b-0 border-dotted border-gray-600 md:pl-8 md:pb-0 pb-4"
      >
         <div className="flex justify-center items-center">
        <GroupRemoveOutlinedIcon fontSize="large" className="text-gray-200"/>
        </div>

        <div>
          <h1 className="text-6xl font-bold">{`${othersCount}+`}</h1>
          <p className="text-xl text-customGreen font-semibold">
            Happy Customers
          </p>
        </div>
      </div>
    </div>
  );
}
