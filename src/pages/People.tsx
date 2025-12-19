import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageFade from "../components/PageFade";

type Person = {
  id: number;
  name: string;
  occasion: string;
  date: string;
  preferences: string;
};

export default function People() {
  const [people, setPeople] = useState<Person[]>([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    occasion: "Birthday",
    date: "",
    preferences: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("people");
    if (stored) setPeople(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const addPerson = () => {
    if (!form.name || !form.date) return;
    setPeople([...people, { id: Date.now(), ...form }]);
    setForm({
      name: "",
      occasion: "Birthday",
      date: "",
      preferences: "",
    });
  };

  return (
    <PageFade>
      <div className="page">
        <h1 className="text-4xl font-bold mb-8 text-[#5F7A61]">
          People & Preferences ❤️
        </h1>

        <div className="card max-w-2xl mb-12">
          <div className="grid gap-4">
            <input
              className="input"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="date"
              className="input"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <textarea
              className="input"
              placeholder="Flower preferences"
              value={form.preferences}
              onChange={(e) =>
                setForm({ ...form, preferences: e.target.value })
              }
            />

            <button onClick={addPerson} className="btn-primary">
              Save Person
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.id} className="card">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">
                {p.occasion} • {p.date}
              </p>

              <button
                className="btn-primary mt-4 w-full"
                onClick={() =>
                  navigate("/smart-bouquet", { state: p })
                }
              >
                Create Smart Bouquet 🌷
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageFade>
  );
}
