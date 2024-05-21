import { useState } from "react";
import Header from "./assets/Header";
import Keypad from "./assets/Keypad";

function App() {
  const [displayValue, setDisplayValue] = useState(0);
  return (
    <>
      <Header />
      <input value={displayValue} className="display-field" disabled />
      <Keypad setDisplayValue={setDisplayValue} />
    </>
  );
}

export default App;
