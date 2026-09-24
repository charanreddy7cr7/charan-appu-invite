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
    bg: "linear-gradient(160deg, #E7CE8E 0%, #C9A24B 55%, #A07E2E 100%)",
    accent: "#4A3611", text: "#2E2208", textMuted: "#5C4A1E", chipBg: "rgba(46,34,8,0.1)", tilt: 0,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 relative overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute top-10 -left-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)" }} />
      <div className="absolute bottom-10 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,206,142,0.1), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#C9A24B", textTransform: "uppercase" }}>
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
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative overflow-hidden w-full"
                style={{
                  background: e.bg,
                  borderRadius: 18,
                  border: `1.5px solid ${e.accent}55`,
                  boxShadow: `0 14px 36px rgba(0,0,0,0.35)`,
                  padding: "2.2rem 2rem",
                  minHeight: 320,
                }}
              >
                {/* Corner flourishes */}
                <span style={{ position: "absolute", top: 12, left: 12, width: 20, height: 20, borderTop: `1.5px solid ${e.accent}`, borderLeft: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", top: 12, right: 12, width: 20, height: 20, borderTop: `1.5px solid ${e.accent}`, borderRight: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", bottom: 12, left: 12, width: 20, height: 20, borderBottom: `1.5px solid ${e.accent}`, borderLeft: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", bottom: 12, right: 12, width: 20, height: 20, borderBottom: `1.5px solid ${e.accent}`, borderRight: `1.5px solid ${e.accent}`, opacity: 0.7 }} />

                <div className="relative z-10 flex flex-col items-center h-full">
                  {/* Emoji medallion */}
                  <div className="flex items-center justify-center mx-auto mb-4"
                    style={{ width: 72, height: 72, borderRadius: 999, background: e.chipBg, border: `1.5px solid ${e.accent}66`, fontSize: "2.2rem" }}>
                    {e.emoji}
                  </div>

                  <h3 className="text-center" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.4rem", color: e.text, letterSpacing: "0.04em", lineHeight: 1.3 }}>
                    {e.name}
                  </h3>

                  <div className="mt-3 text-center space-y-1">
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: e.accent }}>
                      {e.date}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: e.text }}>
                      {e.time}
                    </p>
                  </div>

                  {/* Venue */}
                  <div className="mt-5 text-center" style={{ borderTop: `1px solid ${e.accent}33`, paddingTop: "1.1rem", width: "100%" }}>
                    <p style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1rem", color: e.text, letterSpacing: "0.03em" }}>
                      📍 {e.venueName}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: e.textMuted, marginTop: "0.25rem" }}>
                      {e.venueAddress}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${e.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-5 py-2"
                      style={{
                        border: `1.5px solid ${e.accent}`,
                        borderRadius: 999,
                        color: e.text,
                        fontFamily: "'Cinzel', serif",
                        fontWeight: 500,
                        fontSize: "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        background: e.chipBg,
                      }}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
