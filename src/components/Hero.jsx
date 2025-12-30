import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1 className="floating">Build Habits that <br/> <span style={{color: '#10b981'}}>Stick Forever.</span></h1>
      <p style={{color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center'}}>
        The simplest way to track your daily goals and build consistent streaks without the clutter.
      </p>
      <a href="#app">
        <button className="cta-btn">Start Tracking Now</button>
      </a>
    </section>
  );
};
export default Hero;