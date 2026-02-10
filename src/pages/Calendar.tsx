import { useEffect, useState } from "react";
import { useAuth } from "../authContext";
import { fetchUpcomingEvents } from "../utils/googleCalendar";
import PageFade from "../components/PageFade";

export default function Calendar() {
  const { user } = useAuth();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      if (!user) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      try {
        console.log("USER:", user);
        console.log(
          "ACCESS TOKEN:",
          (user as any).accessToken
        );

        if (!(user as any).accessToken) {
          throw new Error(
            "No Google access token found"
          );
        }

        const data = await fetchUpcomingEvents(
        (user as any).googleAccessToken
        );


        console.log("CALENDAR DATA:", data);
        setEvents(data || []);
      } catch (err: any) {
        console.error("Calendar fetch failed:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [user]);

  return (
    <PageFade>
      <div className="page">
        <h1 className="text-4xl font-bold mb-8">
          Calendar & Reminders 📅
        </h1>

        {loading && <p>Loading calendar…</p>}

        {error && (
          <p className="text-red-600">
            Error: {error}
          </p>
        )}

        {!loading && !error && events.length === 0 && (
          <p>No upcoming events found.</p>
        )}

        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.id} className="card">
              <h3 className="text-xl font-semibold">
                {event.summary || "Untitled Event"}
              </h3>

              <p className="text-sm text-gray-500">
                {event.start?.dateTime ||
                  event.start?.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageFade>
  );
}
