import React, { useState } from 'react';
import axios from 'axios';
import Home from './Home';

export default function OnboardingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [startWeight, setStartWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [weeklyGoal, setWeeklyGoal] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handle submit called'); // Add this line
  
    // Prepare the form data
    const formData = {
      name,
      email,
      height: parseFloat(height),
      currentWeight: parseFloat(currentWeight),
      startWeight: parseFloat(startWeight),
      goalWeight: parseFloat(goalWeight),
      goalDate,
      sex,
      age: parseInt(age),
      birthDate,
      activityLevel,
      weeklyGoal: parseInt(weeklyGoal),
    };
  
    axios.post('http://localhost:8080/onboarding', formData)
  .then((response) => {
    console.log('User registered successfully:', response.data);
    setSubmitted(true); // Set the submitted state to true upon successful submission
  })
  .catch((error) => {
    console.error('Error registering user:', error);
  });
  };
  
  // Render the Home component if form is successfully submitted
  if (submitted) {
    return <Home />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Height:
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
      </label>
      <label>
        Current Weight:
        <input type="number" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} required />
      </label>
      <label>
        Start Weight:
        <input type="number" value={startWeight} onChange={(e) => setStartWeight(e.target.value)} required />
      </label>
      <label>
        Goal Weight:
        <input type="number" value={goalWeight} onChange={(e) => setGoalWeight(e.target.value)} required />
      </label>
      <label>
        Goal Date:
        <input type="date" value={goalDate} onChange={(e) => setGoalDate(e.target.value)} required />
      </label>
      <label>
        Sex:
        <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} required />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      <label>
        Birth Date:
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
      </label>
      <label>
        Activity Level:
        <input type="text" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required />
      </label>
      <label>
        Weekly Goal:
        <input type="number" value={weeklyGoal} onChange={(e) => setWeeklyGoal(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

