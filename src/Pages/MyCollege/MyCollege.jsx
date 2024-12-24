import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get dynamic params from the route

const MyCollege = () => {
  const { collegeId } = useParams(); // Get collegeId from route params
  const [collegeDetails, setCollegeDetails] = useState(null);

  // Fetch college details when the component mounts
  useEffect(() => {
    fetch(`http://localhost:5000/college/${collegeId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCollegeDetails(data.college); // Store the college details in state
        }
      })
      .catch((error) => {
        console.error("Error fetching college details:", error);
      });
  }, [collegeId]);

  if (!collegeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-semibold mb-6">My College Details</h2>
      <div>
        <h3 className="text-xl font-semibold">
          College Name: {collegeDetails.name}
        </h3>
        <p>
          <strong>Email:</strong> {collegeDetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {collegeDetails.phone}
        </p>
        <p>
          <strong>Address:</strong> {collegeDetails.address}
        </p>
        <p>
          <strong>Subjects Offered:</strong>{" "}
          {collegeDetails.subjects.join(", ")}
        </p>
        {/* Add any other relevant details */}
      </div>
    </div>
  );
};

export default MyCollege;
