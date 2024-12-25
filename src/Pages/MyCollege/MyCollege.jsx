import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCollege = () => {
  const [collegeDetails, setCollegeDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user?.uid;

  // Fetch college details when the component mounts
  useEffect(() => {
    axios
      .get(
        `https://college-app-server-phi.vercel.app/admissions?userId=${userId}`
      )
      .then((response) => {
        setCollegeDetails(response.data[0]);
      })
      .catch((error) => console.error("Error checking admissions:", error));
  }, [userId]);

  if (!collegeDetails) {
    return <div>nothing to show here</div>;
  }
  console.log(collegeDetails);
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-semibold mb-6">My College Details</h2>
      <div>
        <h3 className="text-xl font-semibold">
          College Name: {collegeDetails.collegeName}
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
      </div>
    </div>
  );
};

export default MyCollege;
