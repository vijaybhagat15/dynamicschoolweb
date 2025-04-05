import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../url";

// Define the types
interface School {
  name: string;
  image: string;
}

interface SchoolsData {
  Bangalore: School[];
  Mumbai: School[];
  Delhi: School[];
}

interface SchoolState {
  schoolsData: SchoolsData | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: SchoolState = {
  schoolsData: null,
  loading: false,
  error: null,
};

// Thunk to fetch school data
export const fetchSchoolData = createAsyncThunk(
  "school/fetchSchoolData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/school`);
      return response.data.schoolsData;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  }
);

// Slice
const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchoolData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchoolData.fulfilled, (state, action) => {
        state.loading = false;
        state.schoolsData = action.payload;
      })
      .addCase(fetchSchoolData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default schoolSlice.reducer;
