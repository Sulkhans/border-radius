import { useState } from "react";

const size = ({ size, setSize }) => {
  const { width, height } = size;

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setSize((prevSize) => {
      return {
        ...prevSize,
        [name]: value,
      };
    });
  };

  const handleKey = (event) => {
    const key = event.key;
    if (!(key >= "0" && key <= "9") && key !== "Backspace")
      event.preventDefault();
  };

  return (
    <form className="size--container">
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={width}
        onChange={handleSizeChange}
        onKeyDown={handleKey}
        maxLength={3}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={height}
        onChange={handleSizeChange}
        onKeyDown={handleKey}
        maxLength={3}
      />
    </form>
  );
};

export default size;
