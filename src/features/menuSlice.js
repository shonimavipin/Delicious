import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch menu data from your backend
export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await axios.get("http://localhost:5000/api/menu/");
  return response.data;
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    breakfast: [],
    lunch: [],
    dinner: [],
    desserts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.breakfast = action.payload.breakfast || [];
        state.lunch = action.payload.lunch || [];
        state.dinner = action.payload.dinner || [];
        state.desserts = action.payload.desserts || [];
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
