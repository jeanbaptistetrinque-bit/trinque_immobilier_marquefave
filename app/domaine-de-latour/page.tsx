/**
 * Page — Domaine de Latour
 * Corps de ferme — 294 m² — 5 hectares extensibles à 25 — bâtiment annexe 121 m² — 669 000 €
 */

import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import EditorialTitle from "@/components/EditorialTitle";
import CTAButton from "@/components/CTAButton";
import PropertyHero from "@/components/PropertyHero";

export const metadata: Metadata = {
  title: "Domaine de Latour — Maisons de Marquefave",
  description: "294 m², 5 hectares extensibles à 25, bâtiment annexe 121 m², 2 000 m² bâtiments élevage. Marquefave, Haute-Garonne. 669 000 €.",
};

const features = [
  { label: "Surface habitable",    value: "294 m²"                    },
  { label: "Terrain",              value: "5 hectares"                 },
  { label: "Bâtiment annexe",      value: "121 m²"                     },
  { label: "Bâtiments élevage",    value: "2 000 m² couverts"          },
  { label: "Terrain en sus",       value: "20 ha (prix à débattre)"    },
  { label: "Total potentiel",      value: "25 hectares"                },
  { label: "Dépendances",          value: "Colombier + hangars"         },
  { label: "Prix",                 value: "669 000 €"                  },
];

export default function DomaineDeLatourPage() {
  return (
    <PageShell>

      {/* ─── 1. HERO ─── */}
      <div id="galerie">
        <PropertyHero
          titleLine1="Domaine"
          titleLine2="de Latour"
          tagline="Corps de ferme, annexe, dépendances — cinq hectares extensibles à vingt-cinq. Un domaine à façonner."
          imageSrc="/images/domaine-de-latour/facade1.jpg"
          imageAlt="Domaine de Latour — vue d'ensemble"
          prix="669 000 €"
          surface="294 m²"
          terrain="5 ha"
          galerieHref="#galerie"
        />
      </div>

      {/* ─── 2. INTRODUCTION ÉDITORIALE ─── */}
      <section style={{ padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-14">

          {/* Eyebrow + Titre pleine largeur */}
          <div className="flex flex-col gap-5">
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
              Le domaine
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.05, color: "#1F1E1B" }}>
              L&apos;espace comme{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>fondation.</em>
            </h2>
          </div>

          {/* Texte — deux colonnes sur desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6" style={{ borderTop: "1px solid #C9B79A30", paddingTop: "clamp(3rem, 6vw, 5rem)" }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.72 }}>
              Le Domaine de Latour ne se comprend pas depuis un plan. Il se comprend depuis le terrain — debout, dans ses allées, face à ses cinq hectares d&apos;un seul tenant. Une emprise foncière rare, à trente minutes du centre de Toulouse.
            </p>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.72 }}>
              La maison principale de 294 m² est accompagnée d&apos;un bâtiment annexe indépendant de 121 m², d&apos;un colombier d&apos;origine et de dépendances étendues. L&apos;ensemble forme un domaine cohérent, à la fois ancré et ouvert sur l&apos;avenir.
            </p>
          </div>

          {/* Phrase finale en pleine largeur */}
          <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, color: "#B85C3E" }}>
            Ce n&apos;est pas une propriété à entretenir — c&apos;est un domaine à habiter, à façonner, à transmettre.
          </p>

        </div>
      </section>

      {/* ─── 3. GALERIE IMMERSIVE ─── */}
      <section style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-5">

          {/* Ligne 1 — grande + portrait, même hauteur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ height: "clamp(320px, 55vw, 620px)" }}>
            <div className="md:col-span-2 relative overflow-hidden h-full" style={{ backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/facade1.jpg" alt="Vue d'ensemble — Domaine de Latour" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden h-full" style={{ backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/facade3.jpg" alt="Façade latérale" fill className="object-cover" />
            </div>
          </div>

          {/* Ligne 2 — trois photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/salon.jpg" alt="Salon principal" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/cuisine.jpg" alt="Cuisine" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/installation1.jpg" alt="Dépendances" fill className="object-cover" />
            </div>
          </div>

          {/* Ligne 3 — deux photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/facade2.jpg" alt="Façade — vue secondaire" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/domaine-de-latour/bureau.jpg" alt="Bureau — Domaine de Latour" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. HABITER LE DOMAINE — 3 scénarios ─── */}
      <section style={{ backgroundColor: "#1F1E1B", padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col">

          {/* En-tête section */}
          <div className="flex flex-col gap-5 pb-16" style={{ borderBottom: "1px solid #F2ECE012" }}>
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A", opacity: 0.6 }}>
              Projections
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, color: "#F2ECE0" }}>
              Habiter{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>le Domaine.</em>
            </h2>
          </div>

          {/* Scénarios — un par ligne, aérés */}
          {[
            {
              num: "01",
              title: "Un domaine familial.",
              text: "La maison principale accueille une vie familiale complète. Le bâtiment annexe de 121 m² ajoute une capacité indépendante — pour des proches, des invités de long séjour. Cinq hectares pour les enfants, les animaux, les jardins potagers.",
            },
            {
              num: "02",
              title: "Un projet de vie ancré.",
              text: "Les 5 hectares permettent d'envisager un projet de vie ancré dans la terre, dans la durée. Maraîchage, élevage, forêt nourricière — le domaine offre l'espace et les structures pour construire une autonomie réelle.",
            },
            {
              num: "03",
              title: "Un horizon foncier rare.",
              text: "La possibilité d'acquérir jusqu'à 20 hectares supplémentaires ouvre un horizon exceptionnel. Chambres d'hôtes, gîte de groupe, domaine vitivinicole — des projets que la surface rend crédibles.",
            },
          ].map((s) => (
            <div
              key={s.num}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
              style={{ borderBottom: "1px solid #F2ECE012", paddingTop: "clamp(3.5rem, 7vw, 5.5rem)", paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}
            >
              {/* Numéro */}
              <div className="md:col-span-1 pt-2">
                <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F2ECE0", opacity: 0.12, lineHeight: 1 }}>
                  {s.num}
                </span>
              </div>
              {/* Titre */}
              <div className="md:col-span-4">
                <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300, lineHeight: 1.05, color: "#F2ECE0" }}>
                  {s.title}
                </h3>
              </div>
              {/* Texte */}
              <div className="md:col-span-5 md:col-start-8" style={{ paddingTop: "0.5rem" }}>
                <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.95rem", fontWeight: 300, lineHeight: 2, color: "#F2ECE0", opacity: 0.5 }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ─── 5. CARACTÉRISTIQUES ─── */}
      <section style={{
        padding: "clamp(5rem, 10vw, 8rem) 2rem",
        borderTop: "1px solid #C9B79A30",
        borderBottom: "1px solid #C9B79A30",
      }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <EditorialTitle eyebrow="Le bien" title="Chiffres et structures." as="h2" align="left" size="md" />
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col gap-2">
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9B79A" }}>
                  {f.label}
                </span>
                <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#1F1E1B", lineHeight: 1.1 }}>
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. LOCALISATION ─── */}
      <section style={{
        padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)",
        borderTop: "1px solid #C9B79A30",
      }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-16">

          {/* Titre éditorial — pleine largeur */}
          <div className="flex flex-col gap-10">
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.05, color: "#1F1E1B" }}>
              Trente minutes de Toulouse,{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>un siècle plus loin.</em>
            </h2>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.85, color: "#1F1E1B", opacity: 0.6 }}>
              Marquefave conserve son école, sa boulangerie, son marché du samedi. Tout ce qui fait qu&apos;un domaine de campagne reste habitable au quotidien — sans renoncer à la ville quand elle s&apos;invite.
            </p>
          </div>

          {/* Tableau distances */}
          <div className="flex flex-col" style={{ borderTop: "1px solid #C9B79A30" }}>
            {[
              { lieu: "Centre du village",   km: "800 m",   temps: "À pied"  },
              { lieu: "Gare de Carbonne",     km: "6 km",    temps: "5 min"   },
              { lieu: "Toulouse Capitole",    km: "42 km",   temps: "40 min"  },
              { lieu: "Aéroport Blagnac",     km: "48 km",   temps: "45 min"  },
              { lieu: "Pyrénées (stations)",  km: "90 km",   temps: "1 h 10"  },
              { lieu: "Mer (Argelès)",        km: "220 km",  temps: "2 h 15"  },
            ].map(({ lieu, km, temps }) => (
              <div
                key={lieu}
                className="grid grid-cols-12 items-center py-5"
                style={{ borderBottom: "1px solid #C9B79A20" }}
              >
                <span className="col-span-6" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 300, color: "#1F1E1B" }}>
                  {lieu}
                </span>
                <span className="col-span-3 text-right" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.12em", color: "#1F1E1B", opacity: 0.35 }}>
                  {km}
                </span>
                <span className="col-span-3 text-right" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B85C3E" }}>
                  {temps}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 7. CTA FINAL ─── */}
      <section style={{ padding: "clamp(6rem, 14vw, 11rem) 2rem" }}>
        <div className="max-w-lg mx-auto flex flex-col items-center gap-10 text-center">
          <EditorialTitle
            eyebrow="Vente directe — sans intermédiaire"
            title="Une visite vaut mille mots."
            subtitle="Prenez contact pour organiser une première visite confidentielle, à votre rythme."
            as="h2"
            align="center"
            size="md"
          />
          <CTAButton label="Demander une visite" href="/contact" variant="filled" />
        </div>
      </section>

    </PageShell>
  );
}
