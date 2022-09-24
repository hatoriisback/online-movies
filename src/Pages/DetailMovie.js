import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilterMovies } from "../store/movie/movieSlice";

export default function DetailMovie() {
  const filteredMoviesDetail = useSelector((state) => state.movies.list);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchFilterMovies(params.movieDetail));

      document.title = `${valMovieTitle}`;
    },
    // eslint-disable-next-line
    []
  );

  // eslint-disable-next-line
  const filterMovies = filteredMoviesDetail.filter((movie) => {
    if (movie.imdbID === `${params.movieDetail}`) return movie;
  });

  const valMovieTitle = filterMovies.map((movie) => {
    return movie.Title;
  });

  return (
    <div className="container-fluid wrapper-detailmovie">
      <h1>Movie Details</h1>
      <hr />
      {filterMovies.map((movie) => {
        return (
          <ul key={movie.imdbID}>
            <li>{movie.Title}</li>
            <li>{movie.imdbID}</li>
          </ul>
        );
      })}
      <hr />
      {/* <pre>{JSON.stringify(filterMovies, null, 2)}</pre> */}
    </div>
  );
}
