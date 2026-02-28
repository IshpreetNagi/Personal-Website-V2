import { motion } from "framer-motion";
import { useState } from "react";
import MusicPlayer from "./MusicPlayer";

export default function HomePage() {
  const [picExpanded, setPicExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-start z-10 md:max-w-[550px] lg:scale-80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0 }}
      >
        <div className="text-[52px] text-white mb-11 pl-1 sm:text-3xl sm:pl-0 sm:flex sm:justify-center sm:mb-8 md:text-4xl md:pl-1">
          A bit about me...
        </div>

        <div className="flex items-start bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-3xl mx-auto sm:w-68 sm:rounded-2xl sm:justify-center sm:p-4 sm:m-auto md:rounded-2xl md:justify-center md:p-5">
          <div className="flex flex-col items-start w-360 h-auto gap-9 mx-auto drop-shadow-md p-9 sm:flex-col sm:w-68 sm:h-auto sm:p-6 md:flex-col md:h-auto md:p-6">
            <div className="flex justify-center">
              <div className="flex items-center gap-12 h-148 sm:flex-col sm:h-auto sm:gap-4">
                <div
                  onMouseEnter={() => setPicExpanded(true)}
                  onMouseLeave={() => setPicExpanded(false)}
                  className="flex-shrink-0"
                >
                  <img
                    src={"/images/Last-Laugh.jpg"}
                    alt="Picture of Ishpreet"
                    className="rounded-3xl object-cover w-148 h-148 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:rounded-2xl sm:w-54 sm:h-54 md:w-112 md:h-112"
                  />
                </div>
                <motion.div
                  animate={{ x: picExpanded ? 13 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col text-white text-xl overflow-auto text-left sm:text-xs sm:w-68 sm:gap-0 sm:peer-hover:translate-x-0 md:w-128 md:text-base"
                >
                  <div className="flex-shrink-0">
                    Hey there, I’m{" "}
                    <span className="text-[rgb(6,182,212)] font-bold">
                      Ishpreet Nagi
                    </span>
                    , a software developer based in Canada.
                    <br />
                    <br />
                    Apart from being the best programmer in my family (I am the
                    only one), I am currently completing my fourth and final
                    year in computer science at McMaster University.
                    <br />
                    <br />
                    I am intrigued by all aspects of the software development
                    landscape, reveling in the frustration that accompanies the
                    methodical process of backend development, as well as the
                    countless hours lost in frontend development. Apart from
                    those two, I spend my time learning and developing my skills
                    within whichever topic has caught my fascination. My recent
                    interests include machine learning, game development, and
                    expanding upon my pre-existing frontend development
                    knowledge with more experience, like this website.
                    <br />
                    <br />
                    Beyond my technical prowess and interests, you can find me
                    enjoying a self-made latte with a nice movie during a quiet
                    night, getting lost in other worlds through a fun video
                    game, or simply jamming out to a track as I imagine myself
                    in the music video.
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              animate={{ y: picExpanded ? 13 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-4xl text-gray-400">Recent Activity</h2>
              <div className="flex flex-row gap-2">
                <MusicPlayer />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
