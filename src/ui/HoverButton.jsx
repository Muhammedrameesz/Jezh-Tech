import { motion } from "framer-motion";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PropTypes from "prop-types";

const HoverButton = ({ children }) => {
  return (
    <motion.button
      initial={{
        backgroundImage:
          "linear-gradient(to right, #8fd14f 50%, transparent 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "80% 0",
      }}
      whileHover={{
        backgroundPosition: "0 0",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="relative text-black font-semibold py-3 px-8 rounded-2xl shadow-lg 
             hover:text-black border-2 border-customGreen transition-all duration-700 
             focus:outline-none focus:ring-2 focus:ring-customGreen "
    >
      <ArrowForwardOutlinedIcon
        fontSize="medium"
        className="absolute -left-0 top-1/2 transform -translate-y-1/2 "
      />
      {children}
    </motion.button>
  );
};

HoverButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HoverButton;
