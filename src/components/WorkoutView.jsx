import React from 'react';

function WorkoutView({ workouts }) {
  return (
    <div className="workout-view">
      <h2>Weekly Workout Plan</h2>
      {workouts.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        <ul>
          {workouts.map((w, index) => (
            <li key={index}>
              <strong>{w.day}:</strong> {w.exercise} — {w.reps}
              {w.notes && <em> ({w.notes})</em>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutView;
