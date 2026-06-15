/**
 * Page — Le Moulin de l'Averanède
 * Maison de maître en galets de Garonne — 288 m² — 13 000 m² — 549 000 €
 */

import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import EditorialTitle from "@/components/EditorialTitle";
import CTAButton from "@/components/CTAButton";
import PropertyHero from "@/components/PropertyHero";

export const metadata: Metadata = {
  title: "Le Moulin de l'Averanède — Maisons de Marquefave",
  description:
    "Maison de maître en galets de Garonne, 288 m², 13 000 m² de terrain. Marquefave, Haute-Garonne. 549 000 €.",
};

const features = [
  { label: "Surface habitable", value: "288 m²" },
  { label: "Terrain total",     value: "13 000 m²" },
  { label: "Terrain annexe",    value: "400 m² (chevaux)" },
  { label: "Style",             value: "Maison de maître" },
  { label: "Construction",      value: "Galets de Garonne" },
  { label: "Prix",              value: "549 000 €" },
];

const highlights = [
  { title: "Volumes généreux",       desc: "Des pièces de réception vastes, hauts plafonds et moulures d'époque intactes — un intérieur qui respire." },
  { title: "Cave à vin",             desc: "Une cave voûtée d'origine, fraîche et profonde, pour les amateurs." },
  { title: "Cheminées",              desc: "Plusieurs cheminées fonctionnelles, dont une en marbre verde dans la salle à manger." },
  { title: "Bureau indépendant",     desc: "Un espace de travail séparé, à l'écart du reste de la vie familiale." },
  { title: "Terrain arboré",         desc: "9 000 m² de parc paysagé, arbres centenaires, ombre et silence." },
  { title: "Terrain complémentaire", desc: "Possibilité d'acquisition de terrain supplémentaire attenant." },
];

export default function LeMoulinPage() {
  return (
    <PageShell>

      {/* ─── 1. HERO ─── */}
      <div id="galerie">
        <PropertyHero
          titleLine1="Le Moulin"
          titleLine2="de l'Averanède"
          tagline="Une maison de maître en galets de Garonne, posée dans un parc de neuf mille mètres carrés."
          imageSrc="/images/le-moulin/facade-02.jpg"
          imageAlt="Le Moulin de l'Averanède — façade principale"
          prix="549 000 €"
          surface="288 m²"
          terrain="13 000 m²"
          galerieHref="#galerie"
        />
      </div>

      {/* ─── 2. INTRODUCTION ÉDITORIALE ─── */}
      <section style={{ padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-14">

          {/* Eyebrow + Titre pleine largeur */}
          <div className="flex flex-col gap-5">
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A" }}>
              La propriété
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.05, color: "#1F1E1B" }}>
              Une maison bâtie{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>pour durer.</em>
            </h2>
          </div>

          {/* Texte — deux colonnes sur desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6" style={{ borderTop: "1px solid #C9B79A30", paddingTop: "clamp(3rem, 6vw, 5rem)" }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.72 }}>
              Au bord de l&apos;Averanède, dans le silence des collines de Marquefave, le Moulin s&apos;impose avec la discrétion des grandes maisons — celles qui n&apos;ont pas besoin de se montrer pour convaincre. Ses murs en galets de Garonne portent un siècle d&apos;histoire familiale.
            </p>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#1F1E1B", opacity: 0.72 }}>
              288 mètres carrés de volumes généreux, des hauteurs sous plafond qui laissent respirer, des moulures d&apos;époque intactes, une cave voûtée fraîche et des cheminées qui ont réchauffé des générations. Tout cela sur 13 000 m² de terrain — parc arboré et terres attenantes, dont 400 m² à vocation équestre, avec une possibilité de construction sous réserve d&apos;évolution du PLU.
            </p>
          </div>

          {/* Phrase finale en pleine largeur */}
          <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, color: "#B85C3E" }}>
            C&apos;est une maison qui se vit, pas qui se visite. Une maison à habiter pleinement, à transmettre.
          </p>

        </div>
      </section>

      {/* ─── 3. GALERIE IMMERSIVE ─── */}
      <section style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-5">

          {/* Ligne 1 — grande + portrait, même hauteur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ height: "clamp(320px, 55vw, 620px)" }}>
            <div className="md:col-span-2 relative overflow-hidden h-full" style={{ backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/facade-01.jpg" alt="Façade — Le Moulin" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden h-full" style={{ backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/salon1.jpg" alt="Salon principal" fill className="object-cover" />
            </div>
          </div>

          {/* Ligne 2 — trois photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/salle-manger.jpg" alt="Salle à manger" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/cuisine.jpg" alt="Cuisine avec poutres" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/chambre1.jpg" alt="Chambre principale" fill className="object-cover" />
            </div>
          </div>

          {/* Ligne 3 — deux photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/salon2.jpg" alt="Salon — vue secondaire" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#C9B79A15" }}>
              <Image src="/images/le-moulin/chambre2.jpg" alt="Chambre — vue secondaire" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. HABITER L'AVERANÈDE — 3 scénarios ─── */}
      <section style={{ backgroundColor: "#1F1E1B", padding: "clamp(6rem, 12vw, 10rem) clamp(2rem, 6vw, 5rem)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col">

          {/* En-tête section */}
          <div className="flex flex-col gap-5 pb-16" style={{ borderBottom: "1px solid #F2ECE012" }}>
            <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9B79A", opacity: 0.6 }}>
              Projections
            </span>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, color: "#F2ECE0" }}>
              Habiter{" "}
              <em style={{ fontStyle: "italic", color: "#B85C3E" }}>l&apos;Averanède.</em>
            </h2>
          </div>

          {/* Scénarios — un par ligne, aérés */}
          {[
            {
              num: "01",
              title: "Une maison de famille.",
              text: "Cinq chambres, deux salons, un parc pour les enfants et les chiens. À trente minutes de Toulouse : assez loin pour le silence, assez près pour l'école. La cuisine, à rouvrir sur le jardin, redeviendrait le cœur de la maison.",
            },
            {
              num: "02",
              title: "Un refuge de week-end.",
              text: "Pour ceux qui vivent à Toulouse ou plus loin — la maison se prête à l'arrivée du vendredi soir, au feu allumé, à la table de huit dans la salle à manger. Le bureau du rez-de-chaussée devient le seul lien gardé avec la semaine.",
            },
            {
              num: "03",
              title: "Un projet d'accueil.",
              text: "Le parc, les dépendances et les terres extensibles ouvrent à des projets plus longs : chambres d'hôtes, table paysanne, gîte, atelier d'artiste. Une maison qui sait accueillir sans cesser d'être une maison.",
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

      {/* ─── 7. CARACTÉRISTIQUES ─── */}
      <section style={{
        padding: "clamp(5rem, 10vw, 8rem) 2rem",
        borderTop: "1px solid #C9B79A30",
        borderBottom: "1px solid #C9B79A30",
      }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <EditorialTitle
            eyebrow="Le bien"
            title="Ce que les murs racontent."
            as="h2"
            align="left"
            size="md"
          />
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

      {/* ─── 7. LOCALISATION ─── */}
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
              Le village conserve son école, sa boulangerie, son marché du samedi sous la halle. Tout ce qui fait qu&apos;une maison de campagne reste habitable au quotidien — sans renoncer à la ville quand elle s&apos;invite.
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

      {/* ─── 8. CTA FINAL ─── */}
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
