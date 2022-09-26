import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMoviesPage } from "../store/movie/movieTitleSlice";

export default function Movies() {
  const fetchedMovies = useSelector((state) => state.moviesTitle.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchMoviesPage());

      document.title = `Movies`.toUpperCase();
    },
    // eslint-disable-next-line
    [dispatch]
  );

  return (
    <div className="container-fluid wrapper-movies">
      <h1>MOVIES</h1>
      <br />
      <div className="movies-pages">
        <div className="row">
          {fetchedMovies.map((movie, i) => {
            return (
              <div
                key={movie.imdbID}
                className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className="card"
                  style={{ width: "18rem", margin: "0 auto" }}
                  onClick={() => navigate(`detail/${movie.imdbID}`)}
                >
                  <img
                    className="card-img-top"
                    src={movie.Poster}
                    alt={movie.Title}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
