import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SumState {
  sum: string;
  numberForSum: string;
  aNumber: string;
  bNumber: string;
  sumEqual: string;
  sumOperator: string;
}

const initialState: SumState = {
  sum: "",
  numberForSum: "",
  aNumber: "",
  bNumber: "",
  sumEqual: "",
  sumOperator: "",
};

export const sumSlice = createSlice({
  name: "sum",
  initialState,
  reducers: {
    setDigit: (state, action: PayloadAction<string>) => {
      // Проверяем, есть ли оператор
      if (!!state.sumOperator) {
        state.bNumber = state.bNumber.concat(action.payload);
      } else {
        state.sum = state.sum.concat(action.payload);
      }
    },
    setAC: (state) => {
      state.sum = "";
      state.numberForSum = "";
      state.aNumber = "";
      state.bNumber = "";
      state.sumEqual = "";
      state.sumOperator = "";
    },
    setDel: (state) => {
      state.sum = state.sum.substring(0, state.sum.length - 1);
    },
    setOperator: (state, action: PayloadAction<string>) => {
      state.numberForSum = state.sum + action.payload;
      state.aNumber = state.numberForSum.substring(
        0,
        state.numberForSum.length - 1
      );
      state.sum = "";
      state.sumOperator = state.numberForSum.slice(-1);
      console.log(state.numberForSum.slice(-1));
    },
    setEqual: (state) => {
      if (state.aNumber && state.bNumber) {
        switch (state.sumOperator) {
          case "+":
            const resultPlus = Number(state.aNumber) + Number(state.bNumber);
            state.sumEqual = resultPlus.toString();
            state.aNumber = state.sumEqual;
            break;
          case "-":
            const resultMinus = Number(state.aNumber) - Number(state.bNumber);
            state.sumEqual = resultMinus.toString();
            state.aNumber = state.sumEqual;
            break;
          case "x":
            const resultMultioly =
              Number(state.aNumber) * Number(state.bNumber);
            state.sumEqual = resultMultioly.toString();
            state.aNumber = state.sumEqual;
            break;
          case "/":
            const resultDivis = Number(state.aNumber) / Number(state.bNumber);
            state.sumEqual = resultDivis.toString();
            state.aNumber = state.sumEqual;
            break;
          default:
            break;
        }
      }
    },
  },
});

export const { setDigit, setAC, setDel, setOperator, setEqual } =
  sumSlice.actions;

export default sumSlice.reducer;
