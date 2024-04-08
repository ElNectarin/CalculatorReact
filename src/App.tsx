import React, { SetStateAction, Dispatch } from "react";
import "./App.css";
import Calculator from "./Calculator/Calculator";
import NavPanel from "./NavPanel/NavPanel";
import Converter from "./Converter/Converter";

function App() {
  const [page, setPage]: [number, Dispatch<SetStateAction<number>>] =
    React.useState(0);

  const componentList = [<Calculator />, <Converter />];

  return (
    <div className="App bg-yellow-100">
      <div className="size-1/4 m-auto rounded-lg border-solid border-2 mt-2 bg-gray-50">
        <NavPanel page={page} setPage={setPage} />
        {componentList[page]}
      </div>
    </div>
  );
}

export default App;
