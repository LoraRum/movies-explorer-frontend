import React, { useState } from "react";
import "./MoviesCard.css";
import PropTypes from "prop-types";

const MoviesCard = ({ title, duration, liked, imageUrl }) => {
  const [like, setLike] = useState(liked);

  return (
    <div className="movies-card">
      <img className="movies-card__img" src={imageUrl} alt={title} />
      <div className="movies-card__container">
        <div className={"movies-card__box"}>
          <h2 className="movies-card__title">{title}</h2>
          <p className="movies-card__time">{duration}</p>
        </div>

        <div
          onClick={() => setLike(!like)}
          className={like ? "movies-card__like_active" : "movies-card__like"}
        ></div>
      </div>
    </div>
  );
};

MoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MoviesCard;
