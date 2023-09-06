import { Tile } from "../Tile";
import { tiles } from "../../data";
import "./categoriesContainer.css";
import PropTypes from "prop-types";

export const CategoriesContainer = ({ open }) => {
  return (
    <div
      className={open ? "categories-container open" : "categories-container"}>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          src={tile.src}
          title={tile.title}
          href="https://www.finder.com.au/"
        />
      ))}
    </div>
  );
};

CategoriesContainer.propTypes = {
  open: PropTypes.bool.isRequired,
};
