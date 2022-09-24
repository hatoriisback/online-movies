import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movie/movieSlice";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
