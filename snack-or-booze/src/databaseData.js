import React from "react";

const DrinksAndSnacks = ({ data }) => {
  const { drinks, snacks } = data;

  return (
    <div>
      <h2>Available Drinks:</h2>
      <ul>
        {drinks.map(drink => (
          <li key={drink.id}>
            <strong>{drink.name}</strong>: {drink.description}
          </li>
        ))}
      </ul>
      
      <h2>Available Snacks:</h2>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>
            <strong>{snack.name}</strong>: {snack.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinksAndSnacks