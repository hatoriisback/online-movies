import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchMoviesPage = createAsyncThunk(
  "movies/detail/fetchMoviesPage",
  async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=bible`
    );
    const data = await res.json();

    return data.Search;
  }
);

const moviesTitleSlice = createSlice({
  name: "moviesTitle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesPage.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export default moviesTitleSlice.reducer;
