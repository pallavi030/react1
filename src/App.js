import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(0);

  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }



  const sizechange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="main">
      <div className="file">
        <h1>Responsive Paragraph Word Counter</h1>
        <br />
        <textarea
          onChange={change}
        ></textarea>
        <br />
        <div id="word-counter">Word Count:{count}</div>
        <br />
      </div>
    </div>
  );
};

export default App;
