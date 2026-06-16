/**
 * Données statiques des biens — Maisons de Carbonne
 * Ces données seront enrichies au fil des tâches suivantes.
 */

export interface Property {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  surfaceHabitable?: string;
  terrain?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const properties: Property[] = [
  {
    slug: "le-moulin",
    name: "Le Moulin de l'Averanède",
    tagline:
      "Maison de maître en galets de Garonne, 288 m², parc de 9 000 m². Entre lumière et silence.",
    location: "Carbonne — Haute-Garonne",
    surfaceHabitable: "288 m²",
    terrain: "9 000 m²",
    imageSrc: "/images/le-moulin/facade-02.jpg",
    imageAlt: "Le Moulin de l'Averanède — façade",
  },
  {
    slug: "domaine-de-latour",
    name: "Domaine de Latour",
    tagline:
      "294 m² sur 5 hectares. Bâtiment annexe, colombier, dépendances. Un domaine rare à 30 min de Toulouse.",
    location: "Carbonne — Haute-Garonne",
    surfaceHabitable: "294 m²",
    terrain: "5 hectares",
    imageSrc: "/images/domaine-de-latour/facade2.jpg",
    imageAlt: "Domaine de Latour — vue principale",
  },
];
