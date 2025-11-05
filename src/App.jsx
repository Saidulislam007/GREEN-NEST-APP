import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import PlantDetails from "./pages/PlantDetails";
import { Toaster } from "react-hot-toast";




function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}


// 🌿 Data fetch function
const fetchPlants = () => fetch("/data/plants.json").then(res => res.json());
const plantsPromise = fetchPlants();

function App() {
  // user state

  return (
    <>
    <Router>
      {/* 🌿 Navbar */}
      <Navbar />

      {/* 🌱 Page Routes */}
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <Routes>
          {/* 🌼 Only Home page will show HeroSection & FeaturedPlants */}
          
          <Route path="/" element={<Home plantsPromise={plantsPromise} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/plant/:id"
            element={
              <PrivateRoute>
                <PlantDetails />
              </PrivateRoute>
            }
          />
          
          <Route path="/logout" element={<Logout />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/profile" element={<Profile />} />
          <Route
          path="/plant/:id"
          element={
            <PrivateRoute>
              <PlantDetails />
            </PrivateRoute>
          }
        />
        </Routes>
      </Suspense>

      {/* 🌾 Footer (common to all pages) */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-xl mt-auto">
        <div>
          {/* 🌐 Social Media Icons */}
          <div className="grid grid-flow-col gap-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 3h-2.5v7.05A10 10 0 0022 12z" />
              </svg>
            </a>

            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.373 2.634 8.112 6.351 9.754-.088-.83-.166-2.105.035-3.01.182-.844 1.175-5.372 1.175-5.372s-.3-.6-.3-1.488c0-1.394.808-2.438 1.813-2.438.856 0 1.27.642 1.27 1.412 0 .86-.547 2.14-.83 3.334-.236.997.5 1.808 1.482 1.808 1.778 0 3.141-1.875 3.141-4.573 0-2.391-1.719-4.063-4.174-4.063-2.843 0-4.515 2.134-4.515 4.337 0 .86.33 1.784.743 2.285.082.097.094.182.07.28-.077.303-.25.997-.285 1.136-.045.182-.146.22-.338.134-1.26-.585-2.046-2.425-2.046-3.908 0-3.178 2.31-6.106 6.662-6.106 3.495 0 6.212 2.492 6.212 5.823 0 3.48-2.186 6.282-5.219 6.282-1.017 0-1.975-.53-2.303-1.153l-.627 2.387c-.227.866-.843 1.948-1.26 2.61.95.294 1.95.453 2.998.453 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
            </a>
          </div>
          <div className="grid grid-flow-col gap-5 mt-2">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Shop</a>
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div>
            <p className="mt-2">© 2025 GreenNest — Nurture Nature at Home 🌿</p>
          </div>
        </div>
      </footer>




    </Router>
    <Toaster position="top-center" />
    </>
  );
}

export default App;
