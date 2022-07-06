import React from "react";

const Todolist = ({ todo, status, id, handletoggle }) => {
  return (
    <div>
      <h2>{todo}</h2>
      <span>{status ? "Compleated" : "Not Compleated"}</span>
      <button onClick={() => handletoggle(id)}>Toggle</button>
    </div>
  );
};

export default Todolist;
