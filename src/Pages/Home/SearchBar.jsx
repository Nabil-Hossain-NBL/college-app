import {
  Combobox,
  ComboboxOptions,
  ComboboxOption,
  ComboboxInput,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";

const SearchBar = () => {
  const [colleges, setColleges] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState(null);

  useEffect(() => {
    axios
      .get("https://college-app-server-phi.vercel.app/colleges")
      .then((response) => setColleges(response.data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const filteredColleges =
    query === ""
      ? colleges
      : colleges.filter((college) =>
          college.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Combobox value={selectedCollege} onChange={setSelectedCollege}>
        <ComboboxInput
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          placeholder="Search for a college..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxOptions className="absolute z-10 w-auto mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {filteredColleges.length === 0 ? (
            <div className="px-4 py-2 text-gray-700">No results found</div>
          ) : (
            filteredColleges.map((college) => (
              <ComboboxOption
                key={college._id}
                value={college}
                className={({ active }) =>
                  `px-4 py-2 cursor-pointer ${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }`
                }
              >
                {college.name}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </Combobox>

      {selectedCollege && <Card college={selectedCollege} />}
    </div>
  );
};

export default SearchBar;
