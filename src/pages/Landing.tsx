import PageFade from "../components/PageFade";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <PageFade>
      <div className="min-h-[80vh] flex items-center px-10 py-20 max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-rose-500">
              Never miss a{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                special day
              </span>{" "}
              🌷
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Birthdays, anniversaries, and moments that matter —
              we remember them and prepare the perfect bouquet,
              so you never have to worry again.
            </p>

            <div className="flex gap-6">

              <Link
                to="/calendar"
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
                Get Started ✨
              </Link>

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
                How it Works
              </button>

            </div>
          </div>

          {/* RIGHT HERO CARD */}
          <div className="
              h-[450px]
              rounded-[40px]
              bg-gradient-to-br
              from-pink-100
              via-rose-100
              to-orange-100
              shadow-xl
              flex
              items-center
              justify-center
              backdrop-blur-sm
              relative
              overflow-hidden
            "
          >

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-rose-500 mb-4">
                Floral Moments 🌸
              </h2>
              <p className="text-gray-600">
                Thoughtful bouquets, delivered with love.
              </p>
            </div>

            {/* Soft glow effect */}
            <div className="
              absolute
              w-72 h-72
              bg-pink-200
              rounded-full
              blur-3xl
              opacity-30
              -top-10
              -right-10
            "></div>

          </div>

        </div>
      </div>
    </PageFade>
  );
}
