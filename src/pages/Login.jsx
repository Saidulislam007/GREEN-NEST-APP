import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Please fill in all fields!");

    try {
      await login(email, password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Login failed! " + error.message);
    }
  };

  // 🔹 Handle Google Login
  const handleGoogle = async () => {
    try {
      await googleLogin();
      alert("Logged in with Google!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Google login failed! " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Welcome Back
        </h2>

        {/* Email/Password Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-700 text-white w-full"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="btn btn-outline btn-success w-full"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
