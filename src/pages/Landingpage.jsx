
import Navbar from "../components/Navbar";

export default function Landingpage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto flex  max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Welcome
          </p>
          {/* <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            A clean landing page with a responsive navigation bar.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Use the links above to move between pages with React Router, and the
            mobile menu will collapse nicely on smaller screens.
          </p> */}
        </div>
      </main>
    </div>
  );
}