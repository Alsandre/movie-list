import React from "react";
import classes from "./Movie.module.css";

const Movie = ({ movie }) => {
  return (
    <li className={classes.movie}>
      <img src={movie.image} alt="movie" width="300px" />
    </li>
  );
};

export default Movie;
