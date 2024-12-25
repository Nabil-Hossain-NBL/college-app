// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Card } from "../Home/Card";
import axios from "axios";

export const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("https://college-app-server-phi.vercel.app/colleges")
      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(colleges);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {colleges?.map((college) => (
            <Card key={college._id} college={college} />
          ))}
        </div>
      </div>
    </>
  );
};
