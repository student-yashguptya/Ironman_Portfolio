"use client";

import { useEffect } from "react";

export function StickyStack({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const updateStickyTops = () => {
      const cards = document.querySelectorAll('.sticky-card');
      const winH = window.innerHeight;
      cards.forEach(card => {
        const height = card.getBoundingClientRect().height;
        if (height > winH) {
          (card as HTMLElement).style.top = `-${height - winH}px`;
        } else {
          (card as HTMLElement).style.top = '0px';
        }
      });
    };

    updateStickyTops();
    window.addEventListener('resize', updateStickyTops);

    const resizeObserver = new ResizeObserver(() => {
      updateStickyTops();
    });

    document.querySelectorAll('.sticky-card').forEach(card => {
      resizeObserver.observe(card);
    });

    return () => {
      window.removeEventListener('resize', updateStickyTops);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="sticky-stack-container" style={{ position: "relative" }}>
      {children}
    </div>
  );
}
