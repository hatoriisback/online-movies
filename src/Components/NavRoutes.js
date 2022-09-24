import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import SearchMovies from "../Pages/SearchMovies";
import DetailMovie from "../Pages/DetailMovie";

export default function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="movies">
        <Route path="" element={<Movies />} />
        <Route path="search/:movieTitle" element={<SearchMovies />} />
        <Route path="detail/:movieDetail" element={<DetailMovie />} />
      </Route>
    </Routes>
  );
}
