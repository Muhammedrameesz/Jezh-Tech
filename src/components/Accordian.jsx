import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function StyledAccordion() {
    
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); 
  };

  const accordionData = [
    {
      title: "Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Heading",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        title: "Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
  ];

  return (
    <div  className="py-20 bg-white min-h-screen font-poppins">
        <div className='bg-white py-14 shadow-custom mx-10 md:mx-14 rounded-lg'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mx-auto max-w-4xl "
      >
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
           
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography  sx={{ fontFamily: 'Poppins, sans-serif',fontWeight:'medium',fontSize:'16px'}} className="font-semibold text-gray-800 font-poppins">
                {item.title}
              </Typography>
            </AccordionSummary>
            {!item.disabled && (
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Poppins, sans-serif',fontSize:14 }} className="text-gray-400 font-poppins">{item.content}</Typography>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </motion.div>
      </div>
    </div>
  );
}
