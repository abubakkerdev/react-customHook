import React from "react";
import useSize from "./useSize";
import useSizeTwo from "./useSizeTwo";
import useSizeThree from "./useSizeThree";

function App() {
  const handleSize = useSize();
  const handleSizeTwo = useSizeTwo(800);
  const handleSizeThree = useSizeThree(800);

  return (
    <>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <div className={handleSize ? "small" : "big"}>Our Custom Hook</div>
      <div className={handleSizeTwo ? "small" : "big"}>Our Custom Hook Two</div>
      <div className={handleSizeThree ? "small" : "big"}>
        Our Custom Hook Three
      </div>
    </>
  );
}

export default App;
