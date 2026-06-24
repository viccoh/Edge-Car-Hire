import { useEffect, useState } from "react";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1424] to-[#0a0e1a]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/8 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)", backgroundSize: "64px 64px" }} />
      </div>

      {/* Background image overlay */}
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-100"
        style={{ transform: `perspective(1000px) rotateX(${tilt.y * 0.5}deg) rotateY(${tilt.x * 0.5}deg)` }}
      >
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600"
          alt="Luxury SUV at night"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest mb-6 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Premium Car Hire in Calabar
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          <span className="block text-white">Move in Style,</span>
          <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Arrive with Purpose</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience luxury transportation in Calabar. From airport transfers to executive travel, 
          we deliver excellence in every journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/2347032225150?text=Hello%20Edge%20Car%20Hire%2C%20I%20would%20like%20to%20book%20a%20ride."
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold overflow-hidden shadow-xl shadow-amber-500/30 hover:shadow-amber-500/60 transition-all hover:-translate-y-1"
          >
            <span className="relative z-10">Book a Ride</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 group-hover:translate-x-1 transition">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-[shimmer_3s_linear_infinite]" />
          </a>
          <a
            href="#fleet"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-amber-500/30 text-white font-semibold hover:bg-amber-500/10 hover:border-amber-500/50 transition"
          >
            View Our Fleet
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <Stat value="50+" label="Premium Vehicles" />
          <Stat value="24/7" label="Availability" />
          <Stat value="100%" label="Satisfaction" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400/60">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
      `}</style>
    </header>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="group">
      <div className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-white/50 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}
