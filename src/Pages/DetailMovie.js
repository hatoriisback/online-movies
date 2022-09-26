import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchMoviesDetail } from "../store/movie/movieDetailSlice";

export default function DetailMovie() {
  const filteredMoviesDetail = useSelector((state) => state.movieDetails.list);
  const params = useParams();
  const dispatch = useDispatch();
  const title = `${filteredMoviesDetail.Title}`

  useEffect(
    () => {
      dispatch(fetchMoviesDetail(params.movieDetail))
      document.title = title
    },
    // eslint-disable-next-line
    [title]
  );

  return (
    <div className="container-fluid wrapper-detailmovie">
      <h1>Movie Details</h1>
      <hr />

      <div className="jumbotron">
        <div
          className="list-detailmovie"
          style={{ width: "auto", minHeight: "30rem", margin: "0 auto" }}
        >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                className="left-side"
                style={{ textAlign: "left", position: "absolute" }}
              >
                <img
                  style={{ height: "auto" }}
                  src={filteredMoviesDetail.Poster}
                  alt={filteredMoviesDetail.Title}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                className="right-side"
                style={{ textAlign: "justify" }}
              >
                <h1 className="display-4">{filteredMoviesDetail.Title}</h1>
                <p className="lead">
                  Year Released: {filteredMoviesDetail.Year}
                </p>
                <p className="lead">Genre: {filteredMoviesDetail.Type}</p>
                <hr className="my-4" />
                <p style={{ textAlign: "left" }}>
                  Conclusions : {filteredMoviesDetail.Plot}
                </p>
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
      </div>
    </div>
  );
}
