import React from 'react';
import { FiActivity, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const Features = () => {
  const cards = [
    { icon: <FiActivity />, title: "Track Daily", desc: "Simple one-tap tracking for your goals." },
    { icon: <FiTrendingUp />, title: "Build Streaks", desc: "Don't break the chain. Watch your progress grow." },
    { icon: <FiCheckCircle />, title: "Stay Consistent", desc: "Visual feedback to keep you motivated." }
  ];

  return (
    <section style={{background: '#131c2e'}}>
      <h2 style={{fontSize: '2.5rem', marginBottom: '3rem'}}>How it Works</h2>
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {cards.map((card, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.05)', 
            padding: '2rem', 
            borderRadius: '16px', 
            width: '250px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '2rem', color: '#10b981', marginBottom: '1rem'}}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p style={{color: '#94a3b8'}}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;