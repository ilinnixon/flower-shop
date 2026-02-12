import { useLocation } from "react-router-dom";
import PageFade from "../components/PageFade";
import { recommendBouquet } from "../utils/recommendBouquet";

export default function SmartBouquet() {
  const { state } = useLocation();

  const recommendation = recommendBouquet(
    state?.preferences || "",
    state?.occasion
  );

  return (
    <PageFade>
      <div className="px-10 py-16 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-rose-500 tracking-wide text-center">
          Smart Bouquet for {state?.name} 🎁
        </h1>

        <div className="
          bg-white/90
          backdrop-blur-md
          rounded-[32px]
          shadow-lg
          p-10
          border border-pink-100
        ">

          <div className="space-y-2 text-gray-600 mb-8">
            <p>
              <strong className="text-rose-500">
                Occasion:
              </strong>{" "}
              {state?.occasion}
            </p>
            <p>
              <strong className="text-rose-500">
                Date:
              </strong>{" "}
              {state?.date}
            </p>
          </div>

          {/* Recommendation Highlight */}
          <div className="
            bg-gradient-to-br
            from-pink-100
            via-rose-100
            to-orange-100
            rounded-3xl
            p-8
            shadow-inner
            mb-10
          ">

            <h3 className="text-2xl font-semibold text-rose-500 mb-4">
              {recommendation.title}
            </h3>

            <p className="text-gray-700 leading-relaxed">
              {recommendation.description}
            </p>

          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center">

            <button
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
              Buy Now ✨
            </button>

            <button
              className="
                border border-pink-200
                text-rose-500
                px-8 py-4
                rounded-full
                hover:bg-pink-50
                transition
                duration-300
              "
            >
              Save for Later
            </button>

          </div>

        </div>

      </div>
    </PageFade>
  );
}
