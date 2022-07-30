import React from "react";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("kr", { month: "long" });
  const day = date.toLocaleString("kr", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div>
      <div>{year}년</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
