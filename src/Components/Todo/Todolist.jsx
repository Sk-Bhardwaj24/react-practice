import React from "react";

const Todolist = ({ todo, status, id, handletoggle, handleDelete }) => {
  return (
    <div>
      <h2>{todo}</h2>
      <span>{status ? "Compleated" : "Not Compleated"}</span>
      <button onClick={() => handletoggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <hr />
    </div>
  );
};

export default Todolist;
