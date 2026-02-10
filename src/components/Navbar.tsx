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
    <nav className="bg-white shadow px-10 py-5 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">
        flowershop 🌸
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/shop">Shop</Link>

        {loading && <span>Loading…</span>}

        {!loading && user && (
          <>
            <Link to="/people">People</Link>
            <Link to="/calendar">Calendar</Link>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </>
        )}

        {!loading && !user && (
          <button onClick={signIn} className="btn-primary">
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
}
