"use client";

/**
 * ContactForm — Composant réutilisable
 * Utilisé sur la homepage et la page /contact
 */

import { useState } from "react";

interface ContactFormProps {
  /** Pré-sélectionne un bien si on arrive depuis une page bien */
  defaultBien?: "le-moulin" | "domaine-de-latour" | "";
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #C9B79A50",
  padding: "0.75rem 0",
  fontFamily: "Manrope, sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  color: "#1F1E1B",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Manrope, sans-serif",
  fontSize: "0.58rem",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#1F1E1B",
  opacity: 0.4,
  display: "block",
  marginBottom: "0.2rem",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
  appearance: "none" as const,
};

export default function ContactForm({ defaultBien = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    bien: defaultBien,
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue. Merci de réessayer ou de nous contacter par email.");
      }
    } catch {
      alert("Une erreur est survenue. Merci de réessayer ou de nous contacter par email.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-6" style={{ paddingTop: "3rem" }}>
        <span style={{ display: "block", width: "2rem", height: "1px", backgroundColor: "#C9B79A" }} />
        <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 300, fontStyle: "italic", color: "#1F1E1B", lineHeight: 1.4 }}>
          Message reçu. Nous revenons vers vous<br />sous 48 heures.
        </p>
        <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.75, color: "#1F1E1B", opacity: 0.5 }}>
          Chaque demande est lue personnellement par la famille.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" style={{ borderTop: "1px solid #C9B79A30", paddingTop: "3rem" }}>

      {/* Prénom + Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-1">
          <label style={labelStyle}>Prénom</label>
          <input name="prenom" type="text" required value={form.prenom} onChange={handleChange} placeholder="Jean" style={inputStyle} />
        </div>
        <div className="flex flex-col gap-1">
          <label style={labelStyle}>Nom</label>
          <input name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Dupont" style={inputStyle} />
        </div>
      </div>

      {/* Email + Téléphone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-1">
          <label style={labelStyle}>Email</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jean@exemple.fr" style={inputStyle} />
        </div>
        <div className="flex flex-col gap-1">
          <label style={labelStyle}>Téléphone</label>
          <input name="telephone" type="tel" required value={form.telephone} onChange={handleChange} placeholder="+33 6 00 00 00 00" style={inputStyle} />
        </div>
      </div>

      {/* Bien concerné */}
      <div className="flex flex-col gap-1">
        <label style={labelStyle}>Bien concerné</label>
        <select name="bien" required value={form.bien} onChange={handleChange} style={selectStyle}>
          <option value="">Sélectionnez</option>
          <option value="le-moulin">Le Moulin de l&apos;Averanède</option>
          <option value="domaine-de-latour">Domaine de Latour</option>
          <option value="les-deux">Les deux propriétés</option>
        </select>
      </div>

      {/* Message — obligatoire */}
      <div className="flex flex-col gap-1">
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Présentez-vous brièvement — qui vous êtes, pourquoi ce bien vous intéresse, votre situation actuelle…"
          style={{
            ...inputStyle,
            borderBottom: "none",
            border: "1px solid #C9B79A40",
            padding: "1rem",
            resize: "none",
            lineHeight: 1.8,
          }}
        />
      </div>

      {/* Discrétion */}
      <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.68rem", fontWeight: 300, lineHeight: 1.65, color: "#1F1E1B", opacity: 0.38 }}>
        Vos informations sont transmises directement à la famille, sans intermédiaire. Elles ne sont jamais partagées avec des tiers.
      </p>

      {/* Bouton */}
      <div>
        <button
          type="submit"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F2ECE0",
            backgroundColor: "#1F1E1B",
            border: "none",
            padding: "1rem 2.75rem",
            cursor: "pointer",
          }}
        >
          Envoyer ma demande
        </button>
      </div>

    </form>
  );
}
