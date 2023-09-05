import { Tile } from "./components";
import { tiles } from "./data";
import "./App.css";

function App() {
  return tiles.map((tile, index) => (
    <Tile key={index} src={tile.src} title={tile.title} />
  ));
}

export default App;
