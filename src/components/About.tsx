import { motion } from 'framer-motion';

export default function HomePage() {
  return (

    // <div className="flex flex-col justify-start z-10">
    //   <div className="text-5xl text-white mb-14 pl-5">About me</div>
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2}} transition={{ duration: 1.0 }}>
      <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/5 px-6 py-6 w-360 h-176 rounded-3xl mx-auto overflow-hidden">
        <section className=" flex items-center justify-center px-6 py-6 w-360 h-176 mx-auto drop-shadow-md">
          <div className="flex-shrink-0 w-144 h-144 px-7 py-0 items-center justify-center text-center">
            <img
                    src={"/images/Last-Laugh.jpg"}
                    alt="Picture of Ishpreet"
                    width={128}
                    height={128}
                    className="rounded-3xl object-cover w-144 h-144 mx-auto shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out"
                />
          </div>
          <div className="flex-shrink-0 w-192 h-144 overflow-auto text-left max-w-4xl mx-auto pl-8 pt-10 text-white text-xl">
            According to all known laws of aviation, there is no way a bee should be able to fly.
            Its wings are too small to get its fat little body off the ground.
            The bee, of course, flies anyway because bees don't care what humans think is impossible.
            Yellow, black. Yellow, black. Yellow, black. Yellow, black.
            Ooh, black and yellow!
            Let's shake it up a little.
            Barry! Breakfast is ready!
            Coming!
            Hang on a second.
            Hello?
            Barry?
            Adam?
            Can you believe this is happening?
            I can't.
            I'll pick you up.
            Looking sharp.
            Use the stairs, Your father paid good money for those.
            Sorry. I'm excited.
            Here's the graduate.
            We're very proud of you, son.
            A perfect report card, all B's.
            Very proud.
          </div>
        </section>
      </div>
    </motion.div>
    // </div>
  );
}