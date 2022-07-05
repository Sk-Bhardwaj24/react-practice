import React from "react";

const Button = () => {
  const color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
  };
  const [btn, setBtn] = React.useState(color());
  const handleClick = (e) => {
    console.log(e);

    e.target.style.backgroundColor = color();
  };
  const handleClicktwo = () => {
    setBtn(color());
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>change</button>
      <button style={{ backgroundColor: `${btn}` }} onClick={handleClicktwo}>
        change
      </button>
    </div>
  );
};

export default Button;
