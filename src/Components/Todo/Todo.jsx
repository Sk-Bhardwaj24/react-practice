import React from "react";
import Timer from "../Timer";

import Todoinput from "./Todoinput";
import Todolist from "./Todolist";

const Todo = () => {
  const [data, setData] = React.useState([]);
  const handleAdd = (title) => {
    const payload = {
      todo: title,
      status: false,
    };
    setData([...data, payload]);
  };
  const handleToggle = (id) => {
    const updatedtodo = data.map((each, idx) =>
      idx === id ? { ...each, status: !each.status } : each
    );
    setData(updatedtodo);
  };
  const handleDelete = (id) => {
    let updatedtodo = data.filter((each, idx) => idx !== id);
    setData(updatedtodo);
  };
  return (
    <div>
      <Timer />
      <Todoinput handleAdd={handleAdd} />
      {data.map((each, id) => (
        <Todolist
          {...each}
          key={id}
          id={id}
          handletoggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Todo;
