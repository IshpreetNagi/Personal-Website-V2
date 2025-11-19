/* empty css                                 */
import { e as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_Ce4Nkgvr.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" }
];
const navbar = () => {
  return /* @__PURE__ */ jsx("nav", { className: "sticky top-6 z-50 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-5 rounded-2xl mx-auto max-w-xs drop-shadow-md text-white text-lg flex justify-center sm:scale-80 sm:top-2 md:scale-80 md:top-4 lg:scale-90 lg:origin-top", children: /* @__PURE__ */ jsx("ul", { className: "flex justify-center gap-8 list-none m-0 p-0", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, className: "underline-animation", children: link.name }) }, link.href)) }) });
};

const handleCopy = () => {
  navigator.clipboard.writeText("ishpreetnagi@gmail.com");
  alert("Ishpreet's email was copied to clipboard!");
};
const SocialIcons = () => /* @__PURE__ */ jsxs("div", { className: " flex flex-col gap-7 items-center", children: [
  /* @__PURE__ */ jsxs(
    "a",
    {
      href: "/files/Ishpreet_Nagi_Resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Resume",
      className: "group underline-animation underline-animation-icon",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-cv-voting-elections-tanah-basah-glyph-tanah-basah.png",
            className: "w-9 h-9"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-full top-1/2 -translate-y-1/2 ml-2\r\n                    bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                      opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                      transition-opacity duration-300 whitespace-nowrap z-50",
            children: "Resume"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleCopy,
      className: "group underline-animation underline-animation-icon",
      children: [
        /* @__PURE__ */ jsx("img", { src: "/images/mail-64.png", className: "w-8 h-8" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-full top-1/2 -translate-y-1/2 ml-2\r\n                        bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                          opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                          transition-opacity duration-300 whitespace-nowrap z-50",
            children: "Email: ishpreetnagi@gmail.com"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://github.com/IshpreetNagi",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "GitHub",
      className: "group underline-animation underline-animation-icon",
      children: [
        /* @__PURE__ */ jsx(FaGithub, { className: "w-8 h-8" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-full top-1/2 -translate-y-1/2 ml-2\r\n                    bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                      opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                      transition-opacity duration-300 whitespace-nowrap z-50",
            children: "GitHub"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://www.linkedin.com/in/ishpreet-nagi-b609b1180/",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "LinkedIn",
      className: "group underline-animation underline-animation-icon",
      children: [
        /* @__PURE__ */ jsx(FaLinkedin, { className: "w-8 h-8" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-full top-1/2 -translate-y-1/2 ml-2\r\n                    bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                      opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                      transition-opacity duration-300 whitespace-nowrap z-50",
            children: "LinkedIn"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://pigeongram.com/pgorder.php",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Pigeon",
      className: "group underline-animation underline-animation-icon",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://img.icons8.com/pastel-glyph/64/FFFFFF/pigeon.png",
            className: "w-8 h-8"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-full top-1/2 -translate-y-1/2 ml-2\r\n                    bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                      opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                      transition-opacity duration-300 whitespace-nowrap z-50",
            children: "Bored of the Internet?"
          }
        )
      ]
    }
  )
] });
const Sidebar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center fixed bottom-16 left-3 z-50 gap-28 sm:scale-60 sm:-bottom-20 sm:-left-18 md:scale-80 md:-bottom-8 md:-left-14 lg:scale-90 lg:origin-bottom-left lg:bottom-10 lg:-left-4", children: [
    /* @__PURE__ */ jsx("div", { className: "-rotate-90 text-white/60 text-4xl", children: "Ishpreet Nagi" }),
    /* @__PURE__ */ jsx("nav", { className: " bg-white/5 backdrop-blur-sm border-r border-white/10 rounded-2xl w-16 drop-shadow-md text-white text-lg", children: /* @__PURE__ */ jsx("ul", { className: "list-none m-0 py-7", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SocialIcons, {}) }) }) })
  ] });
};

function Background() {
  const canvasRef = useRef(null);
  const Bubbles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
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
      Bubbles.current = Array.from({ length: 450 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        opacity: Math.random() * 0.8,
        speed: Math.random() * 0.55,
        isAccent: Math.random() < 0.5
      }));
    };
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const baseColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--Bubble-color");
      const [br, bg, bb] = baseColor.match(/\d+/g)?.map(Number) ?? [
        255,
        255,
        255
      ];
      const accentColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--accent-Bubble-color");
      const [ar, ag, ab] = accentColor.match(/\d+/g)?.map(Number) ?? [
        6,
        182,
        212
      ];
      Bubbles.current.forEach((bubble) => {
        bubble.y += bubble.speed;
        if (bubble.y > canvas.height) {
          bubble.y = 0;
          bubble.x = Math.random() * canvas.width;
        }
        const dx = bubble.x - mousePosition.current.x;
        const dy = bubble.y - (window.scrollY + mousePosition.current.y);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;
        if (distance < maxDistance && distance > 0) {
          const angle = Math.atan2(dy, dx);
          const pushStrength = (maxDistance - distance) / maxDistance * 2.5;
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
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    initBubbles();
    animate();
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute top-0 left-0 z-0 w-full",
      style: { background: "var(--background-color)" }
    }
  );
}

function HomePage$1() {
  return /* @__PURE__ */ jsxs("section", { className: "relative z-10 flex flex-col items-center justify-center gap-24 min-h-screen text-white text-center sm:max-w-[260px] sm:gap-18 md:max-w-[500px] md:gap-9 lg:top-9", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold max-w-4xl mx-auto leading-tight min-h-[11.5rem] sm:text-5xl sm:min-h-[15rem] md:text-5xl md:min-h-[7rem] lg:text-6xl lg:min-h-[10rem]", children: /* @__PURE__ */ jsx(
      TypeAnimation,
      {
        sequence: [
          250,
          "Hello, world! I'm Ishpreet👋",
          2500,
          "",
          500,
          "I code things",
          2500,
          "",
          250
        ],
        wrapper: "span",
        speed: 9,
        repeat: Infinity
      }
    ) }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 sm:text-sm lg:text-base", children: "Full-Stack Developer who enjoys explaining code to a rubber ducky at 1 am" })
  ] });
}

function Waves() {
  const [heights, setHeights] = useState([10, 15, 7, 12, 20]);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prev) => prev.map(() => 5 + Math.floor(Math.random() * 20)));
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex space-x-1 mb-2 justify-center items-end h-8", children: heights.map((height, i) => /* @__PURE__ */ jsx(
    "div",
    {
      style: { height: `${height}px` },
      className: "w-1 bg-[rgb(29,185,84)] rounded transition-all duration-300 ease-in-out"
    },
    i
  )) });
}
function ScrollingText({
  text,
  className
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !textRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;
      setIsOverflowing(textWidth > containerWidth);
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [text]);
  useEffect(() => {
    if (!isOverflowing) {
      setOffset(0);
      return;
    }
    let animationFrame;
    let timeoutId;
    let direction = "left";
    const delay = 2e3;
    const step = () => {
      if (!containerRef.current || !textRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;
      const maxOffset = -(textWidth - containerWidth);
      const baseSpeed = 1.5;
      const speed = Math.max(
        0.5,
        baseSpeed * ((textWidth - containerWidth) / 600)
      );
      setOffset((prev) => {
        if (direction === "left") {
          if (prev > maxOffset) return prev - speed;
          cancelAnimationFrame(animationFrame);
          timeoutId = window.setTimeout(() => {
            direction = "right";
            animationFrame = requestAnimationFrame(step);
          }, delay);
          return maxOffset;
        } else {
          if (prev < 0) return prev + speed;
          cancelAnimationFrame(animationFrame);
          timeoutId = window.setTimeout(() => {
            direction = "left";
            animationFrame = requestAnimationFrame(step);
          }, delay);
          return 0;
        }
      });
      animationFrame = requestAnimationFrame(step);
    };
    timeoutId = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [isOverflowing, text]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: "overflow-hidden whitespace-nowrap", children: /* @__PURE__ */ jsx(
    "p",
    {
      ref: textRef,
      className: `${className} inline-block`,
      style: { transform: `translateX(${offset}px)` },
      children: text
    }
  ) });
}
function MusicPlayer() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [lastPlayed, setLastPlayed] = useState(null);
  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("/api/lastfm");
        const data = await res.json();
        setNowPlaying(data.nowPlaying);
        setLastPlayed(data.lastPlayed);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    }
    fetchTracks();
    const interval = setInterval(fetchTracks, 15e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "text-white", children: nowPlaying ? /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-9 sm:flex-col sm:gap-4 md:flex-col md:gap-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg text-[rgb(29,185,84)] mt-3 sm:text-sm sm:mt-9", children: "Currently jamming to..." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] px-5 py-4 w-104 rounded-2xl overflow-hidden origin-left scale-80 sm:scale-100 sm:w-52 sm:px-4 sm:py-3 sm:rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-20 h-20 flex-shrink-0 sm:w-12 sm:h-12", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: nowPlaying.image.find((img) => img.size === "extralarge")?.["#text"] || "",
            alt: "Album Art",
            className: "w-full h-full object-cover rounded-xl shadow-lg"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl", children: /* @__PURE__ */ jsx(Waves, {}) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-6 gap-1 w-60 sm:ml-4 sm:gap-0 sm:w-28", children: [
        /* @__PURE__ */ jsx(
          ScrollingText,
          {
            text: nowPlaying.name,
            className: "text-3xl sm:text-lg"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-[10px]", children: nowPlaying.artist["#text"] })
      ] })
    ] })
  ] }) : lastPlayed ? /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-9 sm:flex-col sm:gap-4 md:flex-col md:gap-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg text-[rgb(29,185,84)] mt-3 sm:text-sm sm:mt-9", children: "Previously jamming to..." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] px-5 py-4 w-104 rounded-2xl overflow-hidden origin-left scale-80 sm:scale-100 sm:w-52 sm:px-4 sm:py-3 sm:rounded-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "relative w-20 h-20 flex-shrink-0 sm:w-12 sm:h-12", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: lastPlayed.image.find((img) => img.size === "extralarge")?.["#text"] || "",
          alt: "Album Art",
          className: "w-full h-full object-cover rounded-xl shadow-lg"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-6 gap-1 w-60 sm:ml-4 sm:gap-0 sm:w-28", children: [
        /* @__PURE__ */ jsx(
          ScrollingText,
          {
            text: lastPlayed.name,
            className: "text-3xl sm:text-lg"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-[10px]", children: lastPlayed.artist["#text"] })
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx("h2", { className: "text-lg text-[rgb(29,185,84)] items-center justify-center", children: "Error accessing music data. Last.fm unavailable." }) }) });
}

function HomePage() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-start z-10 md:max-w-[550px] lg:scale-80", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 1 },
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-[52px] text-white mb-11 pl-1 sm:text-3xl sm:pl-0 sm:flex sm:justify-center sm:mb-8 md:text-4xl md:pl-1", children: "A bit about me..." }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-3xl mx-auto sm:w-68 sm:rounded-2xl sm:justify-center sm:px-3 sm:py-8 sm:m-auto md:rounded-2xl md:justify-center md:py-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center w-360 h-176 mx-auto drop-shadow-md sm:flex-col sm:w-68 sm:h-auto md:flex-col md:h-auto md:pt-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 px-7 sm:px-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/Last-Laugh.jpg",
              alt: "Picture of Ishpreet",
              className: "rounded-3xl object-cover w-148 h-148 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:rounded-2xl sm:w-54 sm:h-54 md:w-112 md:h-112"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-white text-lg overflow-auto gap-6 text-left px-8 pt-5 sm:text-xs sm:w-68 sm:gap-0 sm:pt-7 md:w-128 md:pt-8 md:text-base", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0", children: [
              "Hey there, I’m",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-[rgb(6,182,212)] font-bold", children: "Ishpreet Nagi" }),
              ", a software developer based in Canada.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("br", {}),
              "Apart from being the best programmer in my family (I am the only one), I am currently completing my fourth and final year in computer science at McMaster University.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("br", {}),
              "I am intrigued by all aspects of the software development landscape, reveling in the frustration that accompanies the methodical process of backend development, as well as the countless hours lost in frontend development. Apart from those two, I spend my time learning and developing my skills within whichever topic has caught my fascination. My recent interests include machine learning, game development, and expanding upon my pre-existing frontend development knowledge with more experience, like this website.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("br", {}),
              "Beyond my technical prowess and interests, you can find me enjoying a self-made latte with a nice movie during a quiet night, getting lost in other worlds through a fun video game, or simply jamming out to a track as I imagine myself in the music video."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "sm:origin-left sm:-mt-5 md:scale-95 md:origin-top-left", children: /* @__PURE__ */ jsx(MusicPlayer, {}) })
          ] })
        ] }) })
      ]
    }
  ) });
}

(/* @__PURE__ */ new Date()).getFullYear();
function Projects() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-start z-10 lg:scale-83", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 1 },
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-start z-10 overflow-hidden relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex text-[52px] text-white mb-11 pl-19 sm:text-3xl sm:justify-center sm:pl-0 sm:mb-8 md:text-4xl md:pl-1 xl:pl-14", children: [
          " ",
          "My Projects",
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-20 justify-center items-center flex-wrap max-w-[1600px] sm:gap-6 sm:max-w-[500px] md:max-w-[550px] md:gap-10 lg:gap-10", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/IshpreetNagi/Tempestuous-Turrets",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl", children: [
                /* @__PURE__ */ jsxs("section", { className: "flex items-center justify-start w-full h-full drop-shadow-md", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/tempestuous_turrets.png",
                      alt: "Tempestuous Turrets Gameplay Picture",
                      className: "rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-1 md:-mt-3 md:mb-6", children: "Tempestuous Turrets" }),
                    /* @__PURE__ */ jsx("div", { className: "text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm", children: "A point and click local multiplayer game where you battle others across various battlefields to be the last turret standing!" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block", children: "A point and click local multiplayer game." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3 mt-7 sm:-mt-2 sm:gap-1 md:scale-90 md:origin-top-left md:mt-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
                            alt: "C# Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "C#"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
                            alt: "Unity Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Unity"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                            alt: "Git Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Git"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
                            alt: "Azure Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Azure"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
                            alt: "Photoshop Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Photoshop"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(FaGithub, { className: "w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/IshpreetNagi/Personal-Website-V2",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl", children: [
                /* @__PURE__ */ jsxs("section", { className: "flex items-center justify-start w-full h-full drop-shadow-md", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/website_projectspage.png",
                      alt: "Projects Page Picture",
                      className: "rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-2 md:-mt-3 md:mb-6", children: "This Website" }),
                    /* @__PURE__ */ jsx("div", { className: "text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm", children: "You are still here and looking around, so it’s not too bad, right? Feel free to reach out to me if you have any questions or suggestions!" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block", children: "You are still here and looking around, so it’s not too bad, right?" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3 mt-7 sm:-mt-3 sm:gap-1 sm:scale-90 sm:origin-left md:scale-90 md:origin-top-left md:mt-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "/images/astro-icon-light-gradient.svg",
                            alt: "Astro Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Astro"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                            alt: "Tailwind CSS Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Tailwind CSS"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                            alt: "Git Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Git"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                            alt: "TypeScript Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "TypeScript"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
                            alt: "Vercel Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Vercel"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(FaGithub, { className: "w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/IshpreetNagi/McMaster-Room-Booking-Portal",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl", children: [
                /* @__PURE__ */ jsxs("section", { className: "flex items-center justify-start w-full h-full drop-shadow-md", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/room_booking_portal.png",
                      alt: "Room Booking Portal Homepage Picture",
                      className: "rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold mt-4 mb-8 sm:hidden md:-mt-3 md:mb-3", children: "McMaster Room Booking" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-2 sm:block", children: "Room Booking" }),
                    /* @__PURE__ */ jsx("div", { className: "text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm", children: "A website to centralize and streamline the room booking process for the buildings across the McMaster University campus." }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block", children: "A room booking website for McMaster University." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3 mt-7 sm:-mt-2 sm:gap-1 sm:scale-75 sm:origin-left md:scale-90 md:origin-top-left md:mt-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                            alt: "Tailwind CSS Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Tailwind CSS"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                            alt: "TypeScript Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "TypeScript"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                            alt: "JavaScript Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "JavaScript"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                            alt: "Git Icon",
                            className: "w-8 h-8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                            children: "Git"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(FaGithub, { className: "w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/IshpreetNagi/Arcade-Game-Emulator",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl", children: [
                /* @__PURE__ */ jsxs("section", { className: "flex items-center justify-start w-full h-full drop-shadow-md", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/python_arcade.JPG",
                      alt: "Arcade Games Emulator Homepage Picture",
                      className: "rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-1 sm:hidden md:-mt-3 md:mb-3", children: "Arcade Games Emulator" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-1 sm:block", children: "Games Emulator" }),
                    /* @__PURE__ */ jsx("div", { className: "text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm", children: "Three iconic games —Who Wants to Be a Millionaire, Whack-a-Mole, and Number Guesser —are brought together in a single package." }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block", children: "Three games brought together in a package." }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-3 mt-7 sm:-mt-2 sm:gap-1 sm:scale-60 sm:origin-left md:scale-90 md:origin-top-left md:mt-3", children: /* @__PURE__ */ jsxs("div", { className: "relative group inline-block", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                          alt: "Python Icon",
                          className: "w-8 h-8"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2\r\n                                      bg-gray-800 text-white text-sm rounded py-1 px-2\r\n                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible\r\n                                        transition-opacity duration-300 whitespace-nowrap z-50",
                          children: "Python"
                        }
                      )
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(FaGithub, { className: "w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/IshpreetNagi?tab=repositories",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("div", { className: "flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-52 h-20 rounded-2xl overflow-hidden box-select-hover sm:scale-60 sm:origin-top md:scale-80 md:origin-top", children: /* @__PURE__ */ jsxs("section", { className: "flex items-center justify-center w-full h-full drop-shadow-md text-white gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xl", children: "See more" }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://img.icons8.com/sf-regular-filled/48/FFFFFF/right-squared.png",
                    alt: "Right arrow",
                    className: "w-8 h-8"
                  }
                )
              ] }) })
            }
          )
        ] })
      ] })
    }
  ) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0a0422"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><title>Ishpreet Nagi</title><link rel="icon" type="image/png" href="/images/hand_waving.png">${renderHead()}</head> <body class="overflow-x-hidden"> ${renderComponent($$result, "Background", Background, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Background", "client:component-export": "default" })} <div class="relative z-10"> ${renderComponent($$result, "Sidebar", Sidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Sidebar", "client:component-export": "default" })} ${renderComponent($$result, "Navbar", navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Navbar", "client:component-export": "default" })} <section id="home" class="flex items-center justify-center relative min-h-screen pt-24 -mt-36 pb-20 overflow-hidden sm:-mt-28"> ${renderComponent($$result, "Home", HomePage$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Home", "client:component-export": "default" })} </section> <section id="about" class="flex items-center justify-center relative min-h-screen overflow-hidden sm:pt-22 md:pt-28"> ${renderComponent($$result, "About", HomePage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/About", "client:component-export": "default" })} </section> <section id="projects" class="flex items-center justify-center relative min-h-[auto] pt-10 md:min-h-screen lg:min-h-screen overflow-hidden sm:pt-22 md:pt-28"> ${renderComponent($$result, "Projects", Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Projects", "client:component-export": "default" })} </section> <footer class="text-center text-white/40 text-xs py-4 sm:scale-70 sm:origin-bottom md:scale-70 md:origin-bottom xl:pt-20"> <p>&copy; ${year} Ishpreet Nagi. All rights reserved.</p> </footer> </div> </body></html>`;
}, "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/pages/index.astro", void 0);

const $$file = "C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
