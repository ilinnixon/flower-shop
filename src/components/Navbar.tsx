import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../authContext";

export default function Navbar() {
  const { user } = useAuth();

  const signIn = async () => {
    const provider = new GoogleAuthProvider();

    // ✅ Google Calendar read access
    provider.addScope(
      "https://www.googleapis.com/auth/calendar.readonly"
    );

    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-white shadow px-10 py-5 flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold">
        flowershop 🌸
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/shop">Shop</Link>

        {user && (
          <>
            <Link to="/people">People</Link>
            <Link to="/calendar">Calendar</Link>
          </>
        )}

        {user ? (
          <button onClick={logout} className="text-red-500">
            Logout
          </button>
        ) : (
          <button onClick={signIn} className="btn-primary">
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
}
