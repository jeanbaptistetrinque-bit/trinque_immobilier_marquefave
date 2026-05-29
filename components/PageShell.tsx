/**
 * PageShell — Enveloppe de page standard
 * Intègre Header + Footer, gère le rythme vertical
 */

import Header from "./Header";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
  /** Permet d'injecter des classes supplémentaires sur le <main> */
  mainClassName?: string;
}

export default function PageShell({ children, mainClassName = "" }: PageShellProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F2ECE0" }}
    >
      <Header />
      <main className={`flex-1 w-full ${mainClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
