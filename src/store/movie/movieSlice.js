import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (moviesTitle, thunkAPI) => {
    // console.log(moviesTitle)
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=34539ac1&s=${moviesTitle}`
    );
    const data = await res.json();

    console.log(data.Search)
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
