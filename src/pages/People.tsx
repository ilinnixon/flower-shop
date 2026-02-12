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
      <div className="px-10 py-16 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-rose-500 tracking-wide text-center">
          People & Preferences ❤️
        </h1>

        {/* Add Person Form */}
        <div className="
          bg-white/90
          backdrop-blur-md
          rounded-[32px]
          shadow-lg
          p-10
          mb-14
          border border-pink-100
          max-w-3xl
          mx-auto
        ">

          <div className="grid gap-8">

            <input
              className="
                w-full
                bg-gradient-to-br from-pink-50 to-rose-50
                border border-pink-200
                rounded-full
                px-6 py-4
                shadow-inner
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200/60
                focus:scale-[1.02]
                transition
                duration-300
                placeholder:text-pink-300
              "
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="date"
              className="
                w-full
                bg-gradient-to-br from-pink-50 to-rose-50
                border border-pink-200
                rounded-full
                px-6 py-4
                shadow-inner
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200/60
                focus:scale-[1.02]
                transition
                duration-300
              "
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <textarea
              rows={3}
              className="
                w-full
                bg-gradient-to-br from-pink-50 to-rose-50
                border border-pink-200
                rounded-3xl
                px-6 py-4
                shadow-inner
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200/60
                focus:scale-[1.01]
                transition
                duration-300
                placeholder:text-pink-300
              "
              placeholder="Flower preferences (e.g. roses, tulips)"
              value={form.preferences}
              onChange={(e) =>
                setForm({
                  ...form,
                  preferences: e.target.value,
                })
              }
            />

            <button
              onClick={addPerson}
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
              Save Person ✨
            </button>
          </div>
        </div>

        {/* People Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {people.map((p) => (
            <div
              key={p.id}
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
                {p.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {p.occasion} • {p.date}
              </p>

              {p.preferences && (
                <p className="text-sm text-gray-600 mt-3">
                  🌸 {p.preferences}
                </p>
              )}

              <button
                className="
                  mt-6
                  w-full
                  bg-gradient-to-r
                  from-pink-300
                  to-rose-300
                  text-white
                  px-6 py-3
                  rounded-full
                  shadow-md
                  hover:shadow-lg
                  hover:scale-105
                  transition
                  duration-300
                "
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
