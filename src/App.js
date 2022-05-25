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
      <h1>{count}</h1>
      <span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </span>
    </div>
  );
}

export default App;
