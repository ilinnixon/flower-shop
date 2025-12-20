import type { PropsWithChildren } from "react";
import { useAuth } from "./authContext";

export default function ProtectedRoute({
  children,
}: PropsWithChildren) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-10">Loading…</div>;
  }

  if (!user) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Please sign in 🌸
        </h2>
        <p>Google login is required.</p>
      </div>
    );
  }

  return <>{children}</>;
}
