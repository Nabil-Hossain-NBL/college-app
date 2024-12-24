import React, { useState } from "react";
import AdmissionForm from "./AdmissionForm";

const colleges = [
  { id: 1, name: "Harvard University" },
  { id: 2, name: "Stanford University" },
  { id: 3, name: "MIT" },
  { id: 4, name: "Oxford University" },
];

const Admission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleApply = (college) => {
    setSelectedCollege(college);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCollege(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{college.name}</h2>
            <button
              onClick={() => handleApply(college)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-10/12 h-full p-6">
            <div className="flex justify-between items-center ">
              <h2 className="text-lg font-semibold">
                Apply to {selectedCollege?.name}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <AdmissionForm
              collegeId={selectedCollege?.id}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
