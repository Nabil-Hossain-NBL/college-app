import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdmissionForm = ({ collegeId, onClose, collegeName }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/mycollege");
  };

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data, e) => {
    const formData = { ...data, collegeId, collegeName, userId: user?.uid }; // Include collegeId and userId

    fetch("https://college-app-server-phi.vercel.app/admission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convert formData to JSON format
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your application has been submitted.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset(); // Reset form fields
          onClose(); // Close the modal
          handleRedirect();
        } else {
          console.log(result);
          Swal.fire({
            title: "Error!",
            text: result.message || "Something went wrong.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: error.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="flex justify-center h-full">
      <div className="w-full max-w-lg sm:max-w-xl p-5 mt-10 border shadow-lg rounded overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Admission Form
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4" // Use grid-cols-1 on mobile and grid-cols-2 on larger screens
        >
          <div>
            <label className="mr-2">Candidate Name:</label>
            <input
              {...register("candidateName", {
                required: "Candidate name is required",
              })}
              className="w-full p-2 border rounded"
              placeholder="Enter candidate name"
            />
            {errors.candidateName && (
              <span className="text-red-500">
                {errors.candidateName.message}
              </span>
            )}
          </div>

          <div>
            <label className="mr-2">Subject:</label>
            <input
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-2 border rounded"
              placeholder="Enter subject"
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject.message}</span>
            )}
          </div>

          <div>
            <label className="mr-2">Email:</label>
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded"
              placeholder="Enter email"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className="mr-2">Phone Number:</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-2 border rounded"
              placeholder="Enter phone number"
              type="number"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>

          <div className="col-span-1">
            <label className="mr-2">Address:</label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className="w-full p-2 border rounded"
              placeholder="Enter address"
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </div>

          <div>
            <label className="mr-2">Date of Birth:</label>
            <input
              {...register("dob", { required: "Date of birth is required" })}
              className="w-full p-2 border rounded"
              type="date"
            />
            {errors.dob && (
              <span className="text-red-500">{errors.dob.message}</span>
            )}
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="mr-2">Upload Image url:</label>
            <input
              {...register("image", { required: "Image is required" })}
              className="w-full p-2 border rounded"
              type="url"
            />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}
          </div>

          <div className="mt-6 flex justify-center col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
