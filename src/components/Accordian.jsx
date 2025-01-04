import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import Underline from "../ui/Underline";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function StyledAccordion() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      title: "What makes Jezh Technologies Unique?",
      content:
        "Jezh Technologies is known for its innovative solutions, commitment to client satisfaction, and dedication to delivering high-quality results. We leverage the latest technologies and a talented team to bring your vision to life.",
    },
    {
      title: "What is our approach to Project Management?",
      content:
        "We follow an agile methodology, emphasizing close collaboration with our clients throughout the project lifecycle. We prioritize clear communication, regular updates, and client feedback.",
    },
    {
      title: "Do we offer customization?",
      content:
        "Yes, absolutely. We do customization. We understand that every individual and every project is unique. That's why we offer a wide range of customization options to ensure that you get exactly what you need. ",
    },
    {
      title: "Do we provide post development services?",
      content:
        "Sure. Customer satisfaction is our priority. We’ll support the client by offering the service of our talented developers.",
    },
    {
      title: "Do we have any preferred locations to provide services?",
      content:
        "No. We do not have any location preferences for service delivery. Our offices are in Kanyakumari and Coimbatore, but we provide services throughout India. We are flexible and can work in any time zone.",
    },
  ];

  return (
    <div className="py-20 bg-customWhite  font-jost">
      <div className="  mx-10 md:mx-14 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="mt-5 md:mt-20 lg:mt-36">
          <img
            src="https://img.freepik.com/free-vector/faq-concept-illustration_114360-4996.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mx-auto max-w-4xl "
        >
          <div className="mb-10">
            <h1 className="text-customBlue text-2xl md:text-3xl font-bold mb-5 ">
              Quick & Clear Information
            </h1>
            <Underline />
          </div>
          {accordionData.map((item, index) => (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={index}
              disabled={item.disabled || false}
              sx={{
                background: "white",
                boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              <AccordionSummary
                className="group"
               expandIcon={
                expanded === index ? (
                  <RemoveIcon
                    className="text-customGreen transition-transform duration-300 ease-in-out"
                  />
                ) : (
                  <AddIcon
                    className="transition-transform duration-300 ease-in-out text-gray-800 group-hover:text-customGreen"
                  />
                )
              }
              
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  sx={{
                    
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                  className={`font-semibold group-hover:text-customGreen transition-colors duration-300  font-jost ${expanded===index?"text-customGreen":"text-gray-800"}`}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              {!item.disabled && (
                <AccordionDetails>
                  <Typography
                    sx={{fontSize: 14 }}
                    className="text-gray-500 font-jost"
                  >
                    {item.content}
                  </Typography>
                </AccordionDetails>
              )}
            </Accordion>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
