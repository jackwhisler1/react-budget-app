import React, { useContext } from "react";
const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}
export const BudgetsProvider = ({ children }) => {
  return (
    <BudgetsContext.Provider value={{}}>{children}</BudgetsContext.Provider>
  );
};
