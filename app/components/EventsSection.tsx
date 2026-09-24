"use client";

import { motion } from "framer-motion";

interface EventItem {
  id: string;
  emoji: string;
  name: string;
  date: string;
  time: string;
  venue: string;
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
    date: "Saturday, Nov 21, 2026", time: "10:00 AM onwards", venue: "[Venue TBD]", dress: "Antique Gold",
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

        <div className="flex justify-center max-w-sm mx-auto">
          {events.map((e, i) => {
            const isReception = e.id === "reception";
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative overflow-hidden"
                style={{
                  background: e.bg,
                  borderRadius: 18,
                  border: `1.5px solid ${e.accent}55`,
                  boxShadow: isReception
                    ? `0 14px 40px rgba(0,0,0,0.6), 0 0 26px ${e.accent}40`
                    : `0 14px 36px rgba(0,0,0,0.35)`,
                  padding: "1.6rem",
                  minHeight: 300,
                }}
              >
                {/* Corner flourishes */}
                <span style={{ position: "absolute", top: 12, left: 12, width: 18, height: 18, borderTop: `1.5px solid ${e.accent}`, borderLeft: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", top: 12, right: 12, width: 18, height: 18, borderTop: `1.5px solid ${e.accent}`, borderRight: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", bottom: 12, left: 12, width: 18, height: 18, borderBottom: `1.5px solid ${e.accent}`, borderLeft: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", bottom: 12, right: 12, width: 18, height: 18, borderBottom: `1.5px solid ${e.accent}`, borderRight: `1.5px solid ${e.accent}`, opacity: 0.7 }} />

                {/* Neon glow ring for reception */}
                {isReception && (
                  <motion.span
                    aria-hidden
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                    style={{ position: "absolute", inset: 0, borderRadius: 18, boxShadow: `inset 0 0 40px ${e.accent}44`, pointerEvents: "none" }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Emoji medallion */}
                  <div className="flex items-center justify-center mx-auto mb-4"
                    style={{ width: 68, height: 68, borderRadius: 999, background: e.chipBg, border: `1.5px solid ${e.accent}66`, fontSize: "2rem" }}>
                    {e.emoji}
                  </div>

                  <h3 className="text-center" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.15rem", color: e.text, letterSpacing: "0.03em", lineHeight: 1.3 }}>
                    {e.name}
                  </h3>

                  <div className="mt-3 text-center space-y-1">
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", color: e.accent }}>
                      {e.date}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", color: e.text }}>
                      {e.time}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: e.textMuted }}>
                      📍 {e.venue}
                    </p>
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
