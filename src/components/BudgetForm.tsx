import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add-budget", payload: { budget } });
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Añade tu presupuesto"
          name="budget"
          value={budget}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input
        type="submit"
        value="Añadir"
        className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-black w-full p-2 uppercase rounded-lg transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        name="submit"
        disabled={isValid}
      />
    </form>
  );
};

export default BudgetForm;
