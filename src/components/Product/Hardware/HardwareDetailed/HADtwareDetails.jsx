import useHardwareServiceDetails from "../../../../store/HardwareProduct.js";

import Accordian from "./Accordian.jsx";

const serviceDetailsContent = [
  {
    title: "Skeegle Helmet",
    description:
      "The smart safety helmet represents a breakthrough in workplace safety by integrating advanced technologies to protect workers effectively. Its real-time monitoring capabilities ensure that potential hazards are identified immediately, minimizing risks and preventing accidents before they occur. This proactive approach fosters a safer work environment, particularly in high-risk industries like construction, mining, and manufacturing.",
    description2:
      "Equipped with cutting-edge features such as alerts for environmental dangers, the helmet empowers workers to stay informed and vigilant. This not only reduces the likelihood of injuries but also boosts productivity by enabling employees to focus on their tasks with greater confidence. The seamless integration of technology into protective gear transforms it into a vital safety tool rather than just an accessory.",
    description3:
      "In today’s fast-paced industrial world, prioritizing safety is paramount. The smart safety helmet serves as a powerful reminder of an organization's commitment to worker well-being, making it an essential investment for modern workplaces.",
    image:
      "https://img.freepik.com/premium-photo/close-up-hard-hat-laptop-real-estate-construction-site_10541-1280.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/premium-photo/construction-helmet-is-worn-oxygen-cylinder-welding-shop-industry-construction_230115-2959.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    accordianData: [
      {
        title: "Health Monitoring ",
        quote:
          "The helmet continuously tracks vital signs like body temperature, heart rate, and blood oxygen saturation (SpO2) levels.",
      },
      {
        title: "Real time Analysis",
        quote:
          "The helmet measures levels of carbon dioxide (CO2), carbon monoxide (CO), ammonia, and methane, as well as temperature and humidity, to monitor air quality.",
      },
      {
        title: "GPS & Data Transmission",
        quote:
          "The helmet integrates GPS for real-time worker location tracking and uses cellular IoT to automatically transmit all collected data to a centralized server for monitoring.",
      },
    ],
  },
  {
    title: "Electronic Voting Machines (EVMs)",
    description:
      "Electronic Voting Machines (EVMs) revolutionize the voting process by offering a secure, efficient, and budget-friendly system for conducting elections. Developed by Jezh Technologies, these EVMs ensure accuracy and integrity in voting, eliminating manual errors and tampering risks. Their advanced electronic mechanism speeds up vote counting, enabling quick and transparent results.",
    description2:
      "Versatile and cost-effective, Jezh Technologies' EVMs are ideal for schools, clubs, and local bodies, making elections manageable even on tight budgets. Their user-friendly design ensures accessibility for participants of all ages and technological proficiencies, while their low maintenance requirements make them suitable for smaller organizations.",
    description3:
      "By integrating cutting-edge technology with affordability, these EVMs enhance democratic practices, promote trust, and modernize the electoral process. With their ability to handle large-scale participation efficiently, Jezh Technologies’ EVMs are essential for fostering fair and inclusive decision-making in diverse communities.",
    image2:
      "https://img.freepik.com/free-photo/bank-atm-operation-enter-password_1359-1192.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image:
      "https://img.freepik.com/free-photo/atm-operation-bank_1359-1212.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    accordianData: [
      {
        title: "Cost-Efficiency",
        quote:
          "EVMs provide a budget-friendly solution for conducting elections, making them ideal for schools, clubs, and local bodies with limited resources.",
      },
      {
        title: "User-Friendliness",
        quote:
          "Designed with accessibility in mind, EVMs are easy to operate for participants of all ages and technological proficiencies, ensuring a smooth and inclusive voting experience.",
      },
      {
        title: "Accuracy & Integrity",
        quote:
          "EVMs eliminate manual errors and tampering risks, ensuring accurate and reliable vote counting, leading to quick and transparent election results.",
      },
    ],
  },
  {
    title: "Washroom Automation",
    description:
      "Washroom automation revolutionizes hygiene standards with sensor-based faucets, soap dispensers, and flush systems. By eliminating the need for physical contact, these innovations significantly reduce the risk of germ transmission, ensuring a safer and cleaner environment for users. This touchless operation is especially crucial in public and commercial spaces, where hygiene is a top priority",
    description2:
      "Automated washroom systems contribute to environmental sustainability by minimizing water wastage. Sensor-based faucets release water only when needed, ensuring efficient usage. Similarly, smart flush systems adjust water flow based on requirements, promoting responsible consumption without compromising functionality.",
    description3:
      "These advanced solutions offer unmatched convenience and efficiency. Automated soap dispensers provide precise amounts of soap, reducing waste and maintenance efforts. By integrating technology into everyday practices, washroom automation enhances user experience, saves resources, and aligns with modern standards of cleanliness and sustainability",
    image:
      "https://img.freepik.com/free-photo/modern-bathroom-interior-with-double-sinks-smart-technology-control-panel_9975-33125.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/premium-photo/hightech-bathroom_861346-74521.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    accordianData: [
      {
        title: "Hygienic & Safe",
        quote:
          "Sensor-based faucets, soap dispensers, and flush systems minimize contact points, significantly reducing the risk of germ transmission, especially crucial in high-traffic areas.",
      },
      {
        title: "Eco-Friendly",
        quote:
          "Sensor-based technology optimizes water usage, preventing unnecessary wastage. Smart flush systems adjust water flow, promoting responsible consumption while maintaining functionality.",
      },
      {
        title: "Convenient & Efficient",
        quote:
          "Automated systems offer precise soap dispensing, minimizing waste and simplifying maintenance. Touchless operation provides a seamless and convenient user experience, aligning with modern expectations.",
      },
    ],
  },
  {
    title: "Smart AI Coat",
    description:
      "The AI smart coat is a revolutionary garment that continuously monitors your health. It uses sensors to track vital signs like heart rate and breathing, and AI to spot potential problems early on.",
    description2:
      "Powered by a solar panel and a smart battery, it can work independently, even in remote areas. You can easily access your health data through a mobile app, and doctors can remotely monitor your condition.",
    description3:
      "Prioritizing user experience, the coat features a user-friendly interface and secure data transmission. Users can access their health data through a connected mobile app, track trends, and receive personalized health recommendations. Healthcare professionals can remotely monitor multiple patients via a dedicated web panel, enabling proactive medical intervention.This innovative coat has the potential to improve healthcare by allowing for early detection of health issues and better patient care.",
    image:
      "https://img.freepik.com/free-photo/modern-bathroom-interior-with-double-sinks-smart-technology-control-panel_9975-33125.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/premium-photo/hightech-bathroom_861346-74521.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    accordianData: [
      {
        title: "Real-time Vital Sign Tracking",
        quote:
          "Continuously monitors heart rate, blood pressure, temperature, and more, allowing for early detection of potential health issues.",
      },
      {
        title: "AI-powered Analysis",
        quote:
          " Sophisticated algorithms analyze data to identify patterns and abnormalities, providing insights traditionally only available in clinical settings.",
      },
      {
        title: "Remote Monitoring & User-friendly Interface",
        quote:
          "Healthcare professionals can remotely track patients' health, while users can easily access their data and receive personalized recommendations through a mobile app.",
      },
    ],
  },
];

export default function SoftwareProductseDetailsCom() {
  const HardwareDetails = useHardwareServiceDetails(
    (state) => state.hardwareProductsDetails
  );
  const currentService = serviceDetailsContent.find(
    (item) => {
      console.log("deatilpage current title",item.title);
      console.log("store current title",HardwareDetails.title);

      
    return  item.title === HardwareDetails.title
    }
  );

  return (
    <div className="font-jost pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
        {/* Text Section */}
        <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
          <h1 className="text-2xl font-bold text-customBlue mb-4">
            {currentService?.title}
          </h1>
          <p className="text-gray-500 leading-7 text-justify text-sm">
            {currentService?.description}
          </p>
          <p className="text-gray-500 leading-7 text-justify text-sm">
            {currentService?.description2}
          </p>
        </section>

        {/* Image Section */}
        <section className="flex justify-center items-center bg-white ">
          <img
            src={currentService?.image}
            alt={currentService?.title}
            className="w-full max-w-lg rounded-lg object-cover"
          />
        </section>
      </div>

      {/* 2nd Row  */}

      <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
        {/* Image Section */}
        <section className="flex justify-center items-center bg-white ">
          <img
            src={currentService?.image2}
            alt={currentService?.title}
            className="w-full max-w-lg rounded-lg "
          />
        </section>
        {/* Text Section */}
        <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
          <p className="text-gray-500 leading-7 text-justify text-sm">
            {currentService?.description3}
          </p>

          <Accordian accordianData={currentService?.accordianData} />
        </section>
      </div>
    </div>
  );
}
