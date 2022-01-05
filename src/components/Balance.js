import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .reduce((acc, curr) => {
      return (acc = acc + curr.amount);
    }, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your balance</h4>
      <h1>${total}</h1>
    </>
  );
};
