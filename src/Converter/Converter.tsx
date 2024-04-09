import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setKg, setValue } from "../Redux/convertSlice";

export default function Converter() {
  const dispatch = useDispatch();
  const grams = useSelector((state: RootState) => state.convert.firstNumber);
  const kgrams = useSelector((state: RootState) => state.convert.secondNumber);

  const handleGramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      dispatch(setValue(value));
      dispatch(setKg(value / 1000));
    } else {
      dispatch(setValue(""));
      dispatch(setKg(0));
    }
  };

  const handleKilogramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      dispatch(setKg(value));
      dispatch(setValue(value * 1000));
    } else {
      dispatch(setKg(0));
      dispatch(setValue(""));
    }
  };

  return (
    <div className="m-auto h-60 bg-white relative">
      <div>
        <TextField
          label="Grams"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          value={grams}
          onChange={handleGramsChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">g</InputAdornment>,
          }}
        />

        <TextField
          label="Kilograms"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          value={kgrams}
          onChange={handleKilogramsChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}
