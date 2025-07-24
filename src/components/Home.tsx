import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <section className="relative z-10 py-80 px-4 md:px-10 lg:px-20 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
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
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Welcome to my personal website
        </p>
      </div>
    </section>
  );
}
