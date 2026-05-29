/**
 * Page — Contact / Demande de visite
 */

import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import EditorialTitle from "@/components/EditorialTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Maisons de Marquefave",
  description: "Demandez une visite confidentielle. Vente directe, sans intermédiaire.",
};

export default function ContactPage() {
  return (
    <PageShell>

      {/* ─── HERO ─── */}
      <section style={{ padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-6">
          <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
            Vente directe — sans intermédiaire
          </span>
          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, lineHeight: 1.0, color: "#1F1E1B" }}>
            Prenons{" "}
            <em style={{ fontStyle: "italic", color: "#B85C3E" }}>contact.</em>
          </h1>
          <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, color: "#1F1E1B", opacity: 0.5 }}>
            Chaque demande est lue personnellement par la famille. Nous revenons vers vous dans les 48 heures.
          </p>
        </div>
      </section>

      {/* ─── FORMULAIRE ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem) clamp(6rem, 12vw, 10rem)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>

    </PageShell>
  );
}
