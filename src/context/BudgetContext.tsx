import { useReducer, createContext } from "react";
import {
  budgetReducer,
  BudgetState,
  initialState,
  BudgetActions,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
