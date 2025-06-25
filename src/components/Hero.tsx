// The centeral file where all the components and pages are combined
// This file is responsible for rendering the main hero section of the application

import React from 'react';
import Background from '../components/Background'; // Update this path based on your project structure
import HomePage from '../pages/Home'; // Update this path as well

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HomePage /> {/* Content component */}
    </section>
  );
}

