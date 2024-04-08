import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store";

function CalcDsiplay() {
  const sumOperator = useSelector(
    (state: RootState) => state.sumReducer.sumOperator
  );
  const aNumber = useSelector((state: RootState) => state.sumReducer.aNumber);
  const bNumber = useSelector((state: RootState) => state.sumReducer.bNumber);
  const sumEqual = useSelector((state: RootState) => state.sumReducer.sumEqual);
  return (
    <>
      <div className="m-auto h-60 bg-white relative">
        <div className="flex absolute bottom-28 right-0 text-2xl pr-5 opacity-50">
          {`${aNumber} ${sumOperator} ${bNumber}`}
        </div>
        <div className="flex absolute bottom-0 right-0 text-6xl pb-2 pr-2">
          {sumEqual ? aNumber : bNumber ? bNumber : aNumber}
        </div>
      </div>
    </>
  );
}

export default CalcDsiplay;
