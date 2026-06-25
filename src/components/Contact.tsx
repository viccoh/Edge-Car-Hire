export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0e1a] via-[#0d111f] to-[#0a0e1a]" />
      
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-widest mb-4">
                Book Your Ride
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Experience the Edge?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Contact us today for reservations, inquiries, or custom arrangements. 
                We're available 24/7 to serve you.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={<PhoneIcon />}
                  label="Phone"
                  value="+234 703 222 5150"
                  href="tel:+2347032225150"
                />
                <ContactItem
                  icon={<WhatsAppIcon />}
                  label="WhatsApp"
                  value="Chat with us"
                  href="https://wa.me/2347032225150"
                />
                <ContactItem
                  icon={<LocationIcon />}
                  label="Location"
                  value="Transcorp Hilton, Big Qua Town, Calabar 540281, Cross River State"
                  href="https://maps.google.com/?q=Transcorp+Hilton+Calabar"
                />
              </div>

              <a
                href="https://wa.me/2347032225150?text=Hello%20Edge%20Car%20Hire%2C%20I%20would%20like%20to%20book%20a%20vehicle."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold hover:shadow-lg hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Book via WhatsApp
              </a>
            </div>

            <div className="relative min-h-[400px] lg:min-h-full">
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000"
                alt="Luxury car"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0e1a]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 grid place-items-center text-amber-400 transition">
        {icon}
      </div>
      <div>
        <div className="text-xs text-white/50 uppercase tracking-wider">{label}</div>
        <div className="text-white font-semibold group-hover:text-amber-400 transition">{value}</div>
      </div>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
