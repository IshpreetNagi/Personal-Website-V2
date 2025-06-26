import type { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => (
  <div className=" text-white flex flex-col gap-7 items-center">
    <a href="https://github.com/IshpreetNagi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="underline-animation underline-animation-icon">
      <FaGithub className="w-8 h-8" />
    </a>
    <a href="https://www.linkedin.com/in/ishpreet-nagi-b609b1180/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="underline-animation underline-animation-icon">
      <FaLinkedin className="w-8 h-8" />
    </a>
    <a href="https://x.com/socialish_" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="underline-animation underline-animation-icon">
      <FaTwitter className="w-8 h-8" />
    </a>
  </div>
);

const Sidebar: FC = () => {
  return (
    <div>
      <nav className="fixed bottom-14 left-14 z-10 bg-white/5 backdrop-blur-sm border-r border-white/5 rounded-3xl w-16 drop-shadow-md text-white text-lg">
        <ul className="list-none m-0 py-9">
          <li>
            <SocialIcons />
          </li>
        </ul>
      </nav>
      <div className="-rotate-90 fixed bottom-94 -left-0.5 z-50 text-white/60 text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Ishpreet Nagi
      </div>"
    </div>
  );
};

export default Sidebar;
