import "./tile.css";
import PropTypes from "prop-types";

export const Tile = ({ src, title, href }) => {
  return (
    <a className="tile" href={href}>
      <img className="tile-icon" src={src} alt="" />
      <p className="tile-title">{title}</p>
    </a>
  );
};

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
