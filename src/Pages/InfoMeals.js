import React from "react";

const InfoMeals = ({ meal }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
  } = meal;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="w-72 mx-auto">
          <img className="rounded-2xl mt-2" src={strMealThumb} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>{strCategory}</p>
          <p>{strArea}</p>
          <small>{strInstructions.slice(0,150)}</small>
          <p><small>{idMeal}</small></p>
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-primary to-accent border-none text-white btn-xs">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMeals;
