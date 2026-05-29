import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prenom, nom, email, telephone, bien, projet, decouverte, message } = body;

    const bienLabel =
      bien === "le-moulin" ? "Le Moulin de l'Averanède" :
      bien === "domaine-de-latour" ? "Domaine de Latour" :
      "Les deux propriétés";

    await resend.emails.send({
      from: "Maisons de Marquefave <onboarding@resend.dev>",
      to: ["jeanbaptistetrinque@hotmail.fr"],
      subject: `Nouvelle demande de visite — ${bienLabel}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1F1E1B;">
          <h2 style="font-size: 1.5rem; font-weight: 300; border-bottom: 1px solid #C9B79A; padding-bottom: 1rem;">
            Nouvelle demande — ${bienLabel}
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
            <tr><td style="padding: 0.6rem 0; opacity: 0.5; font-size: 0.8rem; width: 160px;">NOM</td><td>${prenom} ${nom}</td></tr>
            <tr><td style="padding: 0.6rem 0; opacity: 0.5; font-size: 0.8rem;">EMAIL</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 0.6rem 0; opacity: 0.5; font-size: 0.8rem;">TÉLÉPHONE</td><td>${telephone}</td></tr>
            <tr><td style="padding: 0.6rem 0; opacity: 0.5; font-size: 0.8rem;">BIEN</td><td>${bienLabel}</td></tr>
            <tr><td style="padding: 0.6rem 0; opacity: 0.5; font-size: 0.8rem;">PROJET</td><td>${projet}</td></tr>
            <tr><td style="padding: 0.6rem 0; opacity: 0.5; font-size: 0.8rem;">DÉCOUVERTE</td><td>${decouverte}</td></tr>
          </table>
          <div style="margin-top: 2rem; padding: 1.5rem; background: #F2ECE0; border-left: 3px solid #B85C3E;">
            <p style="margin: 0; font-size: 0.95rem; line-height: 1.8;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
