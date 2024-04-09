import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface convertInterface {
  firstNumber: number;
  secondNumber: number;
}

const initialState: convertInterface = {
  firstNumber: 0,
  secondNumber: 0,
};

export const convertSlice = createSlice({
  name: "convert",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.firstNumber = action.payload;
    },
    setKg: (state, action: PayloadAction<number>) => {
      state.secondNumber = state.firstNumber * action.payload;
    },
  },
});

export const { setValue, setKg } = convertSlice.actions;

export default convertSlice.reducer;
