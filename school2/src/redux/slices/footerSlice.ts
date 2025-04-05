import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../url";

// Define types
interface Campus {
  title: string;
  subtitle: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
}

interface AffiliatedProgram {
  name: string;
  link: string;
}

interface SocialLink {
  name: string;
  hoverColor: string;
}

interface FooterState {
  campusesTitle: string; // Added title for campuses
  campuses: Campus[];
  affiliatedProgramsTitle: string; // Added title for affiliated programs
  affiliatedPrograms: AffiliatedProgram[];
  socialLinksTitle: string; // Added title for social links
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: FooterState = {
  campusesTitle: "Our Campuses", // Default title
  campuses: [],
  affiliatedProgramsTitle: "Affiliated Programs", // Default title
  affiliatedPrograms: [],
  socialLinksTitle: "Follow Us", // Default title
  socialLinks: [],
  loading: false,
  error: null,
};

// Async thunk to fetch footer data
export const fetchFooter = createAsyncThunk("footer/fetchFooter", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/footer`);
    return response.data.footerData;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.response?.data || "Failed to fetch footer data");
  }
});

// Create slice
const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooter.fulfilled, (state, action) => {
        state.loading = false;
        state.campuses = action.payload.campuses;
        state.affiliatedPrograms = action.payload.affiliatedPrograms;
        state.socialLinks = action.payload.socialLinks;
      })
      .addCase(fetchFooter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default footerSlice.reducer;
