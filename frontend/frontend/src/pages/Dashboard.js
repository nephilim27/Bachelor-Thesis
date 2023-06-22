import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodSearch from './FoodSearch';
import { useAuthentication } from '../providers/AuthProvider';
import classNames from 'classnames';



const Dashboard = ( ) => {
  const currentDate = new Date();
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [burntCalories, setBurntCalories] = useState(0);
  const [calorieBudget, setCalorieBudget] = useState(0);

  const { onBoardedUser } = useAuthentication();

  const [breakfastEntries, setBreakfastEntries] = useState([]);
  const [lunchEntries, setLunchEntries] = useState([]);
  const [dinnerEntries, setDinnerEntries] = useState([]);
  const [snackEntries, setSnackEntries] = useState([]);
  const [foodEntries, setFoodEntries] = useState([]);
  const [workoutEntries, setWorkoutEntries] = useState([]);
  const [waterEntries, setWaterEntries] = useState([]);
  const [sleepEntries, setSleepEntries] = useState([]);

  // Calculate the overage amount
  const overage = consumedCalories - (parseInt(onBoardedUser.calorieBudget) + burntCalories);

  // Determine the remaining calories value based on the overage
  const remainingCalories = overage > 0 ? `${overage} over` : `${Math.abs(overage)} remaining`;

  // Determine the class for the circle container based on the overage
  const circleContainerClass = overage > 500 ? 'circle-container-red' : overage > 0 && overage < 500 ? 'circle-container-orange' : 'circle-container';

  function sendOverageToBackend() {
  
    fetch(`http://localhost:8080/api/overage?userId=${onBoardedUser.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ overage }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Overage sent to the backend');
        } else {
          console.error('Failed to send overage to the backend');
        }
      })
      .catch((error) => {
        console.error('Error sending overage to the backend:', error);
      });
  }
  
  // Calculate the time until 11:59 PM
  const now = new Date();
  const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 0);
  const timeUntilTarget = targetTime.getTime() - now.getTime();
  
  // Schedule the sending of the 'overage' value at 11:59 PM
  setTimeout(sendOverageToBackend, timeUntilTarget);
  


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

      const userId = onBoardedUser.id;
      let entry = {};

      switch (section) {
        case 'breakfast':
          entry = {
            name: breakfastName,
            calories: parseInt(breakfastCalories),
            mealType: 'breakfast',
          };
          const resB = await handleFoodAdding(userId, entry);
          if(resB) {
            setBreakfastEntries([...breakfastEntries, entry]);
          }
          break;
        case 'lunch':
          entry = {
            name: lunchName,
            calories: parseInt(lunchCalories),
            mealType: 'lunch',
          };
          const resL = await handleFoodAdding(userId, entry);
          if(resL) {
            setLunchEntries([...lunchEntries, entry]);
          }
          break;
        case 'dinner':
          entry = {
            name: dinnerName,
            calories: parseInt(dinnerCalories),
            mealType: 'dinner',
          };
          const resD = await handleFoodAdding(userId, entry);
          if(resD) {
            setDinnerEntries([...dinnerEntries, entry]);
          }
          break;
        case 'snack':
          entry = {
            name: snackName,
            calories: parseInt(snackCalories),
            mealType: 'snack',
          };
          const resS = await handleFoodAdding(userId, entry);
          if(resS) {
            setSnackEntries([...snackEntries, entry]);
          }
          break;
        default:
          return;
      }
      setConsumedCalories(consumedCalories + entry.calories);
  };

  //Get BreakfastEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=breakfast`)
    .then((response) => response.json())
    .then((data) => {
      setBreakfastEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get LunchEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=lunch`)
    .then((response) => response.json())
    .then((data) => {
      setLunchEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get DinnerEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=dinner`)
    .then((response) => response.json())
    .then((data) => {
      setDinnerEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get SnackEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=snack`)
    .then((response) => response.json())
    .then((data) => {
      setSnackEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get all FoodEntries on current day
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsOnGivenDay?userId=${onBoardedUser.id}`)
    .then((response) => response.json())
    .then((data) => {
      setFoodEntries(data);
      
      // Calculate total calories
      const totalCalories = data.reduce((total, entry) => total + entry.calories, 0);
      setConsumedCalories(totalCalories);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]);


  const handleFoodAdding = async (userId, entry) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/entries/food?user=${userId}`, entry
      );
      return true;
    }
    catch(error){
      return false;
    }
  }

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

  const handleSubmitWorkout = async (e) => {
    e.preventDefault();
  
    try {
      const userId = onBoardedUser.id;
      let entry = {};
  
      entry = {
        caloriesBurnt: caloriesBurntWorkout, 
        category: workoutName, 
        duration: workoutDuration
      };
  
      const response = await axios.post(
        `http://localhost:8080/api/entries/workout?user=${userId}`, entry
      );

      setWaterEntries([...workoutEntries, entry]);
  
      console.log('Workout entry added:', response.data);
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
    const userId = onBoardedUser.id; 
    const entry = {
      duration: parseInt(sleepDuration)
    };
    setSleepDuration(0);

    const response = await axios.post(
      `http://localhost:8080/api/entries/sleep?user=${userId}`,
      entry
    );

    setSleepEntries([...sleepEntries, entry]);

    console.log('Sleep entry added:', response.data);
    // Perform any necessary state updates or calculations
  } catch (error) {
    console.error('Error adding sleep entry:', error);
    alert('Error adding sleep entry');
  }
};

// Function to add a new entry to breakfastEntries
const addBreakfastEntry = async (entry) => {
  const resB = await handleFoodAdding(onBoardedUser.id, entry);
    if(resB) {
      setBreakfastEntries([...breakfastEntries, entry]);
    }
  console.log("foodEntries updated", entry.id);
};

//Get BreakfastEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=breakfast`)
    .then((response) => response.json())
    .then((data) => {
      setBreakfastEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get LunchEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=lunch`)
    .then((response) => response.json())
    .then((data) => {
      setLunchEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get DinnerEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=dinner`)
    .then((response) => response.json())
    .then((data) => {
      setDinnerEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get SnackEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsByType?userId=${onBoardedUser.id}&type=snack`)
    .then((response) => response.json())
    .then((data) => {
      setSnackEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]); 

//Get all FoodEntries on current day
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/foodsOnGivenDay?userId=${onBoardedUser.id}`)
    .then((response) => response.json())
    .then((data) => {
      setFoodEntries(data);
      
      // Calculate total calories
      const totalCalories = data.reduce((total, entry) => total + entry.calories, 0);
      setConsumedCalories(totalCalories);
    })
    .catch((error) => {
      console.error('Error fetching food entries:', error);
    });
}, [onBoardedUser.id]);



const [totalWaterAmount, setTotalWaterAmount] = useState(0);

useEffect(() => {
  const fetchWaterEntries = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/entries/waterOnGivenDay?userId=${onBoardedUser.id}`);
      setWaterEntries(response.data);
    } catch (error) {
      console.error('Error fetching water entries:', error);
    }
  };

  fetchWaterEntries();
}, [onBoardedUser.id]);

useEffect(() => {
  // Calculate the total sum of water amounts
  let totalAmount = 0;
  waterEntries.forEach((entry) => {
    totalAmount += entry.amount;
  });
  setTotalWaterAmount(totalAmount);
}, [waterEntries]);


//Get WorkoutEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/workoutOnGivenDay?userId=${onBoardedUser.id}`)
    .then((response) => response.json())
    .then((data) => {
      setWorkoutEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching workout entries:', error);
    });
}, [onBoardedUser.id]); 


const [totalBurntCaloriesAmount, setTotalBurntCaloriesAmount] = useState(0);

useEffect(() => {
  // Calculate the total sum of burnt calories amounts
  let totalCaloriesAmount = 0;
  workoutEntries.forEach((entry) => {
    totalCaloriesAmount += entry.caloriesBurnt;
  });
  setTotalBurntCaloriesAmount(totalCaloriesAmount);
  setBurntCalories(totalBurntCaloriesAmount);
}, [workoutEntries]);

//Get SleepEntries
useEffect(() => {
  fetch(`http://localhost:8080/api/entries/sleepOnGivenDay?userId=${onBoardedUser.id}`)
    .then((response) => response.json())
    .then((data) => {
      setSleepEntries(data);
    })
    .catch((error) => {
      console.error('Error fetching sleep entries:', error);
    });
}, [onBoardedUser.id]); 


const handleDeleteEntry = (entryId) => {
  // Send a DELETE request to the API endpoint
  fetch(`http://localhost:8080/api/entries/food/${entryId}`, {
    method: 'DELETE'
  })
  .then((response) => {
    if (response.ok) {
      // If the deletion is successful, remove the entry from the screen
      const resultSet = breakfastEntries.filter(entry => entry.id !== entryId);
      setBreakfastEntries(resultSet);
      // setFoodEntries((prevEntries) => prevEntries.filter(entry => entry.id !== entryId));
    } else {
      console.error('Error deleting food entry');
    }
  })
  .catch((error) => {
    console.error('Error deleting food entry:', error);
  });
};

const [selectedAmount, setSelectedAmount] = useState(null);
const [showForm, setShowForm] = useState(false);

const handleLogWaterEntry = async (amount) => {
  try {
    const userId = onBoardedUser.id;
    const entry = {
      amount: amount,
    };

    const response = await axios.post(
      `http://localhost:8080/api/entries/water?user=${userId}`,
      entry
    );
    
    setWaterEntries([...waterEntries, entry]);

    console.log('Water entry added:', response.data);
  } catch (error) {
    console.error('Error adding water entry:', error);
    alert('Error adding water entry');
  }
  console.log(`Logged water entry: ${amount}ml`);

  // Reset the selected amount
  setSelectedAmount(null);
};


const handleToggleFormWater = () => {
  setShowForm(!showForm);
  setSelectedAmount(null);
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
          <p>Calorie Budget: {parseInt(onBoardedUser.calorieBudget) + burntCalories}</p>
          </div>
          <div className="overview-item">
            <p>Consumed calories: {consumedCalories}</p>
          </div>
          <div className="overview-item">
            <p>Burnt calories: {burntCalories}</p>
          </div>
        </div>
        <div className={`circle-container ${circleContainerClass}`}>
          <span className="remaining-calories">{remainingCalories}</span>
        </div>

      </div>
    </div>

    <div className='FoodLog-container'>
    <div className="section-row">
      <div className="section-container">
        <div className='controlHeader'>
          <h3>Breakfast</h3>
          <button className='plusB' onClick={() => handleToggleForm('breakfast')}>+</button>
        </div>
        {!showBreakfastForm ? (
          <div className='foodEntries'>
            {breakfastEntries.map((entry) => (
              <div key={entry.id} className='foodEntry'>
                <p className='entryName'> {entry.name}</p>
                <p className='entryCalories'><b>{entry.calories}</b> calories</p>
                <button className='delEntry' onClick={() => handleDeleteEntry(entry.id)}>Del</button>
              </div>
            ))}
          
  </div>
        ) : (
          <div className='breakfastForms'>
            <h2> Log food:</h2>
            <FoodSearch section="breakfast" addEntry={addBreakfastEntry} />

          <br />
          <h2> Log Custom food:</h2>
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
          </div>
        )}
      </div>

      <div className="section-container">
        <div className='controlHeader'>
        <h3>Lunch</h3>
        <button className='plusL' onClick={() => handleToggleForm('lunch')}>+</button>
        </div>
        {!showLunchForm ? (
          <div className='foodEntries'>
            {lunchEntries.map((entry) => (
              <div key={entry.id} className='foodEntry'>
                <p className='entryName'> {entry.name}</p>
                <p className='entryCalories'><b>{entry.calories}</b> calories</p>
                <button className='delEntry' onClick={() => handleDeleteEntry(entry.id)}>Del</button>
              </div>
            ))}
          </div>
        ) :
         (
          <div className='lunchForms'>
            <h2> Log food:</h2>
          <FoodSearch section={'lunch'}/>

          <br />
          <h2> Log Custom food:</h2>
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
          </div>
        )}
      </div>
    </div>
    

    <div className="section-row">
      <div className="section-container">
      <div className='controlHeader'>
        <h3>Dinner</h3>
        <button className='plusD' onClick={() => handleToggleForm('dinner')}>+</button>
      </div>
        {!showDinnerForm ? (
            <div className='foodEntries'>
              {dinnerEntries.map((entry) => (
                <div key={entry.id} className='foodEntry'>
                  <p className='entryName'> {entry.name}</p>
                  <p className='entryCalories'><b>{entry.calories}</b> calories</p>
                  <button className='delEntry' onClick={() => handleDeleteEntry(entry.id)}>Del</button>
                </div>
              ))}
            </div>
        ) : (
          <div className='dinnerForms'>
            <h2> Log food:</h2>
            <FoodSearch section={'dinner'}/>
            <br />
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
          </div>
        )}
      </div>

      <div className="section-container">
      <div className='controlHeader'>
        <h3>Snack</h3>
        <button onClick={() => handleToggleForm('snack')}>+</button>
      </div>
        {!showSnackForm ? (
          <div className='foodEntries'>
            {snackEntries.map((entry) => (
              <div key={entry.id} className='foodEntry'>
                <p className='entryName'> {entry.name}</p>
                <p className='entryCalories'><b>{entry.calories}</b> calories</p>
                <button className='delEntry' onClick={() => handleDeleteEntry(entry.id)}>Del</button>
              </div>
            ))}
          </div>
        ) : (
          <div className='snackForms'>
            <h2> Log food:</h2>
            <FoodSearch section={'snack'}/>
            <br />
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
          </div>
        )}
      </div>
    </div>
  </div>
  <div className="WorkoutSection-container">
    <div className='controlHeader'>
      <h3>Workout</h3>
      <button className='plusWorkout' onClick={() => handleToggleFormWorkout('workout')}>+</button>
    </div>
      {!showWorkoutForm ? (
        <div className='foodEntries'>
            {workoutEntries.map((entry) => (
              <div key={entry.id} className='foodEntry'>
                <p className='entryName'> {entry.category}</p>
                <p className='entryCalories'>{entry.duration} minutes</p>
                <p className='entryCalories'>{entry.caloriesBurnt} calories</p>
                <button className='delEntry' onClick={() => handleDeleteEntry(entry.id)}>Del</button>
              </div>
            ))}
          </div>
        ) : (
          <form
            onSubmit={(e) => handleSubmitWorkout(e)}
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
  <div className='controlHeader'>
    <h3>Sleep</h3>
    <button className='plusSleep' onClick={() => handleToggleFormSleep('sleep')}>+</button>
  </div>
        {!showSleepForm ? ( 
          <div className='foodEntries'>
            {sleepEntries.map((entry) => (
              <div key={entry.id} className='foodEntry'>
                <p className='entryCalories'>{entry.duration} hours</p>
                <button className='delEntry' onClick={() => handleDeleteEntry(entry.id)}>Del</button>
              </div>
            ))}
          </div>
          ) : (
            <form
              onSubmit={(e) => handleSubmitSleep(e, 'sleep')}
              className="sleep-entry-form"
            >
              <div className="form-group">
                <label htmlFor="sleep-duration">Duration (hours):</label>
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
  <div className="WaterSection-container">
  <h3>Water</h3>
  {!showForm ? (
    <div className="water-header">
      <button className="plusWater" onClick={handleToggleFormWater}> + </button>
        <p className="total-water-amount">Total water amount: {totalWaterAmount}ml</p>
        <p className="recommended-water-amount">You shold drink {onBoardedUser.waterIntake} ml/day</p>
    </div>
  ) : (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="water-buttons">
        <button className="water-amount" onClick={() => handleLogWaterEntry(250)}>
          250ml
        </button>
        <button className="water-amount" onClick={() => handleLogWaterEntry(500)}>
          500ml
        </button>
        <button className="water-amount" onClick={() => handleLogWaterEntry(750)}>
          750ml
        </button>
      </div>
      <button className="cancel" onClick={handleToggleFormWater}>
        Cancel
      </button>
    </form>
  )}
</div>



</div>
);

};

export default Dashboard;
export const handleSubmit = () => { };

export const breakfastEntries = [];
export const setBreakfastEntries = (entries) => {
  breakfastEntries = [...breakfastEntries, ...entries];
};


