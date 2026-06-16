/**
 * Homepage — Maisons de Carbonne
 * Hero éditorial + diptyque + vente directe + territoire/map + formulaire
 */

import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CTAButton from "@/components/CTAButton";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <PageShell>

      {/* ─── 1. HERO ÉDITORIAL ─── */}
      <section style={{ padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem) clamp(3rem, 5vw, 4rem)" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
            Carbonne — Haute-Garonne · 31
          </span>

          <h1 style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "#1F1E1B",
            letterSpacing: "-0.02em",
          }}>
            Deux demeures,<br />
            <em style={{ fontStyle: "italic", color: "#B85C3E" }}>une même lumière.</em>
          </h1>

          <p style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.7,
            color: "#1F1E1B",
            opacity: 0.5,
          }}>
            Deux propriétés familiales, une cession directe — sans agence, sans intermédiaire.
          </p>

        </div>
      </section>

      {/* ─── 2. DIPTYQUE DES BIENS ─── */}
      <section style={{ padding: "0 clamp(2rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* ── Le Moulin ── */}
          <Link href="/le-moulin" className="group flex flex-col gap-5" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="flex justify-between items-center">
              <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
                Réf. LM — 001
              </span>
              <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1F1E1B", opacity: 0.35 }}>
                Carbonne · 31
              </span>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/2", backgroundColor: "#C9B79A15" }}>
              <Image
                src="/images/le-moulin/allee-homepage.jpg"
                alt="Le Moulin de l'Averanède"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#1F1E1B" }}>
                Le Moulin{" "}
                <em style={{ fontStyle: "italic", color: "#B85C3E" }}>de l&apos;Averanède</em>
              </h2>
              <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1rem", fontStyle: "italic", fontWeight: 300, color: "#1F1E1B", opacity: 0.5, marginTop: "0.4rem" }}>
                Maison de maître en galets de Garonne, parc d&apos;un hectare.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2" style={{ borderTop: "1px solid #C9B79A30" }}>
              {[["Prix", "549 000 €"], ["Surface", "288 m²"], ["Terrain", "13 000 m²"]].map(([label, val]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1F1E1B", opacity: 0.35 }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.1rem", fontWeight: 300, color: "#1F1E1B" }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </Link>

          {/* ── Domaine de Latour ── */}
          <Link href="/domaine-de-latour" className="group flex flex-col gap-5" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="flex justify-between items-center">
              <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
                Réf. DL — 002
              </span>
              <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1F1E1B", opacity: 0.35 }}>
                Carbonne · 31
              </span>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/2", backgroundColor: "#C9B79A15" }}>
              <Image
                src="/images/domaine-de-latour/drone-homepage.jpg"
                alt="Domaine de Latour"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#1F1E1B" }}>
                Domaine{" "}
                <em style={{ fontStyle: "italic", color: "#B85C3E" }}>de Latour</em>
              </h2>
              <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1rem", fontStyle: "italic", fontWeight: 300, color: "#1F1E1B", opacity: 0.5, marginTop: "0.4rem" }}>
                Corps de ferme, annexe, dépendances — 5 ha extensibles à 25.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2" style={{ borderTop: "1px solid #C9B79A30" }}>
              {[["Prix", "669 000 €"], ["Bâti", "294 m²"], ["Terrain", "5 ha"]].map(([label, val]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1F1E1B", opacity: 0.35 }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.1rem", fontWeight: 300, color: "#1F1E1B" }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </Link>

        </div>
      </section>

      {/* ─── 3. VENTE DIRECTE ─── */}
      <section style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 5rem)",
        borderTop: "1px solid #C9B79A30",
        borderBottom: "1px solid #C9B79A30",
      }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
              Vente directe
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, color: "#1F1E1B" }}>
              Sans agence.<br />
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>Sans intermédiaire.</em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-7" style={{ paddingTop: "0.5rem" }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.68 }}>
              Ces deux propriétés ont été habitées et aimées par la même famille pendant plusieurs décennies. Leur mise en vente est une décision familiale, traitée avec soin.
            </p>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.68 }}>
              Les visites se font sur rendez-vous, dans la discrétion. Les acquéreurs sont reçus directement par la famille, qui connaît chaque pierre, chaque arbre, chaque histoire de ces maisons.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. TERRITOIRE + MAP ─── */}
      <section style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 5rem)" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <div className="flex flex-col gap-6">
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
              Le territoire
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.75rem, 7vw, 6rem)", fontWeight: 300, lineHeight: 1.0, color: "#1F1E1B" }}>
              Carbonne —{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>rive gauche.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Map SVG illustrative */}
            <div style={{ border: "1px solid #C9B79A25", overflow: "hidden" }}>
              <img
                src="/images/map-marquefave.svg"
                alt="Carte du territoire — Carbonne, Garonne et Ariège"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Texte + distances */}
            <div className="flex flex-col gap-7">
              <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.68 }}>
                Village de la rive gauche de l&apos;Ariège, à trente minutes de Toulouse. Ses collines douces, ses rivières claires, son ciel de lumière en font l&apos;un des territoires les plus préservés de Haute-Garonne.
              </p>
              <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.68 }}>
                Assez loin pour le silence. Assez près pour tout le reste. École, boulangerie, marché du samedi — la vie de village, intacte.
              </p>
              <div className="flex flex-col" style={{ borderTop: "1px solid #C9B79A30", paddingTop: "1.5rem" }}>
                {[
                  ["Toulouse Capitole", "40 min"],
                  ["Aéroport Blagnac",  "45 min"],
                  ["Pyrénées",          "1 h 10"],
                ].map(([lieu, temps]) => (
                  <div key={lieu} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid #C9B79A20" }}>
                    <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.82rem", fontWeight: 400, color: "#1F1E1B", opacity: 0.7 }}>{lieu}</span>
                    <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.1rem", fontWeight: 300, color: "#B85C3E" }}>{temps}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. FORMULAIRE ─── */}
      <section style={{
        padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)",
        borderTop: "1px solid #C9B79A30",
      }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          {/* Titre */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
              Contact
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300, lineHeight: 1.05, color: "#1F1E1B" }}>
              Une visite vaut{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>mille mots.</em>
            </h2>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "#1F1E1B", opacity: 0.55 }}>
              Prenez contact pour organiser une première visite confidentielle, à votre rythme.
            </p>
          </div>

          {/* Formulaire unifié */}
          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>

        </div>
      </section>

    </PageShell>
  );
}
