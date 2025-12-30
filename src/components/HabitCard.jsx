import { FiCheck, FiTrash2, FiZap } from 'react-icons/fi';

const HabitCard = ({ habit, toggleHabit, deleteHabit }) => {
  return (
    <div className="habit-card">
      <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
        {/* Check Button */}
        <button 
          className={`check-btn ${habit.completedToday ? 'completed' : ''}`}
          onClick={() => toggleHabit(habit.id)}
        >
          <FiCheck />
        </button>
        
        <div>
          <h3 style={{textDecoration: habit.completedToday ? 'line-through' : 'none', color: habit.completedToday ? '#94a3b8' : 'white'}}>
            {habit.name}
          </h3>
          <div className="streak-badge">
            <FiZap /> {habit.streak} Day Streak
          </div>
        </div>
      </div>

      <button onClick={() => deleteHabit(habit.id)} style={{background:'none', border:'none', color:'#ef4444', cursor:'pointer'}}>
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};
export default HabitCard;