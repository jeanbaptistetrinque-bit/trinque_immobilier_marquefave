/**
 * CTAButton — Bouton d'action discret mais affirmé
 * Deux variantes : "outline" (défaut) et "filled" (terracotta)
 */

import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "filled";
  /** Taille */
  size?: "sm" | "md";
}

const styles = {
  base: {
    display: "inline-block",
    fontFamily: "Manrope, system-ui, sans-serif",
    fontWeight: 400,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: "none",
    background: "none",
  },
  outline: {
    color: "#1F1E1B",
    border: "1px solid #1F1E1B",
    padding: "0.85rem 2.5rem",
  },
  outlineHover: {
    backgroundColor: "#1F1E1B",
    color: "#F2ECE0",
  },
  filled: {
    color: "#F2ECE0",
    backgroundColor: "#B85C3E",
    padding: "0.85rem 2.5rem",
  },
  filledHover: {
    backgroundColor: "#9e4f35",
  },
};

const sizeMap = {
  sm: { fontSize: "0.65rem", padding: "0.65rem 1.75rem" },
  md: { fontSize: "0.7rem",  padding: "0.85rem 2.5rem"  },
};

export default function CTAButton({
  label,
  href,
  onClick,
  variant = "outline",
  size = "md",
}: CTAButtonProps) {
  const sizing = sizeMap[size];
  const variantStyle = variant === "filled" ? styles.filled : styles.outline;

  const combinedStyle = {
    ...styles.base,
    ...variantStyle,
    fontSize: sizing.fontSize,
    padding: sizing.padding,
  };

  if (href) {
    // Ancres in-page → <a> classique (Next.js Link gère mal les hash-only hrefs)
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          style={combinedStyle}
          className={
            variant === "filled"
              ? "hover:opacity-90"
              : "hover:bg-[#1F1E1B] hover:text-[#F2ECE0]"
          }
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        href={href}
        style={combinedStyle}
        className={
          variant === "filled"
            ? "hover:opacity-90"
            : "hover:bg-[#1F1E1B] hover:text-[#F2ECE0]"
        }
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combinedStyle}
      className={
        variant === "filled"
          ? "hover:opacity-90"
          : "hover:bg-[#1F1E1B] hover:text-[#F2ECE0]"
      }
    >
      {label}
    </button>
  );
}
