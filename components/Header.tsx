/**
 * Header — Navigation minimaliste Maisons de Carbonne
 * Fond ivoire transparent, logotype centré, liens discrets
 */

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full py-6 px-8 md:px-16"
      style={{ borderBottom: "1px solid #C9B79A20" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logotype éditorial */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "1.125rem",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "#1F1E1B",
              textTransform: "uppercase",
            }}
          >
            Maisons de
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "1.5rem",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "#1F1E1B",
              textTransform: "uppercase",
            }}
          >
            Carbonne
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Le Moulin", href: "/le-moulin" },
            { label: "Domaine de Latour", href: "/domaine-de-latour" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "Manrope, system-ui, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "#1F1E1B",
                textTransform: "uppercase",
                textDecoration: "none",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
              }}
              className="hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+33608907571"
            style={{
              fontFamily: "Manrope, system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: "#B85C3E",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            className="hover:opacity-70"
          >
            06 08 90 75 71
          </a>
        </nav>

        {/* Mobile — menu burger minimal (placeholder) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className="block w-6 h-px bg-anthracite" style={{ backgroundColor: "#1F1E1B" }} />
          <span className="block w-6 h-px bg-anthracite" style={{ backgroundColor: "#1F1E1B" }} />
        </button>
      </div>
    </header>
  );
}
