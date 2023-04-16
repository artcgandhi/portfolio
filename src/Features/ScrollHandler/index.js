import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// untuk scrollHandler menggunakan functional komponen karena menggunakan hooks useLocation
// bisa menggunakan class component untuk mencapai hal yang sama, dengan menggunakan withRouter
// tetapi react router dom v6 sudah tidak menggunakan withRouter dan digantikan dengan useLocation

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
