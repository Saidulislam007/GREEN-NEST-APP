import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null; // Wait until redirect

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-28 h-28 mx-auto rounded-full border-4 border-green-500 shadow-md mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {user.displayName || "No Name Found"}
        </h2>
        <p className="text-gray-700 text-sm mb-6">{user.email}</p>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="btn btn-error text-white w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
