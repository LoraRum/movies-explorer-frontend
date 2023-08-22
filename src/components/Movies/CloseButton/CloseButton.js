import PropTypes from "prop-types";
import "./CloseButton.css";

const CloseButton = ({ onClick }) => {
  return <button onClick={onClick} className={"movies-card__delete"}></button>;
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
