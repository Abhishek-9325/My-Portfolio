"use client";
import { useEffect, useRef } from "react";

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    container.style.setProperty("--gap", CONFIG.gap);
    container.style.setProperty("--blur", CONFIG.blur);
    container.style.setProperty("--spread", CONFIG.spread);
    container.style.setProperty(
      "--direction",
      CONFIG.vertical ? "column" : "row"
    );

    const updateGlow = (event) => {
      if (!card) return;
      const cardBounds = card.getBoundingClientRect();

      const isNear =
        event.clientX > cardBounds.left - CONFIG.proximity &&
        event.clientX < cardBounds.right + CONFIG.proximity &&
        event.clientY > cardBounds.top - CONFIG.proximity &&
        event.clientY < cardBounds.bottom + CONFIG.proximity;

      if (isNear) {
        card.style.setProperty("--active", 1);
      } else {
        card.style.setProperty("--active", CONFIG.opacity);
      }

      const cardCenter = [
        cardBounds.left + cardBounds.width * 0.5,
        cardBounds.top + cardBounds.height * 0.5,
      ];

      let angle =
        (Math.atan2(event.clientY - cardCenter[1], event.clientX - cardCenter[0]) *
          180) /
        Math.PI;

      angle = angle < 0 ? angle + 360 : angle;
      card.style.setProperty("--start", angle + 90);
    };

    const handlePointerMove = (event) => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => updateGlow(event));
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [identifier]);

  return (
    <div
      ref={containerRef}
      className={`glow-container-${identifier} glow-container`}
    >
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
