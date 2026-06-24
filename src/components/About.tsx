export default function About() {
  return (
    <section id="about" className="py-24 px-5 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0e1a] via-[#0f1424] to-[#0a0e1a]" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest mb-4">
            About Edge Car Hire
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
            <span className="text-white">Calabar's Most</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Trusted Partner</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Founded in the heart of Calabar, Edge Car Hire & Rentals has established itself as the 
            premier choice for discerning travelers and business executives. We understand that 
            transportation is not just about getting from point A to B — it's about the experience, 
            the impression, and the peace of mind that comes with excellence.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Our roots in Big Qua Town run deep. We know Calabar, we know its rhythm, and we know 
            what it takes to navigate this beautiful city with style and efficiency.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <AboutItem icon={<ShieldIcon />} title="Fully Insured" desc="Complete coverage for your peace of mind" />
            <AboutItem icon={<LicenseIcon />} title="Licensed Operators" desc="Certified professional drivers" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10">
            <img
              src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000"
              alt="Luxury car interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-amber-400 text-sm font-semibold mb-1">Since Establishment</div>
              <div className="text-white text-2xl font-serif font-bold">Serving Calabar with Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/30 transition">
      <div className="w-12 h-12 rounded-lg bg-amber-500/20 grid place-items-center text-amber-400">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-white/60">{desc}</div>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function LicenseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M15 8h2M15 12h2M7 16h10" />
    </svg>
  );
}
