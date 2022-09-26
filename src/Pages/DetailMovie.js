import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchMoviesDetail } from "../store/movie/movieDetailSlice";

export default function DetailMovie() {
  const filteredMoviesDetail = useSelector((state) => state.movieDetails.list);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchMoviesDetail(params.movieDetail));
      document.title = `${filteredMoviesDetail.Title}`;
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="container-fluid wrapper-detailmovie">
      <h1>Movie Details</h1>
      <hr />

      <div className="jumbotron">
        <div
          className="list-detailmovie"
          style={{ width: "auto", height: "30rem", margin: "0 auto" }}
        >
          <div
            className="left-side"
            style={{ textAlign: "left", position: "absolute" }}
          >
            <img
              src={filteredMoviesDetail.Poster}
              alt={filteredMoviesDetail.Title}
            />
          </div>
          <div className="right-side" style={{ textAlign: "right" }}>
            <h1 className="display-4">{filteredMoviesDetail.Title}</h1>
            <p className="lead">Year Released: {filteredMoviesDetail.Year}</p>
            <p className="lead">Genre: {filteredMoviesDetail.Type}</p>

            <p className="lead">
              <NavLink
                className="btn btn-primary btn-lg"
                role="button"
                to="../../movies"
              >
                BACK MOVIES
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
