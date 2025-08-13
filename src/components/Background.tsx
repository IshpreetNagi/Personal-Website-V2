// Background recieved from: https://github.com/raulrls/Astro-Shadcn-portfolio
// Add this in footer of page: Background animation by Raúl Isaac (then link to his github portflio)

import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  isAccent: boolean;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const Bubbles = useRef<Bubble[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    const initBubbles = () => {
      Bubbles.current = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        opacity: Math.random() * 0.8,
        speed: Math.random() * 0.6,
        isAccent: Math.random() < 0.5,
      }));
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--Bubble-color');
      const [br, bg, bb] = baseColor.match(/\d+/g)?.map(Number) ?? [255, 255, 255];

      const accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-Bubble-color');
      const [ar, ag, ab] = accentColor.match(/\d+/g)?.map(Number) ?? [6, 182,212];

      Bubbles.current.forEach((Bubble) => {
        Bubble.y += Bubble.speed;
        if (Bubble.y > canvas.height) {
          Bubble.y = 0;
          Bubble.x = Math.random() * canvas.width;
        }

        const dx = Bubble.x - mousePosition.current.x;
        const dy = Bubble.y - mousePosition.current.y;

        const [r, g, b] = Bubble.isAccent ? [ar, ag, ab] : [br, bg, bb];

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Bubble.opacity})`;
        ctx.beginPath();
        ctx.arc(Bubble.x, Bubble.y, Bubble.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    setCanvasSize();
    initBubbles();
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ background: 'var(--background-color)' }}
    />
  );
}