import PageFade from "../components/PageFade";

export default function Landing() {
  return (
    <PageFade>
      <div className="page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-[#5F7A61]">
              Never miss a{" "}
              <span className="text-[#9CAF88]">special day</span> 🌷
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              Birthdays, anniversaries, and moments that matter —
              we remember them and prepare the perfect bouquet.
            </p>

            <div className="flex gap-4">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">How it Works</button>
            </div>
          </div>

          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#F7C8D0] via-[#E6DFF1] to-[#FFF6EA] shadow flex items-center justify-center">
            <span className="text-xl text-[#5F7A61]">
              Floral Moments 🌸
            </span>
          </div>
        </div>
      </div>
    </PageFade>
  );
}
