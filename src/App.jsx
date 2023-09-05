import { useState } from "react";
import { TilesContainer, OpenCloseCategoriesButton } from "./components";
import "./App.css";

function App() {
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  return (
    <>
      <TilesContainer open={isContainerOpen} />
      <OpenCloseCategoriesButton
        onClick={() => setIsContainerOpen(!isContainerOpen)}
        open={isContainerOpen}
      />
    </>
  );
}

export default App;
