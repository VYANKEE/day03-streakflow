// src/App.jsx
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Make sure file name in utils folder is 'dateHelpers.js'
import { getTodayDate, getYesterdayDate } from './utils/dateHelpers'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HabitForm from './components/HabitForm';
import HabitCard from './components/HabitCard';
import './App.css';

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('streakflow-habits');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('streakflow-habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    const today = getTodayDate();
    const yesterday = getYesterdayDate();

    const updatedHabits = habits.map(habit => {
      if (habit.lastCompleted && habit.lastCompleted !== today && habit.lastCompleted !== yesterday) {
        return { ...habit, streak: 0, completedToday: false };
      }
      if (habit.lastCompleted === yesterday) {
        return { ...habit, completedToday: false };
      }
      if (habit.lastCompleted === today) {
        return { ...habit, completedToday: true };
      }
      return habit;
    });
    
    if (JSON.stringify(updatedHabits) !== JSON.stringify(habits)) {
        setHabits(updatedHabits);
    }
  }, []); 

  const addHabit = (name) => {
    setHabits([...habits, {
      id: uuidv4(),
      name,
      streak: 0,
      lastCompleted: null,
      completedToday: false
    }]);
  };

  const toggleHabit = (id) => {
    const today = getTodayDate();
    
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        if (habit.completedToday) {
           return { 
             ...habit, 
             completedToday: false, 
             streak: habit.streak > 0 ? habit.streak - 1 : 0, 
             lastCompleted: null 
           };
        } 
        else {
          return {
            ...habit,
            completedToday: true,
            streak: habit.streak + 1,
            lastCompleted: today
          };
        }
      }
      return habit;
    }));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      
      {/* App Section */}
      <section id="app" style={{background: 'linear-gradient(to bottom, #131c2e, #0f172a)'}}>
        <div className="app-container">
          <h2 style={{marginBottom: '20px', textAlign: 'center'}}>Your Habit Dashboard</h2>
          <HabitForm addHabit={addHabit} />
          
          <div className="habit-list">
            {habits.length === 0 && <p style={{textAlign:'center', color:'#64748b'}}>No habits yet. Start one today!</p>}
            {habits.map(habit => (
              <HabitCard 
                key={habit.id} 
                habit={habit} 
                toggleHabit={toggleHabit} 
                deleteHabit={deleteHabit}
              />
            ))}
          </div>
        </div>
      </section>

      <footer style={{textAlign: 'center', padding: '2rem', color: '#64748b', fontSize:'0.9rem'}}>
        Built for the 45-Day Challenge • StreakFlow 2025
      </footer>
    </div>
  );
}

export default App;