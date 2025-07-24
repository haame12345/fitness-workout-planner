import React, { useState } from 'react';

function WorkoutForm({ onAdd }) {
  const [day, setDay] = useState('');
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ day, exercise, reps, notes });
    setDay('');
    setExercise('');
    setReps('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={day} onChange={(e) => setDay(e.target.value)} required>
        <option value="">Select Day</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
