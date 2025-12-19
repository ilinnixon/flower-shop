import { useLocation } from "react-router-dom";
import PageFade from "../components/PageFade";
import { recommendBouquet } from "../utils/recommendBouquet";

export default function SmartBouquet() {
  const { state } = useLocation();
  const recommendation = recommendBouquet(
    state.preferences || "",
    state.occasion
  );

  return (
    <PageFade>
      <div className="page">
        <h1 className="text-4xl font-bold mb-6 text-[#5F7A61]">
          Smart Bouquet for {state.name} 🎁
        </h1>

        <div className="card max-w-xl">
          <p>
            <strong>Occasion:</strong> {state.occasion}
          </p>
          <p>
            <strong>Date:</strong> {state.date}
          </p>

          <div className="bg-[#E6DFF1] rounded-xl p-4 mt-6">
            <h3 className="text-xl font-semibold">
              {recommendation.title}
            </h3>
            <p>{recommendation.description}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-outline">Save</button>
          </div>
        </div>
      </div>
    </PageFade>
  );
}
