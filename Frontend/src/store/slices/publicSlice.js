import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  products: [],
  isLoading: false,
  errorMessages: null,
};

export const fetchPublicProducts = createAsyncThunk(
  "public/fetchPublicProducts",
  async () => {
    const response = await fetch(`${BASE_URL}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();
    if (response.status === 200) {
      return body;
    } else {
      throw new Error(body.error);
    }
  }
);

const publicSlice = createSlice({
  name: "public",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicProducts.pending, (state) => {
        state.isLoading = true;
        // state.errorMessages = null;
      })
      .addCase(fetchPublicProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchPublicProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages = [action.payload];
      });
  },
});

export default publicSlice.reducer;
