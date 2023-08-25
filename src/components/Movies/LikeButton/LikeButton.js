import React, { useState } from "react";
import PropTypes from "prop-types";

const LikeButton = ({ liked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={liked ? "movies-card__like_active" : "movies-card__like"}
    ></button>
  );
};

LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LikeButton;
