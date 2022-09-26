import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=34539ac1&s=avenger")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));

    document.title = `Home`.toUpperCase();
  }, []);

  return (
    <div className="container-fluid wrapper-movies">
      <h1>Latest Movies</h1>
      <br />
      <div className="movies-pages">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div
                key={movie.imdbID}
                className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className="card"
                  style={{ width: "18rem", margin: "0 auto" }}
                >
                  <NavLink to={`${movie.moviesDetail}`}>
                    <img
                      className="card-img-top"
                      src={movie.Poster}
                      alt={movie.Title}
                      // ! not yet finished
                      onClick={() => navigate(`movies/detail/${movie.imdbID}`)}
                    />
                  </NavLink>
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
