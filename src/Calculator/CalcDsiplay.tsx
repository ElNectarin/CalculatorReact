import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store";

function CalcDsiplay() {
  const sum = useSelector((state: RootState) => state.sumReducer.sum);
  const numberForSum = useSelector(
    (state: RootState) => state.sumReducer.numberForSum
  );
  const bNumber = useSelector((state: RootState) => state.sumReducer.bNumber);
  const sumEqual = useSelector((state: RootState) => state.sumReducer.sumEqual);
  return (
    <>
      <div className="m-auto h-60 bg-white relative">
        <div className="flex absolute bottom-28 right-0 text-2xl pr-5 opacity-50">
          {numberForSum}
        </div>
        <div className="flex absolute bottom-0 right-0 text-6xl pb-2 pr-2">
          {!!sum ? sum : sumEqual}
        </div>
      </div>
    </>
  );
}

export default CalcDsiplay;
