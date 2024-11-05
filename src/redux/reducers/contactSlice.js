import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchAllContactsAsync = createAsyncThunk(
  "contact/fetchAllContactsAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/contacts/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
export const fetchAllDemosAsync = createAsyncThunk(
  "contact/fetchAllDemosAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/contacts/all-demos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
export const fetchAllCompaniesAsync = createAsyncThunk(
  "contact/fetchAllCompaniesAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/companies/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContactsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllContactsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllContactsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllDemosAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDemosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllDemosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCompaniesAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCompaniesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllCompaniesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
