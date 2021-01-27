import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const { url } = useRouteMatch();

  return (
    <Link to={`movies/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}

export default MovieDetails;
