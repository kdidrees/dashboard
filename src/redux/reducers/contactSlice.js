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

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
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
        state.contacts = action.payload;
      })
      .addCase(fetchAllContactsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
