import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import type { DraftExpense, Value } from "../types";
import { ErrorMessage } from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState<string>("");
  const [previousAmount, setPreviousAmount] = useState<number>(0);

  const { dispatch, state, remainingBudget } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (currentExpense) => currentExpense.id === state.editingId
      )[0];
      setExpense(editingExpense);
      setPreviousAmount(editingExpense.amount);
    }
  }, [state.editingId]);

  const handleDateChange = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (expense.amount - previousAmount > remainingBudget) {
      setError("El gasto no puede ser mayor al presupuesto restante");
      return;
    }

    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({
        type: "add-expense",
        payload: { expense },
      });
    }

    setExpense({
      amount: 0,
      expenseName: "",
      category: "",
      date: new Date(),
    });
    setError("");
    setPreviousAmount(0);
  };

  return (
    <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
      <legend className="uppercase text-center font-black text-2xl border-b-4 py-2 border-blue-500">
        {state.editingId ? "Actualizar gasto" : "Nuevo gasto"}
      </legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          className="bg-slate-200 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          type="text"
          id="amount"
          placeholder="Añade la cantidad del gasto"
          className="bg-slate-200 p-2"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Categoría:
        </label>
        <select
          id="category"
          className="bg-slate-200 p-2"
          name="category"
          onChange={handleChange}
          value={expense.category}
        >
          <option value="">--Seleccione--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Fecha gasto:
        </label>
        <DatePicker
          className="bg-slate-200 p-2 border-0"
          value={expense.date}
          onChange={handleDateChange}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer text-white w-full p-2 uppercase font-bold rounded-lg hover:bg-blue-700 transition-colors"
        value={state.editingId ? "Actualizar gasto" : "Nuevo gasto"}
      />
    </form>
  );
};
