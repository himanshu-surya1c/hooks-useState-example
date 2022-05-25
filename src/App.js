import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Himanshu");
  const [count, setCount] = useState(0);

  // const Increment = () =>{
  //   const newValue = count+1;
  //   setCount(newValue);
  // }
  return (
    <div>
      <input
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <hr />
      <input value={name} />
      <hr />
      <hr />
      <h2>Initial Value : {count}</h2>
      <span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <h3> New Value : {count}</h3>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
        <h3> New Value : {count}</h3>
      </span>
    </div>
  );
}

export default App;
