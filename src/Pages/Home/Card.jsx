import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ card }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={card.image} alt="University" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <Link to={`/details/${card._id}`}>
            <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
