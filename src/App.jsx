import React, { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutView from './components/WorkoutView';
import './styles.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="app">
      <h1>Fitness Workout Planner</h1>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutView workouts={workouts} />
    </div>
  );
}

export default App;
