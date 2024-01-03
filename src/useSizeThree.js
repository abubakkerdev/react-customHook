import { useEffect, useState } from "react";

function useSizeThree(data) {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setScreenSize(window.innerWidth < data);
    };

    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, [data]);

  return screenSize;
}

export default useSizeThree;
