import React from "react";

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
    console.log(id);
    const updatedtodo = data.map((each, idx) =>
      idx === id ? { ...each, status: !each.status } : each
    );
    setData(updatedtodo);
  };
  return (
    <div>
      <Todoinput handleAdd={handleAdd} />
      {data.map((each, id) => (
        <Todolist {...each} key={id} id={id} handletoggle={handleToggle} />
      ))}
    </div>
  );
};

export default Todo;
