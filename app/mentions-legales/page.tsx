/**
 * Page — Mentions légales
 */

import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Mentions légales — Maisons de Carbonne",
  description: "Mentions légales du site Maisons de Carbonne.",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "Cormorant Garamond, Georgia, serif",
  fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
  fontWeight: 300,
  color: "#1F1E1B",
  marginBottom: "1rem",
  marginTop: "3rem",
};

const body: React.CSSProperties = {
  fontFamily: "Manrope, sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  lineHeight: 1.85,
  color: "#1F1E1B",
  opacity: 0.7,
};

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <section style={{ padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)" }}>
        <div className="max-w-3xl mx-auto flex flex-col">

          <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
            Informations légales
          </span>

          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, color: "#1F1E1B", marginTop: "1.5rem" }}>
            Mentions légales.
          </h1>

          {/* Éditeur */}
          <h2 style={sectionTitle}>Éditeur du site</h2>
          <p style={body}>
            Le site <strong style={{ fontWeight: 500 }}>maisons-carbonne.fr</strong> est édité par des particuliers dans le cadre d'une vente immobilière directe entre particuliers.
          </p>
          <p style={{ ...body, marginTop: "0.75rem" }}>
            <strong style={{ fontWeight: 500 }}>Vendeurs :</strong><br />
            Marie Trinqué<br />
            Jacques Trinqué<br />
            Jean-François Trinqué
          </p>
          <p style={{ ...body, marginTop: "0.75rem" }}>
            <strong style={{ fontWeight: 500 }}>Adresse :</strong> Carbonne, 31390, Haute-Garonne, France<br />
            <strong style={{ fontWeight: 500 }}>Email :</strong> jeanbaptistetrinque@hotmail.fr
          </p>

          {/* Hébergement */}
          <h2 style={sectionTitle}>Hébergement</h2>
          <p style={body}>
            Ce site est hébergé par :<br />
            <strong style={{ fontWeight: 500 }}>Vercel Inc.</strong><br />
            340 Pine Street, Suite 701<br />
            San Francisco, CA 94104 — États-Unis<br />
            <a href="https://vercel.com" style={{ color: "#B85C3E" }}>vercel.com</a>
          </p>

          {/* Propriété intellectuelle */}
          <h2 style={sectionTitle}>Propriété intellectuelle</h2>
          <p style={body}>
            L'ensemble des contenus présents sur ce site (textes, photographies, visuels) sont la propriété exclusive des vendeurs. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          {/* Données personnelles */}
          <h2 style={sectionTitle}>Données personnelles</h2>
          <p style={body}>
            Les informations collectées via le formulaire de contact (nom, email, téléphone, message) sont utilisées uniquement pour répondre aux demandes de visite. Elles sont transmises directement aux vendeurs et ne sont jamais cédées à des tiers.
          </p>
          <p style={{ ...body, marginTop: "0.75rem" }}>
            Conformément à la loi Informatique et Libertés et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : <a href="mailto:jeanbaptistetrinque@hotmail.fr" style={{ color: "#B85C3E" }}>jeanbaptistetrinque@hotmail.fr</a>
          </p>

          {/* Cookies */}
          <h2 style={sectionTitle}>Cookies</h2>
          <p style={body}>
            Ce site n'utilise aucun cookie de traçage ou de publicité. Aucun consentement n'est requis.
          </p>

          {/* Responsabilité */}
          <h2 style={sectionTitle}>Limitation de responsabilité</h2>
          <p style={body}>
            Les informations présentes sur ce site sont fournies à titre indicatif. Les vendeurs s'efforcent de maintenir les informations exactes et à jour mais ne peuvent garantir l'exhaustivité des données. Les caractéristiques définitives des biens seront précisées lors des visites et dans les actes notariés.
          </p>

          <p style={{ ...body, marginTop: "3rem", opacity: 0.4, fontSize: "0.78rem" }}>
            Dernière mise à jour : mai 2026
          </p>

        </div>
      </section>
    </PageShell>
  );
}
