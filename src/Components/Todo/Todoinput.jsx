import React from "react";

const Todoinput = ({ handleAdd }) => {
  const [title, setTitle] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleAdd(title)}>ADD</button>
    </div>
  );
};

export default Todoinput;
