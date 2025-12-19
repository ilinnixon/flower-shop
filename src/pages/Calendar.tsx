import { useNavigate } from "react-router-dom";
import PageFade from "../components/PageFade";

export default function Calendar() {
  const navigate = useNavigate();

  return (
    <PageFade>
      <div className="page">
        <h1 className="text-4xl font-bold mb-8 text-[#5F7A61]">
          Calendar & Reminders 📅
        </h1>

        <div className="card">
          <p>Upcoming reminders will appear here.</p>

          <button
            className="btn-primary mt-4"
            onClick={() =>
              navigate("/smart-bouquet", {
                state: {
                  name: "Demo",
                  occasion: "Birthday",
                  date: "Today",
                  preferences: "Pastels",
                },
              })
            }
          >
            Prepare Bouquet 🌸
          </button>
        </div>
      </div>
    </PageFade>
  );
}
