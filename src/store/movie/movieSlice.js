import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (movieTitle, thunkAPI) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}`
    );
    const data = await res.json();

    return data.Search;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export default moviesSlice.reducer;
