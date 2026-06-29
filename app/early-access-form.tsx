"use client";

export function EarlyAccessForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
      >
        Get early access
      </button>
    </form>
  );
}
