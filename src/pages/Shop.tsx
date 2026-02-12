import PageFade from "../components/PageFade";

export default function Shop() {
  return (
    <PageFade>
      <div className="px-10 py-16 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-rose-500 tracking-wide text-center">
          Shop 🌸
        </h1>

        <p className="text-center text-gray-600 mb-16 text-lg">
          Curated bouquets crafted with love and soft pastel elegance.
        </p>

        {/* Coming Soon Preview Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="
            bg-white/90
            backdrop-blur-md
            rounded-[32px]
            shadow-md
            p-8
            border border-pink-100
            hover:shadow-xl
            hover:-translate-y-1
            transition
            duration-300
          ">
            <div className="
              h-48
              rounded-2xl
              bg-gradient-to-br
              from-pink-100
              via-rose-100
              to-orange-100
              mb-6
              flex
              items-center
              justify-center
            ">
              <span className="text-rose-400 text-lg">
                Blush Harmony 💐
              </span>
            </div>

            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Blush Harmony
            </h3>

            <p className="text-sm text-gray-600">
              A romantic blend of roses and tulips in soft pastel tones.
            </p>

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
            >
              Coming Soon ✨
            </button>
          </div>

          {/* Card 2 */}
          <div className="
            bg-white/90
            backdrop-blur-md
            rounded-[32px]
            shadow-md
            p-8
            border border-pink-100
            hover:shadow-xl
            hover:-translate-y-1
            transition
            duration-300
          ">
            <div className="
              h-48
              rounded-2xl
              bg-gradient-to-br
              from-rose-100
              via-pink-100
              to-purple-100
              mb-6
              flex
              items-center
              justify-center
            ">
              <span className="text-rose-400 text-lg">
                Lavender Dream 🌷
              </span>
            </div>

            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Lavender Dream
            </h3>

            <p className="text-sm text-gray-600">
              Soft purples and gentle pinks for unforgettable moments.
            </p>

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
            >
              Coming Soon ✨
            </button>
          </div>

          {/* Card 3 */}
          <div className="
            bg-white/90
            backdrop-blur-md
            rounded-[32px]
            shadow-md
            p-8
            border border-pink-100
            hover:shadow-xl
            hover:-translate-y-1
            transition
            duration-300
          ">
            <div className="
              h-48
              rounded-2xl
              bg-gradient-to-br
              from-orange-100
              via-pink-100
              to-rose-100
              mb-6
              flex
              items-center
              justify-center
            ">
              <span className="text-rose-400 text-lg">
                Sunset Bloom 🌼
              </span>
            </div>

            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Sunset Bloom
            </h3>

            <p className="text-sm text-gray-600">
              Warm peach and coral florals with a glowing sunset feel.
            </p>

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
            >
              Coming Soon ✨
            </button>
          </div>

        </div>

      </div>
    </PageFade>
  );
}
