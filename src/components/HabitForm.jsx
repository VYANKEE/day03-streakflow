import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const HabitForm = ({ addHabit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addHabit(text);
    setText('');
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a new habit (e.g., Read 10 pages)" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="cta-btn" style={{marginTop: 0, padding: '0 25px'}}>
        <FiPlus />
      </button>
    </form>
  );
};
export default HabitForm;