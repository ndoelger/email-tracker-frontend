// SETS LIMIT TO HOW MANY EMAILS TO RETURN
import React from "react";

export const Pagination = ({setLimit}) => {
  return (
    <select
      className="w-md max-w-3xl flex justify-between items-center text-black mt-8 select select-bordered w-full max-w-xs"
      onChange={(e) => setLimit(e.target.value)}>
      <option value={2} selected>
        2
      </option>
      <option selected value={5}>5</option>
      <option value={100}>100</option>
    </select>
  );
};
