import React from "react";
import { useDispatch } from "react-redux";
import {
  setAC,
  setDel,
  setDigit,
  setEqual,
  setOperator,
} from "../Redux/sumSlice";

interface CalculatorButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const CalcButtons: React.FC<CalculatorButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <div
      className={`rounded-full border-2 size-20 flex items-center justify-around hover:bg-gray-300 duration-300 bg-white ${className}`}
    >
      <button className="font-sans text-4xl" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

const CalcData: React.FC = () => {
  const dispatch = useDispatch();

  // Массив данных с кнопками
  const buttonsData: {
    label: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }[] = [
    { label: "AC", onClick: () => dispatch(setAC()) },
    { label: "Del", onClick: () => dispatch(setDel()) },
    { label: "%", className: "text-green-600" },
    {
      label: "/",
      onClick: () => dispatch(setOperator("/")),
      className: "text-green-600",
    },
    { label: "7", onClick: () => dispatch(setDigit("7")) },
    { label: "8", onClick: () => dispatch(setDigit("8")) },
    { label: "9", onClick: () => dispatch(setDigit("9")) },
    {
      label: "x",
      onClick: () => dispatch(setOperator("x")),
      className: "text-green-600",
    },
    { label: "4", onClick: () => dispatch(setDigit("4")) },
    { label: "5", onClick: () => dispatch(setDigit("5")) },
    { label: "6", onClick: () => dispatch(setDigit("6")) },
    {
      label: "-",
      onClick: () => dispatch(setOperator("-")),
      className: "text-green-600",
    },
    { label: "1", onClick: () => dispatch(setDigit("1")) },
    { label: "2", onClick: () => dispatch(setDigit("2")) },
    { label: "3", onClick: () => dispatch(setDigit("3")) },
    {
      label: "+",
      onClick: () => dispatch(setOperator("+")),
      className: "text-green-600",
    },
    { label: "+-" },
    { label: "0" },
    { label: "." },
    {
      label: "=",
      onClick: () => dispatch(setEqual()),
      className: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-y-3 m-auto place-items-center pb-2 pt-2">
      {buttonsData.map((button, index) => (
        <CalcButtons
          key={index}
          onClick={button.onClick}
          className={button.className}
        >
          {button.label}
        </CalcButtons>
      ))}
    </div>
  );
};

export default CalcData;
