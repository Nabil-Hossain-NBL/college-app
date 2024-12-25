import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  const [college, setCollege] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/college/${id}`)
      .then((response) => {
        setCollege(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);
  if (loading) return <p>loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 text-center">
      <figure>
        <img src={college.image} alt="University" />
      </figure>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        {college.name}
      </h2>
      <p>
        <span className="text-xl font-semibold">Admission Date:</span>{" "}
        {college.admission_date}
      </p>
      <div className="text-center ">
        <span className="text-xl font-semibold">Events:</span>
        <div className="text-center">
          {college.events.map((i) => (
            <p key={i.name}>
              {i.name}: {i.description}
            </p>
          ))}
        </div>
      </div>
      <div className="text-center ">
        <span className="text-xl font-semibold">Research:</span>
        <div className="text-center">
          {college.research.map((i) => (
            <p key={i.title}>{i.title}</p>
          ))}
        </div>
      </div>
      <div className="text-center ">
        <span className="text-xl font-semibold">Sports:</span>
        <div className="text-center">
          {college.sports.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </div>
      <span className="text-xl font-semibold">Admission Process:</span>
      <p>{college.admission_process}</p>
    </div>
  );
};

export default CardDetails;
