import { EarlyAccessForm } from "./early-access-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
          Coming soon
        </div>

        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Edu<span className="text-red-600">.turkish</span>
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed">
          Discover, compare, and apply to universities in Turkey — all in one
          place.
        </p>

        <EarlyAccessForm />

        <p className="text-sm text-gray-400 mt-4">
          Be the first to know when we launch.
        </p>
      </div>
    </main>
  );
}
