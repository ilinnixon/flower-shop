import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { fetchCalendarEvents } from "../utils/googleCalendar";
import { generateBouquet } from "../utils/bouquetGenerator";
import CreateNoteModal from "../components/CreateNoteModal";

type CalendarEvent = {
  id: string;
  summary: string;
  start: {
    date?: string;
    dateTime?: string;
  };
};

type Note = {
  id: string;
  eventId: string;
  eventTitle: string;
  personName: string;
  favoriteFlowers: string;
  deliveryLocation: string;
};

type Flower = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [calendarConnected, setCalendarConnected] =
    useState(false);

  const [selectedEvent, setSelectedEvent] =
    useState<CalendarEvent | null>(null);

  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const saveNote = (note: Note) => {
    const updated = [...notes, note];
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  const getNotesForEvent = (eventId: string) =>
    notes.filter((n) => n.eventId === eventId);

  const isToday = (eventDate: string) => {
    const today = new Date();
    const event = new Date(eventDate);

    return (
      today.getFullYear() === event.getFullYear() &&
      today.getMonth() === event.getMonth() &&
      today.getDate() === event.getDate()
    );
  };

  const connectCalendar = async () => {
    setLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      provider.addScope(
        "https://www.googleapis.com/auth/calendar.readonly"
      );

      const result = await signInWithPopup(auth, provider);
      const credential =
        GoogleAuthProvider.credentialFromResult(result);

      const accessToken = credential?.accessToken;
      if (!accessToken) {
        throw new Error("No Google Calendar access token");
      }

      const data = await fetchCalendarEvents(accessToken);

      setCalendarConnected(true);
      setEvents(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || err.code);
    } finally {
      setLoading(false);
    }
  };

  const todayReminders = events.filter((event) => {
    const date =
      event.start.dateTime || event.start.date;

    if (!date) return false;

    return (
      isToday(date) &&
      getNotesForEvent(event.id).length > 0
    );
  });

  return (
    <div className="px-10 py-16 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-12 text-rose-500 tracking-wide text-center">
        Calendar & Reminders 📅
      </h1>

      {!calendarConnected && !loading && (
        <div className="text-center mb-10">
          <button
            onClick={connectCalendar}
            className="
              bg-gradient-to-r
              from-pink-300
              via-rose-300
              to-pink-400
              text-white
              px-8 py-4
              rounded-full
              shadow-lg
              hover:shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          >
            Connect Google Calendar ✨
          </button>
        </div>
      )}

      {loading && (
        <p className="text-center text-gray-500">
          Loading calendar…
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 mb-6">
          Error: {error}
        </p>
      )}

      {/* Dreamy Reminder Banner */}
      {todayReminders.length > 0 && (
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 p-6 rounded-3xl mb-10 shadow-md">
          {todayReminders.map((event) => {
            const note = getNotesForEvent(event.id)[0];

            const inventory: Flower[] = JSON.parse(
              localStorage.getItem("flowers") || "[]"
            );

            const bouquet = generateBouquet(note, inventory);

            return (
              <div key={event.id}>
                <p className="text-lg font-semibold text-rose-500">
                  🎉 It’s {note.personName}'s special day!
                </p>

                <div className="mt-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                  {bouquet.flowers.length > 0 ? (
                    <>
                      <p className="mb-3 font-medium text-gray-700">
                        Suggested bouquet:
                      </p>

                      <ul className="space-y-1">
                        {bouquet.flowers.map((flower, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            🌸 {flower.name} – ₹{flower.price}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-4 font-semibold text-rose-500">
                        Total: ₹{bouquet.total}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-600">
                      {bouquet.message}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {calendarConnected &&
        !loading &&
        events.length === 0 && (
          <p className="text-center text-gray-500">
            No upcoming events in the next 7 days.
          </p>
        )}

      {/* Floating Event Cards */}
      <div className="grid gap-8">
        {events.map((event) => {
          const eventNotes =
            getNotesForEvent(event.id);

          return (
            <div
              key={event.id}
              className="
                bg-white/90
                backdrop-blur-md
                rounded-[28px]
                shadow-md
                p-8
                border border-pink-100
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-rose-500">
                {event.summary || "Untitled Event"}
              </h3>

              <p className="text-sm text-gray-500 mt-1 mb-4">
                {event.start.dateTime ||
                  event.start.date}
              </p>

              {eventNotes.length > 0 && (
                <div className="bg-pink-50 p-4 rounded-2xl mb-4">
                  {eventNotes.map((note) => (
                    <p
                      key={note.id}
                      className="text-sm text-gray-700"
                    >
                      🎁 {note.personName} —{" "}
                      {note.favoriteFlowers} →
                      {note.deliveryLocation}
                    </p>
                  ))}
                </div>
              )}

              <button
                onClick={() =>
                  setSelectedEvent(event)
                }
                className="text-sm text-rose-400 hover:text-rose-600 transition font-medium"
              >
                + Add note
              </button>
            </div>
          );
        })}
      </div>

      {selectedEvent && (
        <CreateNoteModal
          event={selectedEvent}
          onSave={(note) => {
            saveNote(note);
            setSelectedEvent(null);
          }}
          onClose={() =>
            setSelectedEvent(null)
          }
        />
      )}
    </div>
  );
}
