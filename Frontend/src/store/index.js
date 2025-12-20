import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sellerReducer from "./slices/sellerSlice";
import customerReducer from "./slices/customerSlice";
import publicReducer from "./slices/publicSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    seller: sellerReducer,
    customer: customerReducer,
    public: publicReducer,
  },
});

export default store;
