import { useState } from 'react';
import '../StyleSheets/mystyle.css';

const CalculateScore = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [total, setTotal] = useState('');
  const [goal, setGoal] = useState('');
  const [average, setAverage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (total && goal) {
      const avg = (parseFloat(total) / parseFloat(goal)).toFixed(2);
      setAverage(avg);
    }
  };

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Total Marks"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Goal Marks"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Calculate Average</button>
      </form>

      {average && (
        <div className="result">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>School:</strong> {school}</p>
          <p><strong>Average Score:</strong> {average}</p>
        </div>
      )}
    </div>
  );
};

export default CalculateScore;
