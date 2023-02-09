import { configureStore } from "@reduxjs/toolkit";
import { primeReducer } from "./main-page/primeReducer";
export const appStore = configureStore({
  reducer: {
    prime: primeReducer,
  },
});
