import { motion } from 'framer-motion';
import MusicPlayer from './MusicPlayer';


export default function HomePage() {
  return (
    <div className="flex flex-col justify-start z-10 md:max-w-[550px] lg:scale-80">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.0 }}>
        <div className="text-[52px] text-white mb-11 pl-1 sm:text-3xl sm:pl-0 sm:flex sm:justify-center sm:mb-8 md:text-4xl md:pl-1">
          A bit about me...
        </div>

        <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-3xl mx-auto sm:w-68 sm:rounded-2xl sm:justify-center sm:px-3 sm:py-8 sm:m-auto md:rounded-2xl md:justify-center md:py-5">
          <div className="flex items-center justify-center w-360 h-176 mx-auto drop-shadow-md sm:flex-col sm:w-68 sm:h-auto md:flex-col md:h-auto md:pt-6">
            <div className="flex-shrink-0 px-7 sm:px-0">
              <img
                src={"/images/Last-Laugh.jpg"}
                alt="Picture of Ishpreet"
                className="rounded-3xl object-cover w-148 h-148 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out sm:rounded-2xl sm:w-54 sm:h-54 md:w-112 md:h-112"
              />
            </div>
            <div className="flex flex-col text-white text-lg overflow-auto gap-6 text-left px-8 pt-5 sm:text-xs sm:w-68 sm:gap-0 sm:pt-7 md:w-128 md:pt-8 md:text-base">
              <div className="flex-shrink-0">
                Hey there, I’m <span className='text-[rgb(6,182,212)] font-bold'>Ishpreet Nagi</span>, a software developer based in Canada.<br /><br />

                Apart from being the best programmer in my family (I am the only one), 
                I am currently completing my fourth and final year in computer science at 
                McMaster University.<br /><br />

                I am intrigued by all aspects of the software development landscape, reveling 
                in the frustration that accompanies the methodical process of backend development, 
                as well as the countless hours lost in frontend development. 
                Apart from those two, I spend my time learning and developing my skills within whichever 
                topic has caught my fascination. My recent interests include machine learning, game 
                development, and expanding upon my pre-existing frontend development knowledge with more 
                experience, like this website.<br /><br />

                Beyond my technical prowess and interests, you can find me enjoying a self-made latte with a 
                nice movie during a quiet night, getting lost in other worlds through a fun video game, or 
                simply jamming out to a track as I imagine myself in the music video. 
              </div>
              <div className="sm:origin-left sm:-mt-5 md:scale-95 md:origin-top-left">
                <MusicPlayer />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}