// import React, { useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [name, setName] = useState('');
//   const [calories, setCalories] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleCaloriesChange = (e) => {
//     setCalories(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const userId = 1; // Replace with the actual user ID
//       const entry = {
//         name: name,
//         calories: parseInt(calories),
//         consumedAt: new Date().toISOString(),
//       };
  
//       const response = await axios.post(`http://localhost:8080/api/entries/food?user=${userId}`, entry);
  
//       // Reset form inputs after successful submission
//       setName('');
//       setCalories('');
  
//       console.log('Food entry added:', response.data);
//       alert("Food entry added")
//     } catch (error) {
//       console.error('Error adding food entry:', error);
//       alert("Error adding food entry")
//     }
//   };
  

//   return (
//     <div>
//       {/* Food Entry Form */}
//       <h3>Log Food Entry:</h3>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Food Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Calories:
//           <input type="number" value={calories} onChange={handleCaloriesChange} />
//         </label>
//         <br />
//         <button type="submit">Log Food</button>
//       </form>

//       {/* ... rest of the component */}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = 1; 
      const entry = {
        name: name,
        calories: parseInt(calories),
        consumedAt: new Date().toISOString(),
      };

      const response = await axios.post(
        `http://localhost:8080/api/entries/food?user=${userId}`,
        entry
      );
      setName('');
      setCalories('');

      console.log('Food entry added:', response.data);
      alert('Food entry added');
    } catch (error) {
      console.error('Error adding food entry:', error);
      alert('Error adding food entry');
    }
  };

  return (
    <div className="dashboard-container">
      {/* Food Entry Form */}
      <h3>Log Food Entry:</h3>
      <form onSubmit={handleSubmit} className="food-entry-form">
        <div className="form-group">
          <label htmlFor="name">Food Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            value={calories}
            onChange={handleCaloriesChange}
          />
        </div>
        <button type="submit">Log Food</button>
      </form>
    </div>
  );
};

export default Dashboard;
