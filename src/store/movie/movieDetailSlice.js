import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
};

export const fetchMoviesDetail = createAsyncThunk(
  "movies/search/fetchMoviesDetail",
  async (movieDetail, thunkAPI) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=34539ac1&i=${movieDetail}`
    );
    const data = await res.json();

    return data;
  }
);

const moviesDetailSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesDetail.fulfilled, (state, action) => {
      state.list = { ...action.payload };
    });
  },
});

export default moviesDetailSlice.reducer;