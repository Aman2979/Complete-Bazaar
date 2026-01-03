import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  products: [],
  cart: [],
  orders: [],
  checkoutUrl: null,
  isLoading: false,
  errorMessages: null,
};

/* ===== CUSTOMER DATA ======= */
export const fetchCustomerData = createAsyncThunk(
  "customer/fetchCustomerData",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/api/customer/data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const body = await response.json();

    if (response.ok) {
      return body;
    } else {
      throw new Error(body.error);
    }
  }
);

/* ======== CART ========= */
export const addToCart = createAsyncThunk(
  "customer/addToCart",
  async (productId) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/api/customer/cart/${productId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const body = await response.json();

    if (response.ok) return body;
    throw new Error(body.error);
  }
);

export const removeFromCart = createAsyncThunk(
  "customer/removeFromCart",
  async (productId) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/api/customer/cart/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const body = await response.json();

    if (response.ok) return body;
    throw new Error(body.error);
  }
);

/* =========== ORDER ============= */
export const placeOrder = createAsyncThunk("customer/placeOrder", async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/api/customer/order`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const body = await response.json();

  if (response.ok) return body;
  throw new Error(body.error);
});

/* ===================== SEARCH ===================== */
export const fetchSearchResults = createAsyncThunk(
  "customer/searchProducts",
  async (query, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${BASE_URL}/api/customer/search?q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message);
      }

      return data.data;
    } catch {
      return rejectWithValue("Search failed");
    }
  }
);

/* ============ STRIPE CHECKOUT ============== */

export const createCheckoutSession = createAsyncThunk(
  "customer/createCheckoutSession",
  async (products, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/payment/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ products }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }

      return data.url; // Stripe URL
    } catch {
      return rejectWithValue("Checkout failed");
    }
  }
);

/* ===================== SLICE ===================== */

const customerSlice = createSlice({
  name: "customer",
  initialState,

  reducers: {
    resetCheckoutUrl: (state) => {
      state.checkoutUrl = null;
    },
  },

  extraReducers: (builder) => {
    builder
      /* Fetch Customer Data */
      .addCase(fetchCustomerData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
        state.cart = action.payload.cart;
        state.orders = action.payload.orders;
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages = [action.error.message];
      })

      /* Cart */
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })

      /* Order */
      .addCase(placeOrder.fulfilled, (state) => {
        state.cart = [];
      })

      /* Search */
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages = [action.payload];
      })

      /* Checkout */
      .addCase(createCheckoutSession.pending, (state) => {
        state.isLoading = true;
        state.errorMessages = null;
      })
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkoutUrl = action.payload;
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages = [action.payload];
      });
  },
});

export const { resetCheckoutUrl } = customerSlice.actions;
export default customerSlice.reducer;
