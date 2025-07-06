import { motion } from 'framer-motion';

// Links for icons: https://devicon.dev

export default function HomePage() {
  return (
    <div className="flex flex-col justify-start z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.0 }}>
        <div className="flex flex-col justify-start z-10 overflow-hidden relative">          
          <div className="text-[45px] text-white mb-12 pl-4"> My Projects </div>

          <div className="flex flex-row gap-12 justify-center items-center flex-wrap">
            <a href="https://github.com/IshpreetNagi/Tempestuous-Turrets" target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/5 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden box-select-hover">
                <section className="flex items-center justify-start w-full h-full drop-shadow-md">
                  <div className="flex-shrink-0 w-72 h-64 items-center justify-center px-5">
                    <img
                      src={"/images/Last-Laugh.jpg"}
                      alt="Picture of Ishpreet"
                      className="rounded-3xl object-cover w-72 h-64 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col overflow-auto text-left pl-8 text-white self-start py-7">
                    <div className="text-xl font-semibold mb-6">Tempestuous Turrets</div>
                    <div className="text-base text-white/70 pr-8 flex-grow">
                      According to all known laws of aviation, there is no way a bee should be able to fly.
                      Its wings are too small to get its fat little body off the ground.
                      The bee, of course, flies anyway because bees don't care what humans think is impossible.
                    </div>
                    <div className="flex flex-row gap-3 mt-4">
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" 
                          alt="C# Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-xs rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        C#
                        </div>
                      </div>
                      <div className="relative group inline-block">
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg"
                          alt="Unity Icon"
                          className="w-8 h-8"
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                                      bg-gray-800 text-white text-xs rounded py-1 px-2
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
                                      bg-gray-800 text-white text-xs rounded py-1 px-2
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
                                      bg-gray-800 text-white text-xs rounded py-1 px-2
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
                                      bg-gray-800 text-white text-xs rounded py-1 px-2
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                        transition-opacity duration-300 whitespace-nowrap z-50">
                        Photoshop
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </a>

            <div className="flex bg-white/5 backdrop-blur-sm border border-white/5 px-6 py-6 w-176 h-88 rounded-3xl overflow-hidden">
              <section className="flex items-center justify-center w-full h-full drop-shadow-md">
                <div className="flex-shrink-0 px-7 items-center justify-center text-center">
                  <img
                    src={"/images/Last-Laugh.jpg"}
                    alt="Picture of Ishpreet"
                    className="rounded-3xl object-cover w-10 h-10 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-shrink-0 overflow-auto text-left max-w-4xl pl-8 text-white text-xl">
                  Project One
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}