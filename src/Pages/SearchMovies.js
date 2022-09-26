import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchMovies } from "../store/movie/movieSlice";

export default function SearchMovies() {
  const fetchedMovies = useSelector((state) => state.movies.list);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    () => {
      dispatch(fetchMovies(params.movieTitle));

      document.title = `Searching ${params.movieTitle}`.toUpperCase();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="container-fluid wrapper-searchmovies">
      <h1>Search Keywords : {params.movieTitle}</h1>
      <br />
      <div className="movies_search-page">
        <div className="row">
          {fetchedMovies.map((movie) => {
            return (
              <div
                key={movie.imdbID}
                className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className="card"
                  style={{ width: "18rem", margin: "0 auto" }}
                  onClick={() => navigate(`../detail/${movie.imdbID}`)}
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
      <Outlet />
    </div>
  );
}
