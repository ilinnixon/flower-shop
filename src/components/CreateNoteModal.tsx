import { useState } from "react";

type Props = {
  event: any;
  onSave: (note: any) => void;
  onClose: () => void;
};

export default function CreateNoteModal({
  event,
  onSave,
  onClose,
}: Props) {
  const [personName, setPersonName] = useState("");
  const [flowers, setFlowers] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    onSave({
      id: crypto.randomUUID(),
      eventId: event.id,
      eventTitle: event.summary,
      personName,
      favoriteFlowers: flowers,
      deliveryLocation: location,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Create note for {event.summary}
        </h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Person name (e.g. Tim)"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Favorite flowers (e.g. roses, tulips)"
          value={flowers}
          onChange={(e) => setFlowers(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Delivery location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSave}
            className="btn-primary"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}
