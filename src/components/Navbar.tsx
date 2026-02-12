import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../authContext";

export default function Navbar() {
  const { user, loading } = useAuth();

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google sign-in error:", err);
      alert("Google sign-in failed. Check console.");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm px-12 py-6 flex justify-between items-center border-b border-pink-100">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-semibold tracking-wide text-rose-500"
      >
        flowershop 🌸
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-sm font-medium text-gray-600">

        <Link
          to="/shop"
          className="hover:text-rose-400 transition duration-200"
        >
          Shop
        </Link>

        {loading && <span>Loading…</span>}

        {!loading && user && (
          <>
            <Link
              to="/people"
              className="hover:text-rose-400 transition duration-200"
            >
              People
            </Link>

            <Link
              to="/calendar"
              className="hover:text-rose-400 transition duration-200"
            >
              Calendar
            </Link>

            <Link
              to="/admin"
              className="hover:text-rose-400 transition duration-200"
            >
              Admin
            </Link>

            <button
              onClick={logout}
              className="text-red-400 hover:text-red-600 transition"
            >
              Logout
            </button>
          </>
        )}

        {!loading && !user && (
          <button
            onClick={signIn}
            className="bg-gradient-to-r from-pink-300 to-rose-300 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-200"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
}
