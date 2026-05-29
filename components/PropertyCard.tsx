/**
 * PropertyCard — Carte éditorial d'un bien immobilier
 * Esthétique print magazine : image pleine, texte sobre, ratio vertical
 */

import Link from "next/link";
import Image from "next/image";

interface PropertyCardProps {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  surfaceHabitable?: string;
  terrain?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PropertyCard({
  slug,
  name,
  tagline,
  location,
  surfaceHabitable,
  terrain,
  imageSrc,
  imageAlt,
}: PropertyCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group block"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {/* Image container — ratio 4/5 éditorial */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "4 / 5",
          backgroundColor: "#C9B79A20",
        }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          /* Placeholder éditorial avant l'intégration des vraies photos */
          <div
            className="absolute inset-0 flex items-end p-8"
            style={{ backgroundColor: "#C9B79A30" }}
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "0.75rem",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1F1E1B",
                opacity: 0.4,
              }}
            >
              {imageAlt ?? name}
            </span>
          </div>
        )}
      </div>

      {/* Corps textuel */}
      <div className="pt-6 flex flex-col gap-3">
        {/* Localisation */}
        <span
          style={{
            fontFamily: "Manrope, system-ui, sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C9B79A",
          }}
        >
          {location}
        </span>

        {/* Nom du bien */}
        <h3
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "1.75rem",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#1F1E1B",
          }}
        >
          {name}
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "Manrope, system-ui, sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "#1F1E1B",
            opacity: 0.6,
          }}
        >
          {tagline}
        </p>

        {/* Caractéristiques minimalistes */}
        {(surfaceHabitable || terrain) && (
          <div
            className="flex gap-6 pt-2"
            style={{ borderTop: "1px solid #C9B79A40", marginTop: "0.25rem", paddingTop: "1rem" }}
          >
            {surfaceHabitable && (
              <span
                style={{
                  fontFamily: "Manrope, system-ui, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#1F1E1B",
                  opacity: 0.55,
                }}
              >
                {surfaceHabitable} habitable
              </span>
            )}
            {terrain && (
              <span
                style={{
                  fontFamily: "Manrope, system-ui, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#1F1E1B",
                  opacity: 0.55,
                }}
              >
                {terrain} terrain
              </span>
            )}
          </div>
        )}

        {/* Lien éditorial — hover reveal */}
        <span
          style={{
            fontFamily: "Manrope, system-ui, sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#1F1E1B",
            opacity: 0,
            transition: "opacity 0.25s ease",
            marginTop: "0.25rem",
          }}
          className="group-hover:opacity-60"
        >
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
