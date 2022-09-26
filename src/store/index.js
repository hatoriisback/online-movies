import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movie/movieSlice";
import moviesTitleReducer from "./movie/movieTitleSlice";
import moviesDetailReducer from "./movie/movieDetailSlice";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: moviesDetailReducer,
    moviesTitle: moviesTitleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
