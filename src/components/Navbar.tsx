import type { FC } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: FC = () => {
  return (
    <nav className="sticky top-6 z-50 bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-5 rounded-full mx-auto max-w-md drop-shadow-md text-white text-lg">
      <ul className="flex justify-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="underline-animation"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
