import "./openCloseCategoriesButton.css";
import PropTypes from "prop-types";

export const OpenCloseCategoriesButton = ({ open, onClick }) => {
  return (
    <button className="open-close-btn" onClick={onClick}>
      <span>{open ? "Show less categories" : "Show more categories"}</span>
      <img
        className={open ? "chevron-icon up" : "chevron-icon"}
        src="/images/chevron-down.svg"
      />
    </button>
  );
};

OpenCloseCategoriesButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
