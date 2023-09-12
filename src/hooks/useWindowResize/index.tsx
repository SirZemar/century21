import { useState, useEffect } from "react";

const useWindowResize = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const handleWindowResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    handleWindowResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => handleWindowResize());
    return window.removeEventListener("resize", () => handleWindowResize());
  }, [screenWidth]);

  return screenWidth;
};

export default useWindowResize;
