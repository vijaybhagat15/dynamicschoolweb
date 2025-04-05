import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FacultyMember {
  id: number;
  image: string;
  name: string;
  subject: string;
}

interface AboutState {
  facultyMembers: FacultyMember[];
  text: {
    Journey1: string;
    Journey2: string;
    Mission: string;
    headimg: string;
  };
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AboutState = {
  facultyMembers: [],
  text: { Journey1: "", Journey2: "", Mission: "",headimg:"" },
  loading: false,
  error: null,
};

// Async thunk to fetch data
export const fetchAboutData = createAsyncThunk("about/fetchData", async () => {
  const response = await axios.get("http://localhost:8000/about");
  return response.data; // Ensure the API response structure matches AboutState
});

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutData.fulfilled, (state, action: PayloadAction<AboutState>) => {
        state.loading = false;
        state.facultyMembers = action.payload.facultyMembers;
        state.text = action.payload.text;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default aboutSlice.reducer;
