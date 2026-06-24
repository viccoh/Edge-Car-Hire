import { useState } from "react";

const WHATSAPP_URL = "https://wa.link/i60ny1";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const msg = `Hi Lady Theresa, I would like to join your newsletter.

Name: ${name}
Email: ${email}`;

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener");
  };

  return (
    <section className="py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-purple-900/10 backdrop-blur-xl p-6 sm:p-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-900/50 border border-purple-400/30 text-xs uppercase tracking-[0.2em] text-purple-200">
            Stay Connected
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white">
            Join the <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">Newsletter</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm max-w-lg mx-auto">
            Get free tips on investments, business strategies, and building wealth in Canada. Delivered to your inbox.
          </p>

          {!submitted ? (
            <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="flex-1 rounded-full bg-purple-900/30 border border-purple-500/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 outline-none px-5 py-3 text-white placeholder:text-white/40 transition text-sm"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-full bg-purple-900/30 border border-purple-500/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 outline-none px-5 py-3 text-white placeholder:text-white/40 transition text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/40 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="mt-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-white grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <p className="mt-3 text-white/80 text-sm">Thank you! Opening WhatsApp to complete your subscription...</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                }}
                className="mt-3 text-xs text-white/50 hover:text-white"
              >
                Submit another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
