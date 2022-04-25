import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}
export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Adds expense with unique id
  function addExpense(description, amount, budgetId) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }

  // Returns expenses with id matching budgetId
  function getBudgetExpense(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  // Creates a budget if no matching budget name exists
  function addBudget(name, max) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }

  // Removes budget with matching id
  function deleteBudget({ id }) {
    setBudgets(prevBudgets => {
      return prevBudgets.filter(budget => 
        budget.id !== id)
    })
  }

  // Removes expense with matching id
  function deleteExpense({ id }) {
    setExpenses(prevExpenses => {
        return prevExpenses.filter(expense => 
          expense.id !== id)
      })
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        addExpense,
        getBudgetExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
