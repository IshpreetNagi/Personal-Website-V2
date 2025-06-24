import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <section className="relative z-10 py-80 px-4 md:px-10 lg:px-20 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12">
          <TypeAnimation
            sequence={[
              "Hello, world! I'm Ishpreet",
              2500,
              'I code things.',
            ]}
            wrapper="span"
            speed={10}
          />
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Welcome to my personal website
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
