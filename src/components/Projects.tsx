import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const year = new Date().getFullYear();

// Links for icons: https://devicon.dev

export default function Projects() {
  return (
    <div className="flex flex-col justify-start z-10 lg:scale-83">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.0 }}>
        <div className="flex flex-col justify-start z-10 overflow-hidden relative">
                      <div className="text-[52px] text-white mb-11 pl-15 sm:text-3xl sm:flex sm:justify-center sm:pl-0 sm:mb-8 md:text-4xl md:pl-1"> My Projects </div>

          <div className="flex flex-row gap-20 justify-center items-center flex-wrap max-w-[1600px] sm:gap-6 sm:max-w-[500px] md:max-w-[550px] md:gap-10 lg:gap-10">
            <a href="https://github.com/IshpreetNagi/Tempestuous-Turrets" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56">
                    <img
                      src={"/images/tempestuous_turrets.png"}
                      alt="Tempestuous Turrets Gameplay Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden">
                    <div className="text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-1 md:-mt-3 md:mb-6">Tempestuous Turrets</div>
                    <div className="text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm">
                      A point and click local multiplayer game where you battle others across 
                      various battlefields to be the last turret standing!
                    </div>
                    <div className="hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block">
                      A point and click local multiplayer game.
                    </div>
                    <div className="flex flex-row gap-3 mt-7 sm:-mt-2 sm:gap-1 md:scale-90 md:origin-top-left md:mt-6">
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" 
                          alt="C# Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        C#
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                          alt="Unity Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Unity
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                          alt="Git Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Git
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                          alt="Azure Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Azure
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                          alt="Photoshop Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Photoshop
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <FaGithub className="w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi/Personal-Website-V2" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56">
                    <img
                      src={"/images/website_projectspage.png"}
                      alt="Projects Page Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl" 
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden">
                    <div className="text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-2 md:-mt-3 md:mb-6">This Website</div>
                    <div className="text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm">
                      You are still here and looking around, so it’s not too bad, right?
                      Feel free to reach out to me if you have any questions or suggestions!
                    </div>
                    <div className="hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block">
                      You are still here and looking around, so it’s not too bad, right?
                    </div>
                    <div className="flex flex-row gap-3 mt-7 sm:-mt-3 sm:gap-1 sm:scale-90 sm:origin-left md:scale-90 md:origin-top-left md:mt-6">
                      <div className="relative group inline-block">
                        <img
                          src={"/images/astro-icon-light-gradient.svg"}
                          alt="Astro Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Astro
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                          alt="Tailwind CSS Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Tailwind CSS
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                          alt="Git Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Git
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                          alt="TypeScript Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        TypeScript
                        </div>
                      </div>
                      {/* <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                          alt="JavaScript Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        JavaScript
                        </div>
                      </div> */}
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
                          alt="Vercel Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Vercel
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <FaGithub className="w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi/McMaster-Room-Booking-Portal" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56">
                    <img
                      src={"/images/room_booking_portal.png"}
                      alt="Room Booking Portal Homepage Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden">
                    <div className="text-xl font-semibold mt-4 mb-8 sm:hidden md:-mt-3 md:mb-3">McMaster Room Booking</div>
                    <div className="hidden text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-2 sm:block">Room Booking</div>
                    <div className="text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm">
                      A website to centralize and streamline the room booking process for the buildings 
                      across the McMaster University campus. 
                    </div>
                    <div className="hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block">
                      A room booking website for McMaster University.
                    </div>
                    <div className="flex flex-row gap-3 mt-7 sm:-mt-2 sm:gap-1 sm:scale-75 sm:origin-left md:scale-90 md:origin-top-left md:mt-3">
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                          alt="Tailwind CSS Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Tailwind CSS
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                          alt="TypeScript Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        TypeScript
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                          alt="JavaScript Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        JavaScript
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                          alt="Git Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Git
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <FaGithub className="w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi/Arcade-Game-Emulator" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover sm:w-68 sm:h-40 sm:rounded-2xl sm:px-4 md:w-136 md:h-72 md:rounded-2xl">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5 sm:w-28 sm:h-28 sm:px-0 md:px-0 md:w-56 md:h-56">
                    <img
                      src={"/images/python_arcade.JPG"}
                      alt="Arcade Games Emulator Homepage Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:w-28 sm:h-28 sm:rounded-xl md:w-56 md:h-56 md:rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7 sm:py-0 sm:pl-4 sm:overflow-hidden">
                    <div className="text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-1 sm:hidden md:-mt-3 md:mb-3">Arcade Games Emulator</div>
                    <div className="hidden text-xl font-semibold mt-4 mb-8 sm:text-sm sm:mt-0 sm:mb-1 sm:block">Games Emulator</div>
                    <div className="text-base text-white/70 pr-8 flex-grow sm:hidden md:text-sm">
                      Three iconic games —Who Wants to Be a Millionaire, Whack-a-Mole, and Number Guesser 
                      —are brought together in a single package. 
                    </div>
                    <div className="hidden text-base text-white/70 pr-8 flex-grow sm:text-xs sm:pr-0 sm:scale-75 sm:origin-top-left sm:block">
                      Three games brought together in a package.
                    </div>
                    <div className="flex flex-row gap-3 mt-7 sm:-mt-2 sm:gap-1 sm:scale-60 sm:origin-left md:scale-90 md:origin-top-left md:mt-3">
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                          alt="Python Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Python
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <FaGithub className="w-8 h-8 text-white/20 sm:mb-1 sm:w-4 sm:h-4 md:w-6 md:h-6"/>
              </div>
            </a>
            <a href="https://github.com/IshpreetNagi?tab=repositories" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-52 h-20 rounded-2xl overflow-hidden box-select-hover sm:scale-60 sm:origin-top md:scale-80 md:origin-top">
                <section className="flex items-center justify-center w-full h-full drop-shadow-md text-white gap-2">
                  <div className="text-xl">See more</div>
                  <img 
                    src={"https://img.icons8.com/sf-regular-filled/48/FFFFFF/right-squared.png"}
                    alt="Right arrow"
                    className="w-8 h-8"
                  />
                </section>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}