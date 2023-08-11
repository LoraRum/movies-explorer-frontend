import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import FilmImage from "../../../images/films_img.jpg";
import FilmImage2 from "../../../images/Film_image2.jpg";
import Button from "../../GeneralPagesComponent/Button/Button";

const MoviesCardList = () => {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      duration: "1ч 30м",
      liked: false,
      imageUrl: FilmImage,
    },
    {
      id: 2,
      title: "Movie 2",
      duration: "2ч 15м",
      liked: true,
      imageUrl: FilmImage2,
    },
  ];

  return (
    <section className="movies-cards-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          title={movie.title}
          duration={movie.duration}
          liked={movie.liked}
          imageUrl={movie.imageUrl}
        />
      ))}
      <Button type={"more"} to="/">
        Еще
      </Button>
    </section>
  );
};

export default MoviesCardList;
