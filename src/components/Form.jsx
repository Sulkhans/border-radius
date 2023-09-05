import { useState } from "react";
import Shape from "./Shape";
import Size from "./Size";

const Form = () => {
  const [size, setSize] = useState({
    width: 250,
    height: 250,
  });
  const { width, height } = size;

  const [borders, setBorders] = useState({
    TL: 0,
    TR: 0,
    BR: 0,
    BL: 0,
  });
  const { TL, TR, BR, BL } = borders;

  const handleBordersChange = (event) => {
    const { name, value } = event.target;
    setBorders((prevBorders) => {
      return {
        ...prevBorders,
        [name]: value,
      };
    });
  };

  const Range = () => (width > height ? height : width);

  return (
    <div className="container">
      <Size size={size} setSize={setSize} />
      <Shape borders={borders} size={size} />
      <form className="range--container">
        <input
          type="range"
          max={Range()}
          name="TL"
          value={TL}
          onChange={handleBordersChange}
        />
        <input
          type="range"
          max={Range()}
          name="TR"
          value={TR}
          onChange={handleBordersChange}
        />
        <input
          type="range"
          max={Range()}
          name="BR"
          value={BR}
          onChange={handleBordersChange}
        />
        <input
          type="range"
          max={Range()}
          name="BL"
          value={BL}
          onChange={handleBordersChange}
        />
      </form>
      <main className="output">
        <p>width: {width}px;</p>
        <p>height: {height}px;</p>
        <p>
          border-radius: {TL}px {TR}px {BR}px {BL}px;
        </p>
      </main>
    </div>
  );
};

export default Form;
