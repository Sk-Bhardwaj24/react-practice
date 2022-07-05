import React from "react";

const Uncontrolledform = () => {
  const inptval = React.useRef("");
  console.log(inptval.current);

  const handleoutput = (e) => {
    console.log(e.target);
    console.log(inptval.current);
    console.log(inptval.current.value);
    inptval.current.focus();
  };
  const handleoutputother = () => {
    console.log(inptval.current.focus());
  };
  return (
    <div>
      <input type="text" ref={inptval} />

      <button onClick={(e) => handleoutput(e)}>show</button>
      <button onClick={handleoutputother}>HIde</button>
      <p> {inptval.current.value}</p>
    </div>
  );
};

export default Uncontrolledform;
