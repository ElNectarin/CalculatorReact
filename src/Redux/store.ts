import { configureStore } from "@reduxjs/toolkit";
import sumReducer from "./sumSlice";

export const store = configureStore({
  reducer: { sumReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
