import { useRef, useState, useEffect } from "react";

function ScrollingSingle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [titleOffset, setTitleOffset] = useState(0);
  const [titleOverflow, setTitleOverflow] = useState(0);

  // Track current offsets with refs for animation loop
  const currentTitleOffset = useRef(0);

  // Check overflow distances
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !titleRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const titleWidth = titleRef.current.scrollWidth;

      setTitleOverflow(Math.max(0, titleWidth - containerWidth));
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [title]);

  // Coordinated scroll effect
  useEffect(() => {
    const maxOverflow = Math.max(titleOverflow);
    if (maxOverflow === 0) {
      setTitleOffset(0);
      currentTitleOffset.current = 0;
      return;
    }

    let animationFrame: number;
    let timeoutId: number;
    let direction: "left" | "right" = "left";
    let lastTime = 0;
    let isPaused = false;
    const delay = 2000;
    const speed = Math.max(20, maxOverflow / 6); // px/s

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      const delta = speed * deltaSeconds;

      // Update title offset
      let newTitleOffset = currentTitleOffset.current;
      if (direction === "left") {
        newTitleOffset = Math.max(-titleOverflow, newTitleOffset - delta);
      } else {
        newTitleOffset = Math.min(0, newTitleOffset + delta);
      }
      currentTitleOffset.current = newTitleOffset;
      setTitleOffset(newTitleOffset);

      // Check if both have reached their limits
      const titleAtEnd =
        direction === "left"
          ? newTitleOffset <= -titleOverflow
          : newTitleOffset >= 0;

      if (titleAtEnd && !isPaused) {
        isPaused = true;
        cancelAnimationFrame(animationFrame);
        timeoutId = window.setTimeout(() => {
          direction = direction === "left" ? "right" : "left";
          isPaused = false;
          lastTime = 0;
          animationFrame = requestAnimationFrame(step);
        }, delay);
        return;
      }

      if (!isPaused) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [titleOverflow]);

  return (
    <>
      <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
        <p
          ref={titleRef}
          className={`inline-block ${className || ""}`}
          style={{ transform: `translateX(${titleOffset}px)` }}
        >
          {title}
        </p>
      </div>
    </>
  );
}

function ScrollingDouble({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}: {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [titleOffset, setTitleOffset] = useState(0);
  const [subtitleOffset, setSubtitleOffset] = useState(0);
  const [titleOverflow, setTitleOverflow] = useState(0);
  const [subtitleOverflow, setSubtitleOverflow] = useState(0);

  // Track current offsets with refs for animation loop
  const currentTitleOffset = useRef(0);
  const currentSubtitleOffset = useRef(0);

  // Check overflow distances
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !titleRef.current || !subtitleRef.current)
        return;

      const containerWidth = containerRef.current.clientWidth;
      const titleWidth = titleRef.current.scrollWidth;
      const subtitleWidth = subtitleRef.current.scrollWidth;

      setTitleOverflow(Math.max(0, titleWidth - containerWidth));
      setSubtitleOverflow(Math.max(0, subtitleWidth - containerWidth));
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [title, subtitle]);

  // Coordinated scroll effect
  useEffect(() => {
    const maxOverflow = Math.max(titleOverflow, subtitleOverflow);
    if (maxOverflow === 0) {
      setTitleOffset(0);
      setSubtitleOffset(0);
      currentTitleOffset.current = 0;
      currentSubtitleOffset.current = 0;
      return;
    }

    let animationFrame: number;
    let timeoutId: number;
    let direction: "left" | "right" = "left";
    let lastTime = 0;
    let isPaused = false;
    const delay = 2000;
    const speed = Math.max(20, maxOverflow / 6); // px/s

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      const delta = speed * deltaSeconds;

      // Update title offset
      let newTitleOffset = currentTitleOffset.current;
      if (direction === "left") {
        newTitleOffset = Math.max(-titleOverflow, newTitleOffset - delta);
      } else {
        newTitleOffset = Math.min(0, newTitleOffset + delta);
      }
      currentTitleOffset.current = newTitleOffset;
      setTitleOffset(newTitleOffset);

      // Update subtitle offset
      let newSubtitleOffset = currentSubtitleOffset.current;
      if (direction === "left") {
        newSubtitleOffset = Math.max(
          -subtitleOverflow,
          newSubtitleOffset - delta,
        );
      } else {
        newSubtitleOffset = Math.min(0, newSubtitleOffset + delta);
      }
      currentSubtitleOffset.current = newSubtitleOffset;
      setSubtitleOffset(newSubtitleOffset);

      // Check if both have reached their limits
      const titleAtEnd =
        direction === "left"
          ? newTitleOffset <= -titleOverflow
          : newTitleOffset >= 0;
      const subtitleAtEnd =
        direction === "left"
          ? newSubtitleOffset <= -subtitleOverflow
          : newSubtitleOffset >= 0;

      if (titleAtEnd && subtitleAtEnd && !isPaused) {
        isPaused = true;
        cancelAnimationFrame(animationFrame);
        timeoutId = window.setTimeout(() => {
          direction = direction === "left" ? "right" : "left";
          isPaused = false;
          lastTime = 0;
          animationFrame = requestAnimationFrame(step);
        }, delay);
        return;
      }

      if (!isPaused) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [titleOverflow, subtitleOverflow]);

  return (
    <>
      <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
        <p
          ref={titleRef}
          className={`${titleClassName} inline-block`}
          style={{ transform: `translateX(${titleOffset}px)` }}
        >
          {title}
        </p>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <p
          ref={subtitleRef}
          className={`${subtitleClassName} inline-block`}
          style={{ transform: `translateX(${subtitleOffset}px)` }}
        >
          {subtitle}
        </p>
      </div>
    </>
  );
}

export default function ScrollEffect({
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
}: {
  title: string;
  titleClassName?: string;
  subtitle?: string | null;
  subtitleClassName?: string;
}) {
  return (
    <>
      {subtitle ? (
        <ScrollingDouble
          title={title}
          subtitle={subtitle}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />
      ) : (
        <ScrollingSingle title={title} className={titleClassName} />
      )}
    </>
  );
}
