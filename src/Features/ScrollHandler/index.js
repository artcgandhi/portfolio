import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash);

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - 80 : 0,
      });
    }, 100);
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default ScrollHandler;
