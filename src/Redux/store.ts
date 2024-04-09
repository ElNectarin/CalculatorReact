import { configureStore } from "@reduxjs/toolkit";
import sumReducer from "./sumSlice";
import convertReducer from "./convertSlice";

export const store = configureStore({
  reducer: { sum: sumReducer, convert: convertReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
