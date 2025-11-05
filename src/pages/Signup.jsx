import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!/(?=.*[A-Z])/.test(password))
      return alert("Password must include an uppercase letter!");
    if (!/(?=.*[a-z])/.test(password))
      return alert("Password must include a lowercase letter!");
    if (password.length < 6)
      return alert("Password must be at least 6 characters!");

    try {
      await createUser(email, password, name, photoURL);
      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Signup failed! " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Photo URL (optional)"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-green-600 font-semibold mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
