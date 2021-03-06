import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetsContext";

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce(
    (total, expense) => total + expense.description.amount,
    0
  );
  const max = budgets.reduce(
      (total, budget) => total + budget.name.max, 0
  )
  if (max === 0) return null;
  return <BudgetCard gray name="Total" amount={amount} max={max} hideButtons={true}/>;
}
