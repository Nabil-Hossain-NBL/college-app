import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/college/${id}`)
      .then((response) => {
        setCard(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);
  if (loading) return <p>loading...</p>;
  console.log(card);
  console.log(id);
  return <div>{card.name}</div>;
};

export default CardDetails;
