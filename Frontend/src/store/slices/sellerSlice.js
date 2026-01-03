import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  products: [],
  isLoading: false,
  errorMessages: null,
};

export const fetchSellerProducts = createAsyncThunk(
  "seller/fetchSellerProducts",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/api/seller/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
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

const sellerSlice = createSlice({
  name: "seller",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchSellerProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages = [action.error.message];
      });
  },
});

export const { addProduct, deleteProduct } = sellerSlice.actions;
export default sellerSlice.reducer;
