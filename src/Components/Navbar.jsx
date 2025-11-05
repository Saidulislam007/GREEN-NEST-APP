import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  console.log("Current user:", user); // 👈 এখন এখানে user আসা উচিত!

  return (
    <div className="flex justify-between navbar bg-base-300 px-6 shadow-sm">
      <div className="">
        <Link to="/" className="text-2xl font-bold text-green-700">
          🌿 GreenNest
        </Link>
      </div>

      
        <div className="hidden gap-4 text-[18px] md:flex">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/plants" className="hover:text-green-600">Plants</Link>
          <Link to="/profile" className="hover:text-green-600">My Profile</Link>
        </div>

        <div>
          {user ? (
            <>

              <button onClick={logout} className="btn btn-[18px] text-[18px] bg-green-600 text-white hover:bg-green-700">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-[18px] mx-1 bg-green-600 text-white hover:bg-green-700">Login</Link>
              <Link to="/signup" className="btn btn-[18px] btn-outline border-green-600 text-green-700">Signup</Link>
            </>
          )}
        </div>
      
    </div>
  );
};

export default Navbar;
