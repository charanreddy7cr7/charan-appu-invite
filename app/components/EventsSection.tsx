"use client";

import { motion } from "framer-motion";

interface EventItem {
  id: string;
  emoji: string;
  name: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapQuery: string;
  dress: string;
  /** full card background */
  bg: string;
  /** primary accent (borders, date) */
  accent: string;
  /** heading + body text colour */
  text: string;
  /** muted text colour */
  textMuted: string;
  /** dress-code chip bg */
  chipBg: string;
  tilt: number;
}

const events: EventItem[] = [
  {
    id: "wedding", emoji: "🪷", name: "Wedding",
    date: "Saturday, Nov 21, 2026", time: "10:00 AM onwards",
    venueName: "Bliss Signature Hall",
    venueAddress: "The Bliss at Aubrey, 4381 US-377, Aubrey, TX 76227",
    mapQuery: "The+Bliss+at+Aubrey,+4381+US-377,+Aubrey,+TX+76227",
    dress: "Antique Gold",
    // Antique gold
    bg: "linear-gradient(135deg, #FDF2C9 0%, #FAE4AF 20%, #F6D998 42%, #D5A54F 66%, #A06C1B 82%, #F6D998 100%)",
    accent: "#4A3611", text: "#2E2208", textMuted: "#5C4A1E", chipBg: "rgba(46,34,8,0.1)", tilt: 0,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 relative overflow-hidden" style={{ background: "#F2E8D8" }}>
      <div className="absolute top-10 -left-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)" }} />
      <div className="absolute bottom-10 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,206,142,0.1), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#C17930", textTransform: "uppercase" }}>
            Saturday · November 21, 2026
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            The Wedding
          </h2>
          <div className="squiggle mt-5" />
        </motion.div>

        <div className="flex justify-center max-w-xl mx-auto">
          {events.map((e, i) => {
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative w-full flex flex-col items-center"
              >
                <img src="/wedding-card.jpg" alt={`${e.name} — ${e.date}, ${e.venueName}`}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }} />

                <a
                  href={`https://maps.google.com/?q=${e.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-7 py-3"
                  style={{
                    border: `1.5px solid ${e.accent}`,
                    borderRadius: 999,
                    color: e.text,
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #FDF2C9 0%, #F6D998 50%, #D5A54F 100%)",
                    boxShadow: "0 4px 14px rgba(90,65,12,0.3)",
                  }}
                >
                  Get Directions →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
