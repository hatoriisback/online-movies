import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchMoviesPage = createAsyncThunk(
  "movies/detail/fetchMoviesPage",
  async () => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=34539ac1&s=bible`);
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
