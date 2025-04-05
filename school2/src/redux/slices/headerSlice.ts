import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosError } from "axios";
import { BASE_URL } from "../url";

// Define the type for header data
interface HeaderState {
  logo: string;
  name: string;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: HeaderState = {
  logo: "",
  name: "",
  loading: false,
  error: null,
};

// Async thunk to fetch header data
export const fetchHeader = createAsyncThunk("header/fetchHeader", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/header`);
      return response.data.header;
    } catch (error) {
      const err = error as AxiosError; // Explicitly cast the error
      return rejectWithValue(err.response?.data || "Failed to fetch header");
    }
  });

// Create slice
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.logo = action.payload.logo;
        state.name = action.payload.name;
      })
      .addCase(fetchHeader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default headerSlice.reducer;
