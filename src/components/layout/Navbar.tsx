export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-300"></span>

          <h2 className="font-semibold text-xl">
            Mathuppriya
          </h2>
        </div>

        <div className="flex items-center gap-5">

          <button className="w-12 h-12 rounded-full border border-white/10">
            ☀
          </button>

          <button className="text-3xl">
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}