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
      canvas.height = document.body.scrollHeight; // Cover full page
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.body.scrollHeight}px`;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const observer = new ResizeObserver(() => {
      setCanvasSize();
    });
    observer.observe(document.body);

    const initBubbles = () => {
      Bubbles.current = Array.from({ length: 390 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        opacity: Math.random() * 0.8,
        speed: Math.random() * 0.55,
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
      const [ar, ag, ab] = accentColor.match(/\d+/g)?.map(Number) ?? [6, 182, 212];

      Bubbles.current.forEach((bubble) => {
        bubble.y += bubble.speed;
        if (bubble.y > canvas.height) {
          bubble.y = 0;
          bubble.x = Math.random() * canvas.width;
        }

        // Smooth bubble avoidance
        const dx = bubble.x - mousePosition.current.x;
        const dy = bubble.y - (window.scrollY + mousePosition.current.y);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        if (distance < maxDistance && distance > 0) {
          const angle = Math.atan2(dy, dx);
          const pushStrength = ((maxDistance - distance) / maxDistance) * 1.5;
          bubble.x += Math.cos(angle) * pushStrength;
          bubble.y += Math.sin(angle) * pushStrength;
        }

        const [r, g, b] = bubble.isAccent ? [ar, ag, ab] : [br, bg, bb];
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${bubble.opacity})`;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    initBubbles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 -z-10 w-full"
      style={{ background: 'var(--background-color)' }}
    />
  );
}
