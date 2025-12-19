import { useAuth } from "./authContext";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Please sign in to continue 🌸
        </h2>
        <p className="text-gray-600">
          This feature is available after Google sign-in.
        </p>
      </div>
    );
  }

  return children;
}
