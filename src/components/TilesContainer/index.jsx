import { Tile } from "../Tile";
import { tiles } from "../../data";
import "./tilesContainer.css";
import PropTypes from "prop-types";

export const TilesContainer = ({ open }) => {
  // const open = false;
  return (
    <div className={open ? "tiles-container open" : "tiles-container"}>
      {tiles.map((tile, index) => (
        <Tile key={index} src={tile.src} title={tile.title} />
      ))}
    </div>
  );
};

TilesContainer.propTypes = {
  open: PropTypes.bool.isRequired,
};
