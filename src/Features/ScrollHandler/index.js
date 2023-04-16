import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash);
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop - 80 : 0,
        });
      }, 100);
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
