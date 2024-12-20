import { motion } from "framer-motion";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PropTypes from "prop-types";

const HoverButton = ({ children,textColor }) => {
  return (
    <motion.button
      initial={{
        backgroundImage:
          "linear-gradient(to right, #6a0fbe 50%, transparent 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "57% 0",
      }}
      whileHover={{
        backgroundPosition: "0 0",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className={`relative font-semibold py-3 px-8 shadow-lg rounded-full
        border-2 border-custom-purple transition-all duration-700 
        focus:outline-none focus:ring-2 focus:ring-custom-purple ${
          textColor ? `${textColor} hover:text-white` : "text-white hover:text-white"
        }`}
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
  textColor:PropTypes.string,
};

export default HoverButton;
