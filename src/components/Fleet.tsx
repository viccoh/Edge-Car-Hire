import { useState } from "react";

const vehicles = [
  {
    category: "sedan",
    name: "Toyota Camry",
    rate: "₦45,000",
    period: "per day",
    features: ["5 Seats", "Automatic", "Leather Interior", "GPS"],
    image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "sedan",
    name: "Mercedes-Benz C-Class",
    rate: "₦85,000",
    period: "per day",
    features: ["5 Seats", "Automatic", "Premium Sound", "Sunroof"],
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "sedan",
    name: "Honda Accord",
    rate: "₦50,000",
    period: "per day",
    features: ["5 Seats", "Automatic", "Backup Camera", "Bluetooth"],
    image: "https://images.pexels.com/photos/128636/pexels-photo-128636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "suv",
    name: "Lexus RX 350",
    rate: "₦90,000",
    period: "per day",
    features: ["5 Seats", "AWD", "Luxury Package", "360 Camera"],
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "suv",
    name: "Toyota Highlander",
    rate: "₦90,000",
    period: "per day",
    features: ["7 Seats", "AWD", "Rear Entertainment", "GPS"],
    image: "https://images.pexels.com/photos/128636/pexels-photo-128636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "suv",
    name: "Mercedes-Benz GLE",
    rate: "₦100,000",
    period: "per day",
    features: ["5 Seats", "AWD", "Premium Leather", "Panoramic Roof"],
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "suv",
    name: "Range Rover Sport",
    rate: "₦100,000",
    period: "per day",
    features: ["5 Seats", "4WD", "Luxury Interior", "Advanced Safety"],
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    category: "suv",
    name: "Toyota Land Cruiser",
    rate: "₦95,000",
    period: "per day",
    features: ["7 Seats", "4WD", "Off-Road Capable", "Premium Sound"],
    image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
];

export default function Fleet() {
  const [filter, setFilter] = useState<"all" | "sedan" | "suv">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all" ? vehicles : vehicles.filter((v) => v.category === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="fleet" className="py-24 px-5 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0e1a] via-[#0f1424] to-[#0a0e1a]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest mb-4">
            Our Fleet
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your Ride
          </h2>
          <p className="text-white/60 text-lg mb-4">
            Premium vehicles meticulously maintained for your comfort and safety.
          </p>
          <p className="text-amber-400/70 text-sm italic">
            * Rates are subject to change based on duration and season
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur">
            {(["all", "sedan", "suv"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  filter === f ? "bg-amber-500 text-black" : "text-white/70 hover:text-white"
                }`}
              >
                {f === "all" ? "All Vehicles" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((v, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/90 text-black text-xs font-bold uppercase">
                  {v.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-white">{v.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-amber-400">{v.rate}</span>
                  <span className="text-sm text-white/50">{v.period}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {v.features.map((feat, j) => (
                    <span key={j} className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-400/80 text-xs">
                      {feat}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/2347032225150"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/40 transition"
                >
                  <WhatsAppIcon />
                  Book This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {filtered.length > 4 && !showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-amber-500/30 text-white font-semibold hover:bg-amber-500 hover:text-black transition"
            >
              See More Cars
              <span>→</span>
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-amber-500/30 text-white font-semibold hover:bg-amber-500 hover:text-black transition"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
