

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#17114b] text-white">
      <div className="flex items-center space-x-6 mb-8">
        <span className="text-7xl font-bold text-purple-400 drop-shadow-md">4</span>
        <div className="relative">
          {/* Animated planet */}
          <span className="block w-24 h-24 rounded-full bg-pink-500 shadow-2xl animate-bounce">
            <span className="absolute inset-0 rotate-12 w-full h-1 border-b-4 border-pink-300 rounded-full top-10"></span>
          </span>
        </div>
        <span className="text-7xl font-bold text-purple-400 drop-shadow-md">4</span>
      </div>
      <h2 className="text-xl font-semibold mb-2">Page missing.</h2>
      <p className="mb-6 text-sm text-pink-300 text-center max-w-md">
        We searched the entire universe, but could not find it.
      </p>
      <a
        href="/"
        className="px-6 py-2 rounded-full bg-pink-600 text-white hover:bg-purple-500 transition duration-200"
      >
        Go back to home screen
      </a>
    </div>
  );
}
