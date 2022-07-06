import React from "react";

import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return <h1 style={{ marginLeft: "40rem" }}>{count}</h1>;
};

export default Timer;
