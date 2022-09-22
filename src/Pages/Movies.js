import React, { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=34539ac1&s=pokemon")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <div className="container-fluid wrapper-movies">
      <h1>MOVIES</h1>
      <br />
      <div className="movies-pages">
        <div className="row">
          {movies.map((movie, i) => {
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
          {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
}
