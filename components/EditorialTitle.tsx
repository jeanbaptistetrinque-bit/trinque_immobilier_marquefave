/**
 * EditorialTitle — Titre éditorial hiérarchisé
 * Cormorant Garamond, avec surtitre optionnel en Manrope small caps
 */

interface EditorialTitleProps {
  /** Surtitre discret au-dessus du titre principal */
  eyebrow?: string;
  /** Titre principal */
  title: string;
  /** Sous-titre ou chapeau éditorial */
  subtitle?: string;
  /** Niveau de balise HTML */
  as?: "h1" | "h2" | "h3";
  /** Alignement */
  align?: "left" | "center" | "right";
  /** Taille relative */
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: { title: "2rem",   eyebrow: "0.65rem", subtitle: "0.9rem"  },
  md: { title: "2.75rem", eyebrow: "0.7rem",  subtitle: "1rem"    },
  lg: { title: "3.75rem", eyebrow: "0.75rem", subtitle: "1.05rem" },
  xl: { title: "5rem",    eyebrow: "0.8rem",  subtitle: "1.1rem"  },
};

const alignMap = {
  left:   "text-left items-start",
  center: "text-center items-center",
  right:  "text-right items-end",
};

export default function EditorialTitle({
  eyebrow,
  title,
  subtitle,
  as: Tag = "h2",
  align = "center",
  size = "lg",
}: EditorialTitleProps) {
  const sizes = sizeMap[size];

  return (
    <div className={`flex flex-col gap-4 ${alignMap[align]}`}>
      {/* Surtitre */}
      {eyebrow && (
        <span
          style={{
            fontFamily: "Manrope, system-ui, sans-serif",
            fontSize: sizes.eyebrow,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C9B79A",
          }}
        >
          {eyebrow}
        </span>
      )}

      {/* Titre */}
      <Tag
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: sizes.title,
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          color: "#1F1E1B",
        }}
      >
        {title}
      </Tag>

      {/* Séparateur */}
      {subtitle && (
        <>
          <span
            className="editorial-divider"
            style={{
              display: "block",
              width: "2.5rem",
              height: "1px",
              backgroundColor: "#C9B79A",
              alignSelf: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
            }}
          />
          {/* Sous-titre */}
          <p
            style={{
              fontFamily: "Manrope, system-ui, sans-serif",
              fontSize: sizes.subtitle,
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#1F1E1B",
              opacity: 0.65,
              maxWidth: "52ch",
            }}
          >
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
