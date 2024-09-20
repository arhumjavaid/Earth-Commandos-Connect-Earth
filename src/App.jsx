import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DataProvider } from "./context/DataProvider";

import Dummy from "./components/Dummy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider>
      <Dummy />
    </DataProvider>
  );
}

export default App;
