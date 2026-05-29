"use client";

/**
 * HeroParallax — Hero immersif avec effet parallax subtil au scroll
 * Framer Motion + useScroll + useTransform
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface HeroParallaxProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function HeroParallax({ imageSrc, imageAlt, children }: HeroParallaxProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // L'image se déplace plus lentement que le scroll → effet parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "92vh", minHeight: "580px" }}
    >
      {/* Image parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale: 1.1 }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Voile gradient bas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(31,30,27,0.65) 0%, rgba(31,30,27,0.1) 45%, transparent 70%)",
        }}
      />

      {/* Contenu hero — bas de section */}
      <div className="absolute bottom-0 left-0 w-full px-8 md:px-16 pb-14 md:pb-20 relative z-10">
        {children}
      </div>
    </section>
  );
}
