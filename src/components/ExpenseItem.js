import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const month = date.toLocaleString("kr", { month: "long" });
  const day = date.toLocaleString("kr", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{year}년</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
