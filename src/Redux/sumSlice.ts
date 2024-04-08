import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SumState {
  sum: string;
  historedSum: string;
  aNumber: string;
  bNumber: string;
  sumEqual: string;
  sumOperator: string;
}

const initialState: SumState = {
  sum: "",
  historedSum: "",
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
        state.aNumber = state.aNumber.concat(action.payload);
      }
    },
    setAC: (state) => {
      state.sum = "";
      state.historedSum = "";
      state.aNumber = "";
      state.bNumber = "";
      state.sumEqual = "";
      state.sumOperator = "";
    },
    setDel: (state) => {
      state.sum = state.sum.substring(0, state.sum.length - 1);
      // state.aNumber = state.aNumber.substring(0, state.aNumber.length - 1);
      // state.bNumber = state.bNumber.substring(0, state.bNumber.length - 1);
    },
    setOperator: (state, action: PayloadAction<string>) => {
      state.sum = state.aNumber + action.payload;
      // state.aNumber = state.numberForSum.substring(
      //   0,
      //   state.numberForSum.length - 1
      // );
      state.sumOperator = state.sum.slice(-1);
    },
    setPoint: (state, action) => {
      console.log(state.aNumber.includes(action.payload));
      if (!state.aNumber.includes(action.payload)) {
        state.aNumber = state.aNumber.concat(action.payload);
      } else if (!state.bNumber.includes(action.payload)) {
        state.bNumber = state.bNumber.concat(action.payload);
      }
    },
    setReverse: (state, action) => {
      if (!state.aNumber.includes(action.payload) && !!state.aNumber.length) {
        state.aNumber = action.payload + state.aNumber;
      } else if (
        !state.bNumber.includes(action.payload) &&
        !!state.bNumber.length
      ) {
        state.bNumber = action.payload + state.bNumber;
      }
    },
    setEqual: (state) => {
      if (state.aNumber && state.bNumber) {
        switch (state.sumOperator) {
          case "+":
            const resultPlus = Number(state.aNumber) + Number(state.bNumber);
            state.sumEqual = resultPlus.toString();
            state.aNumber = state.sumEqual;
            state.bNumber = "";
            break;
          case "-":
            const resultMinus = Number(state.aNumber) - Number(state.bNumber);
            state.sumEqual = resultMinus.toString();
            state.aNumber = state.sumEqual;
            state.bNumber = "";
            break;
          case "x":
            const resultMultioly =
              Number(state.aNumber) * Number(state.bNumber);
            state.sumEqual = resultMultioly.toString();
            state.aNumber = state.sumEqual;
            state.bNumber = "";
            break;
          case "/":
            const resultDivis = Number(state.aNumber) / Number(state.bNumber);
            state.sumEqual = resultDivis.toString();
            state.aNumber = state.sumEqual;
            state.bNumber = state.historedSum;
            state.bNumber = "";
            break;
          default:
            break;
        }
      }
    },
  },
});

export const {
  setDigit,
  setAC,
  setDel,
  setOperator,
  setEqual,
  setPoint,
  setReverse,
} = sumSlice.actions;

export default sumSlice.reducer;
