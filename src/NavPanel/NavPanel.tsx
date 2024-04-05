import React from "react";

export default function NavPanel() {
  const [checkedProperty, setCheckedProperty] = React.useState(false);

  return (
    <div className="flex justify-around align-middle pb-2">
      <div className="cursor-pointer">
        <button type="button">Calulator</button>
      </div>
      <div className="cursor-pointer">
        <button type="button">Converter</button>
      </div>
    </div>
  );
}
