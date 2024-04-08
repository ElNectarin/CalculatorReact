import React, { Dispatch, SetStateAction } from "react";

interface pageInterface {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function NavPanel({ page, setPage }: pageInterface) {
  const [checkedProperty, setCheckedProperty] = React.useState(false);

  return (
    <div className="flex justify-around align-middle pb-2">
      <div className="cursor-pointer">
        <button type="button" onClick={() => setPage(page - 1)}>
          Calulator
        </button>
      </div>
      <div className="cursor-pointer">
        <button type="button" onClick={() => setPage(page + 1)}>
          Converter
        </button>
      </div>
    </div>
  );
}
