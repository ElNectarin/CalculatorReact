import React from "react";
import "./App.css";
import Calculator from "./Calculator/Calculator";
import NavPanel from "./NavPanel/NavPanel";

function App() {
  return (
    <div className="App bg-yellow-100">
      <div className="size-1/4 m-auto rounded-lg border-solid border-2 mt-2 bg-gray-50">
        <NavPanel />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
