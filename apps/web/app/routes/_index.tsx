import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="relative">
      {/* Hero background image */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: 'url("https://i.imgur.com/jAu4GcI.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 " />
      </div>

      {/* Hero content */}
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            TMW.GG
            <span className="block text-2xl font-medium text-gray-200 md:text-3xl">
              Modded Minecraft Server
            </span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Experience Minecraft like never before with our carefully curated mod collection
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/servers"
              className="rounded-lg bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-emerald-700"
            >
              Join Server
            </Link>
            <button
              className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white/10"
              onClick={() => {
                navigator.clipboard.writeText('play.tmw.gg');
              }}
            >
              Copy IP
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
