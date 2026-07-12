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
        padding: "1rem 1.5rem",
        paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
      }}
    >
      <Link
        href={href}
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#B85C3E",
          color: "#F2ECE0",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "1rem",
        }}
      >
        {label}
      </Link>
    </div>
  );
}
