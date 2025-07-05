import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-start z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.0 }}>
        <div className="flex flex-col justify-start z-10 overflow-hidden relative">
          <div className="text-[45px] text-white mb-12 pl-4"> My Projects </div>
          <div className="flex flex-row gap-12 justify-center items-center flex-wrap">
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