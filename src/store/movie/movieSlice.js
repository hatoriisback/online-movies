import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const fetchMoviesPage = createAsyncThunk(
    "movies/fetchMovies",
    async () => {
      // console.log(moviesTitle)
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=34539ac1&s=pokemon`
      );
      const data = await res.json();
  
      // console.log(data.Search)
      return data.Search;
    }
  );

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (movieTitle, thunkAPI) => {
    // console.log(moviesTitle)
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=34539ac1&s=${movieTitle}`
    );
    const data = await res.json();

    // console.log(data.Search)
    return data.Search;
  }
);

export const fetchFilterMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (movieDetail, thunkAPI) => {
      // console.log(moviesTitle)
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=34539ac1&s=${movieDetail}`
      );
      const data = await res.json();
  
    //   console.log(data.Search)
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
