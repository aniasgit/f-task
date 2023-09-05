import "./tile.css";
import PropTypes from "prop-types";

export const Tile = ({ src, title }) => {
  return (
    <a className="tile" href="https://www.finder.com.au/">
      <img className="tile-icon" src={src} alt="" />
      <p className="tile-title">{title}</p>
    </a>
  );
};

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
