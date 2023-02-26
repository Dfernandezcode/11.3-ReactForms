import React from "react";
import "./SpendList.css";

const SpendList = () => {
  const [spendList, setSpendList] = React.useState([
    { name: "Gasolina", amount: 200, id: 1 },
    { name: "Netflix", amount: 15, id: 2 },
    { name: "Movil", amount: 30, id: 3 },
  ]);

  //hooking to objects
  const [newSpend, setNewSpend] = React.useState({
    name: "",
    amount: 0,
  });

  return (
    <div className="spend-list">
      <h2 className="spend-list__title">Listado de gastos estimados</h2>

      {spendList.map((spend) => (
        <div className="spend-list__element">
          <strong>{spend.name}</strong> - {spend.amount}
        </div>
      ))}

      <h2 className="spend-list__title">Añadir nuevo gasto</h2>
      {/* onSubmit={(event) => event.preventDefault()} = prevents full reload on form button click. */}
      <form
        className="spend-list__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <p className="spend-list__form-field">
          <label className="spend-list__form-field--title">
            Nombre del gasto:
          </label>
          <input
            className="spend-list__form-field--input"
            type="text"
            value={newSpend.name}
            onChange={(event) =>
              setNewSpend({
                ...newSpend,
                name: event.target.value,

                //watch the order!
                //In summary: onChange does a callback to the (event) and uses it to build and object with updated values.
              })
            }
          />
        </p>
        <p className="spend-list__form-field">
          <label className="spend-list__form-field--title">Importe:</label>
          <input
            className="spend-list__form-field--input"
            type="number"
            value={newSpend.amount}
            onChange={(event) =>
              setNewSpend({
                ...newSpend,
                amount: event.target.value,
              })
            }
          />
        </p>

        <button className="spend-list__form-field--submit" type="submit">
          Añadir gasto
        </button>
      </form>
    </div>
  );
};

export default SpendList;
