/**
 * PropertyHero — Hero des pages biens
 * Ordre : titre → tagline → photo (optionnelle) → prix/surface → CTAs
 */

import Image from "next/image";
import CTAButton from "./CTAButton";

interface PropertyHeroProps {
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  prix: string;
  surface: string;
  terrain: string;
  /** Photo insérée entre la tagline et le prix */
  imageSrc?: string;
  imageAlt?: string;
  galerieHref?: string;
}

export default function PropertyHero({
  titleLine1,
  titleLine2,
  tagline,
  prix,
  surface,
  terrain,
  imageSrc,
  imageAlt,
  galerieHref = "#galerie",
}: PropertyHeroProps) {
  return (
    <section
      style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 5rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        borderBottom: "1px solid #C9B79A30",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* ─── Titre bicolore ─── */}
        <div className="flex flex-col" style={{ gap: "0.1em" }}>
          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1.0, color: "#1F1E1B", letterSpacing: "-0.01em" }}>
            {titleLine1}
          </h1>
          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.0, color: "#B85C3E", letterSpacing: "-0.01em" }}>
            {titleLine2}
          </h1>
        </div>

        {/* ─── Tagline ─── */}
        <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6, color: "#1F1E1B", opacity: 0.6 }}>
          {tagline}
        </p>

        {/* ─── Photo (entre tagline et prix) ─── */}
        {imageSrc && (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}

        {/* ─── Séparateur ─── */}
        <div style={{ height: "1px", backgroundColor: "#C9B79A40", width: "100%" }} />

        {/* ─── Prix / Surface / Terrain ─── */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1F1E1B", opacity: 0.4 }}>
              Prix
            </span>
            <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "#1F1E1B", lineHeight: 1 }}>
              {prix}
            </span>
          </div>
          <div className="flex flex-col gap-2" style={{ borderLeft: "1px solid #C9B79A30", paddingLeft: "2rem" }}>
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1F1E1B", opacity: 0.4 }}>
              Surface · Terrain
            </span>
            <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "#1F1E1B", lineHeight: 1 }}>
              {surface} · {terrain}
            </span>
          </div>
        </div>

        {/* ─── CTAs ─── */}
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton label="Demander une visite →" href="/contact" variant="filled" />
          <CTAButton label="Voir la galerie →" href={galerieHref} variant="outline" />
        </div>

      </div>
    </section>
  );
}
