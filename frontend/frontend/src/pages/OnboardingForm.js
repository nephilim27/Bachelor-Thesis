import React, { useState, useEffect  } from 'react';
import axios from 'axios';

export default function OnboardingForm({ onSubmit, user }) {
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

  useEffect(() => {
    if (user && user.accessToken) {
      // User exists, fetch the user data and populate the form fields
      fetchUserData(user.accessToken);
    }
  }, [user]);

  const fetchUserData = (accessToken) => {
    axios
      .get(`http://localhost:8080/onboarding`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const userData = response.data;
  
        // Populate the form fields with the retrieved user data
        setName(userData.name);
        setEmail(userData.email);
        // Set other form state variables
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data object
    const formData = {
      name,
      email,
      // other form state variables...
    };

    // Pass the form data to the onSubmit callback
    onSubmit(formData);
  };

  if (user && user.accessToken) {
    // If the user exists and has an access token, skip the form and display a message
    return <div>You are already registered.</div>;
  }

  // Render the form if the user doesn't have an access token


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
