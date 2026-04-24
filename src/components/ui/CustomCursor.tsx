"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCentering, setIsCentering] = useState(true);

  useEffect(() => {
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updatePosition = (e: MouseEvent) => {
      setIsCentering(false);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsCentering(true);
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovered(true);
      }
    };

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-cursor-wrapper {
          position: fixed;
          pointer-events: none;
          z-index: 2147483647;
          transform: translate(-50%, -50%);
          transition: transform 0.05s linear;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
        }

        .custom-cursor-wrapper.centering {
          transition: transform 0.05s linear, left 0.5s cubic-bezier(0.16, 1, 0.3, 1), top 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .custom-cursor-loader {
          --color-one: #d4a22f; /* Target theme accent */
          --color-two: #a67c20;
          --color-three: rgba(212, 162, 47, 0.5);
          --color-four: rgba(166, 124, 32, 0.5);
          --color-five: rgba(212, 162, 47, 0.25);
          --time-animation: 2s;
          --size: 0.18;
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow: 0 0 25px 0 var(--color-three), 0 20px 50px 0 var(--color-four);
          animation: custom-cursor-colorize calc(var(--time-animation) * 3) ease-in-out infinite;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: rgba(212, 162, 47, 0.1);
        }

        .custom-cursor-wrapper.hovered .custom-cursor-loader {
          transform: scale(0.32);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .custom-cursor-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow: inset 0 10px 10px 0 var(--color-three), inset 0 -10px 10px 0 var(--color-four);
        }

        .custom-cursor-loader .box {
          width: 100px;
          height: 100px;
          background: linear-gradient(180deg, var(--color-one) 30%, var(--color-two) 70%);
          mask: url(#custom-cursor-clipping);
          -webkit-mask: url(#custom-cursor-clipping);
        }

        .custom-cursor-loader svg {
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
          opacity: 0;
        }

        .custom-cursor-loader svg #custom-cursor-clipping {
          filter: contrast(15);
          animation: custom-cursor-roundness calc(var(--time-animation) / 2) linear infinite;
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon {
          filter: blur(7px);
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: custom-cursor-rotation var(--time-animation) linear infinite reverse;
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: custom-cursor-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: custom-cursor-rotation var(--time-animation) linear infinite reverse;
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: custom-cursor-rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: custom-cursor-rotation var(--time-animation) linear infinite;
        }

        .custom-cursor-loader svg #custom-cursor-clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: custom-cursor-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
        }

        @keyframes custom-cursor-rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes custom-cursor-roundness {
          0% { filter: contrast(15); }
          20% { filter: contrast(3); }
          40% { filter: contrast(3); }
          60% { filter: contrast(15); }
          100% { filter: contrast(15); }
        }

        @keyframes custom-cursor-colorize {
          0% { filter: hue-rotate(0deg); }
          20% { filter: hue-rotate(-30deg); }
          40% { filter: hue-rotate(-60deg); }
          60% { filter: hue-rotate(-90deg); }
          80% { filter: hue-rotate(-45deg); }
          100% { filter: hue-rotate(0deg); }
        }
      `}} />
      <div 
        className={`custom-cursor-wrapper ${isHovered ? 'hovered' : ''} ${isCentering ? 'centering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className="custom-cursor-loader">
          <svg width={100} height={100} viewBox="0 0 100 100">
            <defs>
              <mask id="custom-cursor-clipping">
                <polygon points="0,0 100,0 100,100 0,100" fill="black" />
                <polygon points="25,25 75,25 50,75" fill="white" />
                <polygon points="50,25 75,75 25,75" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
              </mask>
            </defs>
          </svg>
          <div className="box" />
        </div>
      </div>
    </>
  );
}
