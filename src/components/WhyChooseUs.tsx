const reasons = [
  {
    icon: <DriverIcon />,
    title: "Professional Drivers",
    desc: "Experienced, courteous, and thoroughly vetted. Our drivers know Calabar inside out.",
  },
  {
    icon: <ClockIcon />,
    title: "24/7 Availability",
    desc: "Day or night, weekday or holiday. We're always ready when you need us.",
  },
  {
    icon: <FleetIcon />,
    title: "Luxury Fleet",
    desc: "Late-model vehicles, meticulously maintained and spotlessly clean.",
  },
  {
    icon: <PriceIcon />,
    title: "Competitive Rates",
    desc: "Premium service at fair prices. Transparent pricing with no hidden fees.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-5 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0e1a] via-[#0d111f] to-[#0a0e1a]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest mb-4">
            Why Choose Edge
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            The Edge Difference
          </h2>
          <p className="text-white/60 text-lg">
            Excellence is not an act, but a habit. Here's what sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/10 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 group-hover:bg-amber-500/30 grid place-items-center text-amber-400 transition-transform group-hover:scale-110">
                {r.icon}
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-white">{r.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DriverIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
      <path d="M12 14a3 3 0 0 0 3-3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function FleetIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
