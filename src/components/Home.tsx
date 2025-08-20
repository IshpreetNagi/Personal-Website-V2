import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-24 min-h-screen text-white text-center sm:max-w-[260px] sm:gap-9 md:max-w-[500px] md:gap-9">
      <h1 className="text-7xl font-bold max-w-4xl mx-auto leading-tight min-h-[11.5rem] sm:text-5xl sm:min-h-[15rem] md:text-5xl md:min-h-[7rem]">
        <TypeAnimation  
          sequence={[
            250,
            "Hello, world! I'm Ishpreet👋",
            2500,
            "",
            500,
            "I code things",
            2500,
            "",
            250,
          ]}
          wrapper="span"
          speed={9}
          repeat={Infinity}
        />
      </h1>
      <p className="text-lg text-gray-300 sm:text-sm">
        Full-Stack Developer who enjoys explaining code to a rubber ducky at 1 am
      </p>
    </section>
  );
}
