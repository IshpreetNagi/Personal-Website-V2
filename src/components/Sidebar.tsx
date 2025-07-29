import type { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/global.css"; // Ensure global styles are imported

const handleCopy = () => {
    navigator.clipboard.writeText("ishpreetnagi@gmail.com");
    alert("Email: ishpreetnagi@gmail.com copied to clipboard!");
}

const SocialIcons = () => (
  <div className=" flex flex-col gap-7 items-center">
    <a href="/public/files/Ishpreet_Nagi_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="group underline-animation underline-animation-icon">
      <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-cv-voting-elections-tanah-basah-glyph-tanah-basah.png" className="w-9 h-9"/>
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                    bg-gray-800 text-white text-sm rounded py-1 px-2
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-300 whitespace-nowrap z-50">
        Resume
      </div>
    </a>
    <button onClick={handleCopy} className="group underline-animation underline-animation-icon">
      <img src="/images/mail-64.png" className="w-8 h-8"/>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                        bg-gray-800 text-white text-sm rounded py-1 px-2
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-opacity duration-300 whitespace-nowrap z-50">
              Email: ishpreetnagi@gmail.com
          </div>
    </button>
    <a href="https://github.com/IshpreetNagi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group underline-animation underline-animation-icon">
      <FaGithub className="w-8 h-8" />
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                    bg-gray-800 text-white text-sm rounded py-1 px-2
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-300 whitespace-nowrap z-50">
        GitHub
      </div>
    </a>
    <a href="https://www.linkedin.com/in/ishpreet-nagi-b609b1180/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group underline-animation underline-animation-icon">
      <FaLinkedin className="w-8 h-8" />
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                    bg-gray-800 text-white text-sm rounded py-1 px-2
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-300 whitespace-nowrap z-50">
        LinkedIn
      </div>
    </a>
    {/* <a href="https://x.com/socialish_" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="group underline-animation underline-animation-icon">
      <img src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png" className="w-8 h-8"/>
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                    bg-gray-800 text-white text-xs rounded py-1 px-2
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-300 whitespace-nowrap z-50">
        X (formerly Twitter)
      </div>
    </a> */}
  </div>
);

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col items-center fixed bottom-16 left-3 z-50 gap-28">
      <div className="-rotate-90 text-white/60 text-4xl">Ishpreet Nagi</div>
      <nav className=" bg-white/5 backdrop-blur-sm border-r border-white/10 rounded-2xl w-16 drop-shadow-md text-white text-lg">
        <ul className="list-none m-0 py-7">
          <li>
            <SocialIcons />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;