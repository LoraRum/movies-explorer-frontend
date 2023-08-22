import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesSave.css";
import SearchForm from "../SearchForm/SearchForm";
import CloseButton from "../CloseButton/CloseButton";
import FilmImage from "../../../images/films_img.jpg";
import FilmImage2 from "../../../images/Film_image2.jpg";

const MoviesSave = () => {
  const savedMovies = [
    {
      id: 1,
      title: "Liked Movie 1",
      duration: "2ч 5м",
      imageUrl: FilmImage,
    },
    {
      id: 2,
      title: "Liked Movie 2",
      duration: "1ч 45м",
      imageUrl: FilmImage2,
    },
  ];

  return (
    <section className="movies-cards-list">
      <SearchForm />
      {savedMovies.map((movie) => (
        <MoviesCard
          key={movie.id}
          title={movie.title}
          duration={movie.duration}
          liked={true}
          imageUrl={movie.imageUrl}
          isSaved={true}
        >
          <CloseButton onClick={onclick} />
        </MoviesCard>
      ))}
      <div className={"movies-save__interval"}></div>
    </section>
  );
};

export default MoviesSave;
