/**
 * Footer — Épuré, éditorial
 * Mention légale + contact discret
 */

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full py-12 px-8 md:px-16 mt-auto"
      style={{ borderTop: "1px solid #C9B79A40" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Signature */}
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "#1F1E1B",
            opacity: 0.5,
          }}
        >
          Maisons de Carbonne — Vente familiale directe
        </p>

        {/* Liens */}
        <nav className="flex items-center gap-8">
          {[
            { label: "Mentions légales", href: "/mentions-legales" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "Manrope, system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: "#1F1E1B",
                textTransform: "uppercase",
                textDecoration: "none",
                opacity: 0.45,
                transition: "opacity 0.2s ease",
              }}
              className="hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
