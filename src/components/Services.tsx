const services = [
  {
    icon: <CarIcon />,
    title: "Private Car Hire",
    desc: "Executive transportation for business meetings, events, and personal travel. Your dedicated chauffeur awaits.",
  },
  {
    icon: <PlaneIcon />,
    title: "Airport Pick-Up",
    desc: "Seamless arrivals and departures at Margaret Ekpo International Airport. Flight tracking included.",
  },
  {
    icon: <HotelIcon />,
    title: "Hotel Reservations",
    desc: "Partner rates at Calabar's finest hotels. From Transcorp Hilton to boutique accommodations.",
  },
  {
    icon: <SecurityIcon />,
    title: "Security Convoys",
    desc: "Protected transportation for high-profile clients. Discreet, professional, and fully coordinated.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0e1a] via-[#0d111f] to-[#0a0e1a]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest mb-4">
            Our Services
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Beyond Transportation
          </h2>
          <p className="text-white/60 text-lg">
            Comprehensive travel solutions designed for the modern executive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/10 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 grid place-items-center text-amber-400 transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12h20M20 12l-4-4M20 12l-4 4" />
      <path d="M12 2l3 10-3 10M9 12l-5-5M9 12l-5 5" />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 20V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
      <path d="M2 20h20" />
      <path d="M10 20v-6h4v6" />
      <path d="M6 12h.01M18 12h.01M6 16h.01M18 16h.01M12 16h.01" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}
