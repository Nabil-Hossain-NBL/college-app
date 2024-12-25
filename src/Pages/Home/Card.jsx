import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ college }) => {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure>
        <img src={college.image} alt="University" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college.name}</h2>
        <p>Admission Date: {college.admission_date}</p>
        <div className="flex gap-2">
          Events:{" "}
          <div className="flex gap-4">
            {college.events.map((i) => (
              <p key={i.name}>{i.name}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          Research:{" "}
          <div className="flex gap-4">
            {college.research.map((i) => (
              <p key={i.title}>{i.title}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          Sports:{" "}
          <div className="flex gap-4">
            {college.sports.map((i) => (
              <p key={i}>{i}</p>
            ))}
          </div>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/details/${college._id}`}>
            <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
