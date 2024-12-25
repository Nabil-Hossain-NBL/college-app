import React, { useContext, useEffect, useState } from "react";
import AdmissionForm from "./AdmissionForm";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [disable, setDisable] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const userId = user?.uid;
  const navigate = useNavigate();

  // Fetch colleges data
  useEffect(() => {
    axios
      .get("https://college-app-server-phi.vercel.app/colleges")
      .then((response) => {
        setColleges(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://college-app-server-phi.vercel.app/admissions?userId=${userId}`
      )
      .then((response) => {
        if (response.data.length >= 1) {
          setDisable(true); // Disable if admissions exist for the user
        }
      })
      .catch((error) =>
        console.error("Error checking admissions by user ID:", error)
      );
  }, [userId]);

  const handleApply = (college) => {
    if (user) {
      setSelectedCollege(college);
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCollege(null);
  };

  if (loading) {
    return <div>Loading colleges...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{college.name}</h2>
            {disable ? (
              <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded ">
                Can't Apply
              </button>
            ) : (
              <button
                onClick={() => handleApply(college)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Apply
              </button>
            )}
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
              collegeName={selectedCollege.name}
              collegeId={selectedCollege?._id}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
