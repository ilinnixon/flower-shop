import { useEffect, useState } from "react";
import { useAuth } from "../authContext";
import { fetchUpcomingEvents } from "../utils/googleCalendar";
import PageFade from "../components/PageFade";

export default function Calendar() {
  const { user } = useAuth();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.accessToken) return;

    fetchUpcomingEvents(user.accessToken)
      .then(setEvents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <PageFade>
      <div className="page">
        <h1 className="text-4xl font-bold mb-8">
          Calendar & Reminders 📅
        </h1>

        {loading && <p>Loading calendar…</p>}

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

              <button className="btn-primary mt-4">
                Prepare Bouquet 🌷
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageFade>
  );
}
