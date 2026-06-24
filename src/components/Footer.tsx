export default function Footer() {
  return (
    <footer className="relative border-t border-amber-500/10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05070f] to-[#0a0e1a]" />
      
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white">EDGE</div>
                <div className="text-[10px] text-amber-400/80 uppercase tracking-widest">Car Hire & Rentals</div>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              Calabar's premier car hire and rental service. Delivering excellence in every journey 
              since our establishment. Move in Style, Arrive with Purpose.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400/70 mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/60 hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#services" className="text-white/60 hover:text-amber-400 transition">Services</a></li>
              <li><a href="#fleet" className="text-white/60 hover:text-amber-400 transition">Our Fleet</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-amber-400 transition">Reviews</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400/70 mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/60">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +234 703 222 5150
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Transcorp Hilton, Calabar
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/2347032225150?text=Hello%20Edge%20Car%20Hire" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-500/20 hover:bg-amber-500/40 grid place-items-center text-amber-400 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-500/20 hover:bg-amber-500/40 grid place-items-center text-amber-400 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-500/20 hover:bg-amber-500/40 grid place-items-center text-amber-400 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985c0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Edge Car Hire & Rentals. All rights reserved.
          </div>
          <div className="text-xs text-white/40">
            Move in Style, Arrive with Purpose.
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2347032225150?text=Hello%20Edge%20Car%20Hire%2C%20I%20need%20assistance."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-amber-500/40 transition-all hover:-translate-y-1 hover:shadow-amber-500/60"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-9 w-9 rounded-full bg-white/30 grid place-items-center">
          <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="relative">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </span>
        <span className="hidden sm:inline">Book Now</span>
      </a>
    </footer>
  );
}
