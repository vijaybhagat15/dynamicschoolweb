// src/redux/slices/section1Slice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface Section1State {
  slides: Slide[];
  loading: boolean;
  error: string | null;
}

const initialState: Section1State = {
  slides: [],
  loading: false,
  error: null,
};

export const fetchSection1Slides = createAsyncThunk(
  "section1/fetchSlides",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/section1");
      return response.data.slides;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message || "Failed to fetch slides");
    }
  }
);

const section1Slice = createSlice({
  name: "section1",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSection1Slides.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSection1Slides.fulfilled, (state, action) => {
        state.loading = false;
        state.slides = action.payload;
      })
      .addCase(fetchSection1Slides.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default section1Slice.reducer;
