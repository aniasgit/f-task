import { useState } from "react";
import { TilesContainer, OpenCloseCategoriesButton } from "./components";
import "./App.css";

function App() {
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  return (
    <section className="categories-section">
      <TilesContainer open={isContainerOpen} />
      <OpenCloseCategoriesButton
        onClick={() => setIsContainerOpen(!isContainerOpen)}
        open={isContainerOpen}
      />
    </section>
  );
}

export default App;
