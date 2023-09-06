import { useState } from "react";
import { CategoriesContainer, OpenCloseCategoriesButton } from "./components";
import "./App.css";

function App() {
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  return (
    <main>
      <section className="categories-section">
        <h2>Join 2 million+ Australians finding better</h2>
        <p>
          {
            "Finder's team of 40+ experts will help you find the right choices in over 100 categories."
          }
        </p>
        <CategoriesContainer open={isContainerOpen} />
        <OpenCloseCategoriesButton
          onClick={() => setIsContainerOpen(!isContainerOpen)}
          open={isContainerOpen}
        />
      </section>
    </main>
  );
}

export default App;
