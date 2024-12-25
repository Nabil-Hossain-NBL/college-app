import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Card } from "./Card";
import Gallery from "./Gallery";

const Home = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch the first 3 colleges or filtered results
  const fetchColleges = (query = "") => {
    setLoading(true);
    setError(null);

    const url = query
      ? `http://localhost:5000/colleges?name=${encodeURIComponent(query)}` // If search query exists, filter colleges
      : "http://localhost:5000/colleges"; // Otherwise, fetch all colleges

    axios
      .get(url)
      .then((response) => {
        const firstThreeCards = query
          ? response.data
          : response.data.slice(0, 3); // Show all results for search; otherwise, first 3
        setColleges(firstThreeCards);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
        setError("Failed to load colleges. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchColleges(); // Fetch the first 3 colleges on initial render
  }, []);

  const handleSearch = (query) => {
    fetchColleges(query); // Fetch colleges based on search query
  };

  return (
    <>
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading Indicator */}
      {loading && <div>Loading colleges...</div>}

      {/* Error Message */}
      {error && <div>{error}</div>}

      {/* College Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {colleges.length === 0 ? (
          <div>No colleges found</div> // Message when no colleges are found
        ) : (
          colleges.map((college) => (
            <Card key={college._id} college={college} />
          ))
        )}
      </div>

      <Gallery />
    </>
  );
};

export default Home;
