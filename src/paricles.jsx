import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
      className='z-1'
      id="tsparticles"
      options={{
        particles: {
      number: {
        value: 100, // Number of particles
      },
      color: {
        value: '#ffffff', // Color of particles
      },
      size: {
        value: 3, // Size of particles
      },
      move: {
        direction: 'bottom', // Movement direction
        speed: 2, // Speed of movement
      },
    }
      }}
    />
    );
};

export default ParticleBackground;
