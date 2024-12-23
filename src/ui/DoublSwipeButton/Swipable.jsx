import React from 'react';
import PropTypes from 'prop-types';
import './swipable.css';  // Ensure correct path to your CSS file

const DoubleSwipeButton = ({ children, textColor }) => {
  return (
    <button
      className={`double-swipe-btn relative inline-block font-semibold py-3 px-8 shadow-lg z-20 rounded-full border-2 border-customGreen transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-customGreen ${textColor ? `${textColor} hover:text-black` : "text-black hover:text-white"} group`} // Added 'group' for hover
    >
      {/* Left Swipe */}
      <span className="swipe-left"></span>

      {/* Right Swipe */}
      <span className="swipe-right"></span>

      {/* Button Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

DoubleSwipeButton.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
};

export default DoubleSwipeButton;
