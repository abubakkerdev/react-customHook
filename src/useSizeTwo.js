import { useCallback, useEffect, useState } from "react";

function useSizeTwo(data) {
  const [screenSize, setScreenSize] = useState(false);

  const handleSize = useCallback(() => {
    setScreenSize(window.innerWidth < data);
  }, []);

  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, [handleSize]);

  return screenSize;
}

export default useSizeTwo;
