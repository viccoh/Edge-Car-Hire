const testimonials = [
  {
    quote: "Edge Car Hire transformed my business trips in Calabar. Professional, punctual, and the vehicles are immaculate. I wouldn't use anyone else.",
    name: "Chief Emmanuel O.",
    role: "CEO, Oil & Gas Executive",
  },
  {
    quote: "From airport pickup to hotel transfers, everything was seamless. The driver was courteous and knew the city perfectly. Highly recommended.",
    name: "Mrs. Sarah Adebayo",
    role: "International Consultant",
  },
  {
    quote: "We used Edge for our corporate event convoy. Flawless execution, professional drivers, and competitive pricing. They delivered beyond expectations.",
    name: "Dr. Bassey Etim",
    role: "Event Coordinator",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-5 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0e1a] via-[#0f1424] to-[#0a0e1a]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest mb-4">
            Testimonials
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/10 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="text-5xl text-amber-400/40 font-serif leading-none">"</div>
              <p className="mt-4 text-white/80 leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-6 border-t border-amber-500/10">
                <div className="font-serif font-bold text-white">{t.name}</div>
                <div className="text-sm text-amber-400/70">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
