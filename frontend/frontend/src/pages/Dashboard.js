import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const currentDate = new Date();
  const [calorieBudget, setCalorieBudget] = useState(0);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [burntCalories, setBurntCalories] = useState(0);

  // Calculate the remaining calories
  const remainingCalories = calorieBudget - consumedCalories;

  // Calculate the percentage of consumed calories
  const consumedPercentage = (consumedCalories / calorieBudget) * 100;

  // Determine the appropriate class for the circle container
  const circleContainerClass = consumedPercentage >= 100 ? 'circle-container full' : 'circle-container partial';
  


  const [breakfastName, setBreakfastName] = useState('');
  const [breakfastCalories, setBreakfastCalories] = useState('');
  const [showBreakfastForm, setShowBreakfastForm] = useState(false);

  const [lunchName, setLunchName] = useState('');
  const [lunchCalories, setLunchCalories] = useState('');
  const [showLunchForm, setShowLunchForm] = useState(false);

  const [dinnerName, setDinnerName] = useState('');
  const [dinnerCalories, setDinnerCalories] = useState('');
  const [showDinnerForm, setShowDinnerForm] = useState(false);

  const [snackName, setSnackName] = useState('');
  const [snackCalories, setSnackCalories] = useState('');
  const [showSnackForm, setShowSnackForm] = useState(false);

  const handleBreakfastNameChange = (e) => {
    setBreakfastName(e.target.value);
  };

  const handleBreakfastCaloriesChange = (e) => {
    setBreakfastCalories(e.target.value);
  };

  const handleLunchNameChange = (e) => {
    setLunchName(e.target.value);
  };

  const handleLunchCaloriesChange = (e) => {
    setLunchCalories(e.target.value);
  };

  const handleDinnerNameChange = (e) => {
    setDinnerName(e.target.value);
  };

  const handleDinnerCaloriesChange = (e) => {
    setDinnerCalories(e.target.value);
  };

  const handleSnackNameChange = (e) => {
    setSnackName(e.target.value);
  };

  const handleSnackCaloriesChange = (e) => {
    setSnackCalories(e.target.value);
  };

  const handleSubmit = async (e, section) => {
    e.preventDefault();

    try {
      const userId = 1; // Replace with the actual user ID
      let entry = {};

      switch (section) {
        case 'breakfast':
          entry = {
            name: breakfastName,
            calories: parseInt(breakfastCalories),
            consumedAt: new Date().toISOString(),
          };
          setBreakfastName('');
          setBreakfastCalories('');
          setShowBreakfastForm(false);
          break;
        case 'lunch':
          entry = {
            name: lunchName,
            calories: parseInt(lunchCalories),
            consumedAt: new Date().toISOString(),
          };
          setLunchName('');
          setLunchCalories('');
          setShowLunchForm(false);
          break;
        case 'dinner':
          entry = {
            name: dinnerName,
            calories: parseInt(dinnerCalories),
            consumedAt: new Date().toISOString(),
          };
          setDinnerName('');
          setDinnerCalories('');
          setShowDinnerForm(false);
          break;
        case 'snack':
          entry = {
            name: snackName,
            calories: parseInt(snackCalories),
            consumedAt: new Date().toISOString(),
          };
          setSnackName('');
          setSnackCalories('');
          setShowSnackForm(false);
          break;
        default:
          return;
      }

      const response = await axios.post(
        `http://localhost:8080/api/entries/food?user=${userId}`,
        entry
      );

      console.log('Food entry added:', response.data);
      alert('Food entry added');
      setConsumedCalories(consumedCalories + entry.calories);
    } catch (error) {
      console.error('Error adding food entry:', error);
      alert('Error adding food entry');
    }
  };

  const handleToggleForm = (section) => {
    switch (section) {
      case 'breakfast':
        setShowBreakfastForm(!showBreakfastForm);
        break;
      case 'lunch':
        setShowLunchForm(!showLunchForm);
        break;
      case 'dinner':
        setShowDinnerForm(!showDinnerForm);
        break;
      case 'snack':
        setShowSnackForm(!showSnackForm);
        break;
      default:
        return;
    }
  };

  const handleSubmitWorkout = async (e, section) => {
    e.preventDefault();
  
    try {
      const userId = 1; // Replace with the actual user ID
      let entry = {};
  
      switch (section) {
        case 'workout':
          entry = {
            name: workoutName,
            calories_burnt: caloriesBurntWorkout, 
            completed_at: currentDate,
            duration: parseFloat(workoutDuration),
            category: workoutName, 
          };
          setWorkoutName('');
          setWorkoutDuration('');
          setCaloriesBurntWorkout('');
          setShowWorkoutForm(false);
          setBurntCalories(burntCalories + caloriesBurntWorkout);
          break;
        default:
          return;
      }
  
      const response = await axios.post(
        `http://localhost:8080/api/entries/workout?user=${userId}`,
        entry
      );
  
      console.log('Workout entry added:', response.data);
      alert('Workout entry added');
      // Perform any necessary state updates or calculations
    } catch (error) {
      console.error('Error adding workout entry:', error);
      alert('Error adding workout entry');
    }
  };

  // Define and initialize the missing variables and functions
const [showWorkoutForm, setShowWorkoutForm] = useState(false);
const [workoutName, setWorkoutName] = useState('');
const [workoutDuration, setWorkoutDuration] = useState(0);
const [caloriesBurntWorkout, setCaloriesBurntWorkout] = useState(0);

const handleWorkoutNameChange = (e) => {
  setWorkoutName(e.target.value);
};

const handleWorkoutDurationChange = (e) => {
  setWorkoutDuration(parseInt(e.target.value));
};

const handleCaloriesBurntChange = (e) => {
  setCaloriesBurntWorkout(parseInt(e.target.value));
};

const handleToggleFormWorkout = (formType) => {
  if (formType === 'workout') {
    setShowWorkoutForm(!showWorkoutForm);
  }
};


const [sleepDuration, setSleepDuration] = useState(0);
const [showSleepForm, setShowSleepForm] = useState(false);


const handleSleepDurationChange = (e) => {
  setSleepDuration(parseInt(e.target.value));
};


const handleToggleFormSleep = () => {
  setShowSleepForm(!showSleepForm);
};


const handleSubmitSleep = async (e) => {
  e.preventDefault();

  try {
    const userId = 1; // Replace with the actual user ID
    const entry = {
      completed_at: currentDate,
      duration: parseFloat(sleepDuration)
    };
    setSleepDuration(0);

    const response = await axios.post(
      `http://localhost:8080/api/entries/sleep?user=${userId}`,
      entry
    );

    console.log('Sleep entry added:', response.data);
    alert('Sleep entry added');
    // Perform any necessary state updates or calculations
  } catch (error) {
    console.error('Error adding sleep entry:', error);
    alert('Error adding sleep entry');
  }
};


return (
  <div className="dashboard-container">
    <div className="overview">
          <div className="overview-text">
            <p>Today's overview  <span id='date'>{currentDate.toDateString()}</span> </p>
          </div>
      <div className='overview-details'>
        <div className='overview-data'>
          <div className="overview-item">
            <p>Calorie Budget: {calorieBudget}</p>
          </div>
          <div className="overview-item">
            <p>Consumed calories: {consumedCalories}</p>
          </div>
          <div className="overview-item">
            <p>Burnt calories: {burntCalories}</p>
          </div>
        </div>
        <div className={circleContainerClass}>
          <span className="remaining-calories">{remainingCalories} <br/> Remaining</span>
        </div>
      </div>
    </div>

    <div className='FoodLog-container'>
    <div className="section-row">
      <div className="section-container">
        <h3>Breakfast</h3>
        {!showBreakfastForm ? (
          <button onClick={() => handleToggleForm('breakfast')}>+</button>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e, 'breakfast')}
            className="food-entry-form"
          >
            <div className="form-group">
              <label htmlFor="breakfast-name">Food Name:</label>
              <input
                type="text"
                id="breakfast-name"
                value={breakfastName}
                onChange={handleBreakfastNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="breakfast-calories">Calories:</label>
              <input
                type="number"
                id="breakfast-calories"
                value={breakfastCalories}
                onChange={handleBreakfastCaloriesChange}
              />
            </div>
            <button type="submit">Log Food</button>
            <button onClick={() => handleToggleForm('breakfast')}>
              Cancel
            </button>
          </form>
        )}
      </div>

      <div className="section-container">
        <h3>Lunch</h3>
        {!showLunchForm ? (
          <button onClick={() => handleToggleForm('lunch')}>+</button>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e, 'lunch')}
            className="food-entry-form"
          >
            <div className="form-group">
              <label htmlFor="lunch-name">Food Name:</label>
              <input
                type="text"
                id="lunch-name"
                value={lunchName}
                onChange={handleLunchNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lunch-calories">Calories:</label>
              <input
                type="number"
                id="lunch-calories"
                value={lunchCalories}
                onChange={handleLunchCaloriesChange}
              />
            </div>
            <button type="submit">Log Food</button>
            <button onClick={() => handleToggleForm('lunch')}>Cancel</button>
          </form>
        )}
      </div>
    </div>

    <div className="section-row">
      <div className="section-container">
        <h3>Dinner</h3>
        {!showDinnerForm ? (
          <button onClick={() => handleToggleForm('dinner')}>+</button>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e, 'dinner')}
            className="food-entry-form"
          >
            <div className="form-group">
              <label htmlFor="dinner-name">Food Name:</label>
              <input
                type="text"
                id="dinner-name"
                value={dinnerName}
                onChange={handleDinnerNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dinner-calories">Calories:</label>
              <input
                type="number"
                id="dinner-calories"
                value={dinnerCalories}
                onChange={handleDinnerCaloriesChange}
              />
            </div>
            <button type="submit">Log Food</button>
            <button onClick={() => handleToggleForm('dinner')}>Cancel</button>
          </form>
        )}
      </div>

      <div className="section-container">
        <h3>Snack</h3>
        {!showSnackForm ? (
          <button onClick={() => handleToggleForm('snack')}>+</button>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e, 'snack')}
            className="food-entry-form"
          >
            <div className="form-group">
              <label htmlFor="snack-name">Food Name:</label>
              <input
                type="text"
                id="snack-name"
                value={snackName}
                onChange={handleSnackNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="snack-calories">Calories:</label>
              <input
                type="number"
                id="snack-calories"
                value={snackCalories}
                onChange={handleSnackCaloriesChange}
              />
            </div>
            <button type="submit">Log Food</button>
            <button onClick={() => handleToggleForm('snack')}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  </div>
  <div className="WorkoutSection-container">
      <h3>Workout</h3>
      {!showWorkoutForm ? (
        <button className='plusWorkout' onClick={() => handleToggleFormWorkout('workout')}>+</button>
        ) : (
          <form
            onSubmit={(e) => handleSubmitWorkout(e, 'workout')}
            className="workout-entry-form"
          >
            <div className="form-group">
              <label htmlFor="workout-name">Workout Name:</label>
              <input
                type="text"
                id="workout-name"
                value={workoutName}
                onChange={handleWorkoutNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workout-duration">Duration (in minutes):</label>
              <input
                type="number"
                id="workout-duration"
                value={workoutDuration}
                onChange={handleWorkoutDurationChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="calories-burnt">Calories burnt:</label>
              <input
                type="number"
                id="calories-burnt"
                value={caloriesBurntWorkout}
                onChange={handleCaloriesBurntChange}
              />
            </div>
            <div className='buttonsWorkout'>
              <button className='submitWorkout' type="submit">Log Workout</button>
              <button className='cancleWorkout' onClick={() => handleToggleFormWorkout('workout')}>Cancel</button>
            </div>
            
          </form>
      )}
  </div>

  <div className='SleepSection-container'>
  <h3>Sleep</h3>
      {!showSleepForm ? (
        <button className='plusSleep' onClick={() => handleToggleFormSleep('sleep')}>+</button>
        ) : (
          <form
            onSubmit={(e) => handleSubmitSleep(e, 'sleep')}
            className="sleep-entry-form"
          >
            <div className="form-group">
              <label htmlFor="sleep-duration">Duration (in minutes):</label>
              <input
                type="number"
                id="sleep-duration"
                value={sleepDuration}
                onChange={handleSleepDurationChange}
              />
            </div>
            <div className='buttonsWorkout'>
              <button className='submitWorkout' type="submit">Log Sleep</button>
              <button className='cancleWorkout' onClick={() => handleToggleFormSleep('sleep')}>Cancel</button>
            </div>
            
          </form>
      )}
  </div>
</div>
);

};

export default Dashboard;