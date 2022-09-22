import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../store/movie/movieSlice";

export default function SearchMovies() {
  const filterMovies = useSelector((state) => state.movies.list);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchMovies(params.moviesTitle));
    },
    // eslint-disable-next-line
    []
  );

  // console.log(params);
  return (
    <div className="container-fluid wrapper-searchmovies">
      <h1>Search Keywords : {params.moviesTitle}</h1>
      <br />
      <div className="movies_search-page">
        <div className="row">
          {filterMovies.map((movie, i) => {
            return (
              <div
                key={i}
                className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className="card"
                  style={{ width: "18rem", margin: "0 auto" }}
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
