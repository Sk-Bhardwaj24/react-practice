import React from "react";

const Button = () => {
  const handleClick = (e) => {
    console.log(e);
    e.target.style.backgroundColor = color();
  };
  const color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
  };
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>change</button>
    </div>
  );
};

export default Button;
