import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  function handleminus() {
    console.log(count);
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function alertx() {
    setCount(count + 1);
    console.log(count);
  }

  useEffect(() => {
    if (count === 5) {
      alert("Stop");
    }
  });

  return (
    <div className="home">
      <h1>Katias home page</h1>
      <h2>Who is Katia?</h2>
      <p>Welcome to my page</p>
      <div>
        <img src="./1.jpg" alt="converse shoes" width="240" height="128"></img>
      </div>
      <button onClick={() => alertx()}>+</button>
      <button onClick={() => handleminus()}>-</button>

      <div>{count}</div>
    </div>
  );
}

export default Home;
