import React from "react";
import SpendItem from "../SpendItem.js/SpendItem";
import "./SpendList.css";

const SpendList = () => {
  const [spendList, setSpendList] = React.useState([
    { name: "Gasolina", amount: 200, id: 1 },
    { name: "Netflix", amount: 15, id: 2 },
    { name: "Movil", amount: 30, id: 3 },
  ]);

  //hooking to objects -  the storage area for states:
  const [newSpend, setNewSpend] = React.useState({
    name: "",
    amount: 0,
  });

  //Function to add an element to the list:
  const addNewSpend = (event) => {
    event.preventDefault();
    console.log("prevent default refresh on button click");

    const newSpendAdd = {
      ...newSpend,
      id: [spendList.length - 1].id + 1,
    };

    //DON'T DO THIS: Immutability(?) issues! - don't modify states.
    //spendList.push(newSpendAdd)

    //Correct form
    setSpendList([...spendList, newSpendAdd]);

    //Reset and clean form after entry:
    setNewSpend({
      name: "",
      amount: 0,
    });
  };



  //HTML BELOW:
  return (
    <div className="spend-list">
      <h2 className="spend-list__title">Listado de gastos estimados</h2>
      
      {/*List of expenses*/}
      {spendList.map((spend) => (
        <SpendItem key={spend.id} spend={spend}></SpendItem>
      ))}

      {/*Add expenses form*/}
      <h2 className="spend-list__title">Añadir nuevo gasto</h2>
      {/* onSubmit={(event) => event.preventDefault()} = prevents full reload on form button click. */}
      <form
        className="spend-list__form"
        onSubmit={(event) => {
          addNewSpend(event);
        }}
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
