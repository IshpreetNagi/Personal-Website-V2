import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

// Links for icons: https://devicon.dev

export default function Projects() {
  return (
    <div className="flex flex-col justify-start z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.0 }}>
        <div className="flex flex-col justify-start z-10 overflow-hidden relative">
                      <div className="text-[52px] text-white mb-11 pl-20 sm:pl-32"> My Projects </div>         

          <div className="flex flex-row gap-10 justify-center items-center flex-wrap max-w-[1600px] sm:max-w-[950px]">
            <a href="https://github.com/IshpreetNagi/Tempestuous-Turrets" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5">
                    <img
                      src={"/images/tempestuous_turrets.png"}
                      alt="Tempestuous Turrets Gameplay Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7">
                    <div className="text-xl font-semibold mt-4 mb-8">Tempestuous Turrets</div>
                    <div className="text-base text-white/70 pr-8 flex-grow">
                      A point and click local multiplayer game where you battle others across 
                      various battlefields to be the last turret standing!
                    </div>
                    <div className="flex flex-row gap-3 mt-10">
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
                <FaGithub className="w-8 h-8 text-white/20"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi/Personal-Website-V2" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5">
                    <img
                      src={"/images/website_projectspage.png"}
                      alt="Projects Page Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7">
                    <div className="text-xl font-semibold mt-4 mb-8">This Website</div>
                    <div className="text-base text-white/70 pr-8 flex-grow">
                      You are still here and looking around, so it’s not too bad, right?
                      Feel free to reach out to me if you have any questions or suggestions!
                    </div>
                    <div className="flex flex-row gap-3 mt-10">
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
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                          alt="React Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-sm rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        React
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <FaGithub className="w-8 h-8 text-white/20"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi/McMaster-Room-Booking-Portal" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5">
                    <img
                      src={"/images/room_booking_portal.png"}
                      alt="Room Booking Portal Homepage Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7">
                    <div className="text-xl font-semibold mt-4 mb-8">McMaster Room Booking</div>
                    <div className="text-base text-white/70 pr-8 flex-grow">
                      A website to centralize and streamline the room booking process for the buildings 
                      across the McMaster University campus. 
                    </div>
                    <div className="flex flex-row gap-3 mt-10">
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
                <FaGithub className="w-8 h-8 text-white/20"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi/Arcade-Game-Emulator" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5">
                    <img
                      src={"/images/python_arcade.JPG"}
                      alt="Arcade Games Emulator Homepage Picture"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7">
                    <div className="text-xl font-semibold mt-4 mb-8">Arcade Games Emulator</div>
                    <div className="text-base text-white/70 pr-8 flex-grow">
                      Three iconic games —Who Wants to Be a Millionaire, Whack-a-Mole, and Number Guesser 
                      —are brought together and neatly wrapped in a single package. 
                    </div>
                    <div className="flex flex-row gap-3 mt-4">
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
                <FaGithub className="w-8 h-8 text-white/20"/>
              </div>
            </a>

            <a href="https://github.com/IshpreetNagi?tab=repositories" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-6 w-52 h-20 rounded-2xl overflow-hidden box-select-hover">
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