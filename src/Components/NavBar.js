import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchMovies } from "../store/movie/movieSlice";

export default function NavBar() {
  const filterMovies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState("");
  const params = useParams();

  const doFilterFetchMovies = () => {
    dispatch(fetchMovies(params.moviesTitle));
  };

  const handleSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        HendyMovie <span className="sr-only">(current)</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="movies">
              Movies
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to={`search/${params.moviesTitle}`}>
              Search Movies
            </NavLink>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            value={searchVal}
            onChange={handleSearchVal}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => navigate({doFetchMovies})}
          >
            Search
          </button> */}
        </form>
      </div>
    </nav>
  );
}
