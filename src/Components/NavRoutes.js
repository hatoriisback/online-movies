import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import SearchMovies from "../Pages/SearchMovies";

export default function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies">
        <Route path="" element={<Movies />} />
        <Route path="search/:moviesTitle" element={<SearchMovies />} />
      </Route>
    </Routes>
  );
}
