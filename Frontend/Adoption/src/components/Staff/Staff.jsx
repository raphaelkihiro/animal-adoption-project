
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import AnimalForm from "../../pages/AnimalForm";
import AnimalUpdateForm from "../../pages/UpdateAnimals";
import StaffSignupForm from "./StaffSignupForm";

// Remove the below for now.

// import User from "../../pages/User";
// import CreateAdoptionForm from "../../pages/AdoptionRequest";


const Staff = () => {
  const { user } = useAuth(); // Retrieve user data from context
  

  // Check if user is authenticated and has the 'staff' role
  if (!user || user.role !== "staff") {
    return <Navigate to="/" />; // Redirect to home if unauthorized
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Staff Dashboard
      </h1>
      <div className="flex justify-between w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-6 flex-2 mx-2 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            Add Animal
          </h2>
          <AnimalForm />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex-2 mx-2 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            Update Animal
          </h2>
          <AnimalUpdateForm />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex-2 mx-2 max-h-[400px] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            Staff Signup
          </h2>
          <StaffSignupForm />
        </div>
      </div>
    </div>
  );
};
  

export default Staff;
