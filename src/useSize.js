import { useEffect, useState } from "react";

function useSize() {
  const [screenSize, setScreenSize] = useState(false);

  const handleSize = () => {
    setScreenSize(window.innerWidth < 768);
  };
  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return screenSize;
}

export default useSize;
