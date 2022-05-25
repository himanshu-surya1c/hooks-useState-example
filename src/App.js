import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Himanshu");
  return (
    <div>
      <input
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <hr />
      <input value={name} />
    </div>
  );
}

export default App;
