import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  errorMessages: null,
};

export const fetchPublicProducts = createAsyncThunk(
  "public/fetchPublicProducts",
  async () => {
    const response = await fetch("http://localhost:3000/api/products");
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
