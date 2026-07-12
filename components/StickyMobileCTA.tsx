/**
 * StickyMobileCTA — Bouton fixe en bas d'écran, mobile uniquement
 * Disparaît sur md+ pour ne pas perturber le design desktop
 */

"use client";

import Link from "next/link";

interface StickyMobileCTAProps {
  href?: string;
  label?: string;
}

export default function StickyMobileCTA({
  href = "/contact",
  label = "Demander une visite",
}: StickyMobileCTAProps) {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#F2ECE0",
        borderTop: "1px solid #C9B79A40",
        padding: "0.85rem 1.25rem",
        paddingBottom: "calc(0.85rem + env(safe-area-inset-bottom))",
        display: "flex",
        gap: "0.75rem",
      }}
    >
      {/* Appeler */}
      <a
        href="tel:+33608907571"
        style={{
          flex: 1,
          textAlign: "center",
          border: "1px solid #1F1E1B",
          color: "#1F1E1B",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "0.9rem 0.5rem",
        }}
      >
        Appeler
      </a>
      {/* Formulaire */}
      <Link
        href={href}
        style={{
          flex: 2,
          textAlign: "center",
          backgroundColor: "#B85C3E",
          color: "#F2ECE0",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "0.9rem 0.5rem",
        }}
      >
        {label}
      </Link>
    </div>
  );
}
