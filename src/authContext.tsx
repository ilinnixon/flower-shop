import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "./firebase";

type ExtendedUser = User & {
  accessToken?: string;
};

type AuthContextType = {
  user: ExtendedUser | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<ExtendedUser | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      async (firebaseUser: any) => {
        if (firebaseUser) {
          const credential =
            GoogleAuthProvider.credentialFromResult(
              firebaseUser._tokenResponse
            );

          setUser({
            ...firebaseUser,
            accessToken: credential?.accessToken,
          });
        } else {
          setUser(null);
        }

        setLoading(false);
      }
    );

    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
