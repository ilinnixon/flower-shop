import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../authContext";

export default function Navbar() {
  const { user } = useAuth();

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-white shadow px-10 py-5 flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold text-[#5F7A61]">
        Bloom<span className="text-[#F7C8D0]">Reminder</span>
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
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || ""}
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={logout}
              className="text-sm text-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={signIn}
            className="px-6 py-2 rounded-full bg-[#9CAF88] text-white"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
}
