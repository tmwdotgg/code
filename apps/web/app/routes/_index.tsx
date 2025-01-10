import { Link } from "@remix-run/react";
import * as motion from "motion/react-client";
import { ChevronDown, MessageCircle, Server, Users, Crown, Gamepad } from "lucide-react";

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen -mt-[120px] pt-[96px]">
        {/* Hero background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://i.imgur.com/jAu4GcI.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent" />
        </div>

        {/* hero content */}
        <div className="relative flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.04, 0.62, 0.23, 0.98]
            }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="mb-4 text-7xl font-bold text-white">
              TMW.GG
              <span className="mt-4 block text-3xl font-medium text-white/80">
                Modded Minecraft Network
              </span>
            </h1>
            <p className="mb-12 text-lg text-white/70">
              Experience modded Minecraft in a unique way.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
              >
                <Link
                  to="/servers"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.location.href = "/servers";
                    }, 120);
                  }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-[#EDA74F]/60 bg-[#EDA74F]/20 px-8 py-3.5 text-base font-semibold text-white/90 transition-all hover:border-[#EDA74F]/80 hover:bg-[#EDA74F]/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#EDA74F]/60 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="relative z-10 flex items-center">
                    <Server className="mr-2 h-5 w-5" />
                    Browse servers
                  </span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
              >
                <button
                  onClick={() => {
                    window.location.href = 'https://discord.gg/tmwgg';
                  }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-white/20 bg-black/40 px-8 py-3.5 text-base font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-black/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Discord
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="relative bg-neutral-900 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Discord Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative flex flex-col rounded-lg border border-white/10 bg-black/40 p-8 transition-all duration-300 hover:border-indigo-500/30 hover:bg-black/50"
            >
              <div className="mb-auto">
                <div className="mb-4 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white/90">Join our Community</h3>
                <p className="text-base text-white/60">
                  Connect with players, get support, and stay updated with the latest news.
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.href = 'https://discord.gg/tmwgg';
                }}
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Discord
              </button>
            </motion.div>

            {/* Shop Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative flex flex-col rounded-lg border border-white/10 bg-black/40 p-8 transition-all duration-300 hover:border-[#EDA74F]/30 hover:bg-black/50"
            >
              <div className="mb-auto">
                <div className="mb-4 text-[#EDA74F] transition-colors duration-300 group-hover:text-[#EDA74F]/90">
                  <Crown className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white/90">Premium Features</h3>
                <p className="text-base text-white/60">
                  Unlock exclusive perks and cosmetics to enhance your gameplay experience.
                </p>
              </div>
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-[#EDA74F]/20 bg-[#EDA74F]/10 px-4 py-2 text-sm font-medium text-[#EDA74F] transition-all duration-300 hover:border-[#EDA74F]/30 hover:bg-[#EDA74F]/20 hover:text-[#EDA74F]/90"
              >
                <Crown className="mr-2 h-4 w-4" />
                View Perks
              </Link>
            </motion.div>

            {/* Play Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative flex flex-col rounded-lg border border-white/10 bg-black/40 p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-black/50"
            >
              <div className="mb-auto">
                <div className="mb-4 text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
                  <Gamepad className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white/90">Start Playing</h3>
                <p className="text-base text-white/60">
                  Browse our modded servers and start your next adventure today.
                </p>
              </div>
              <Link
                to="/servers"
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/20 hover:text-emerald-300"
              >
                <Server className="mr-2 h-4 w-4" />
                Browse Servers
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
