import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "axios";
import { Card } from "./Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/colleges")
      .then((response) => {
        // Extract only the first 3 items
        const firstThreeCards = response.data.slice(0, 3);
        setCards(firstThreeCards);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(cards);

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
