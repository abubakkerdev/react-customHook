import { useEffect, useState } from "react";

function ReactHook() {
  const [screenSize, setScreenSize] = useState(false);

  const handleSize = () => {
    setScreenSize(window.innerWidth < 768);
  };
  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return <div>ReactHook {screenSize ? "Small Screen" : "Big Screen"} </div>;
}

export default ReactHook;
