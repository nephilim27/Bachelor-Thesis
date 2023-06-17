import React, { useState } from 'react';
import axios from 'axios';
import { useAuthentication } from '../providers/AuthProvider';

const FoodSearch = ({ section }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mealType, setMealType] = useState('');
  const { onBoardedUser } = useAuthentication();

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    try {
      if (query === '') {
        // Clear the search results when the query is empty
        setSearchResults([]);
      } else {
        const response = await axios.get(
          `http://localhost:8080/api/entries/foods?query=${query}`
        );
        const results = response.data;
        setSearchResults(results);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  

  const handleLogFoodEntry = async (selectedFood) => {
    const consumedGrams = parseInt(
      prompt('Enter the number of grams consumed:', '100')
    );

    if (!Number.isNaN(consumedGrams)) {
      const userId = onBoardedUser.id;
      const foodEntry = {
        name: selectedFood.name,
        calories: (selectedFood.calories * consumedGrams) / 100,
        mealType: section, // Assign the mealType value to the foodEntry
      };

      try {
        const response = await axios.post(
          `http://localhost:8080/api/entries/food?user=${userId}`,
          foodEntry
        );
        console.log('Food entry added:', response.data);
        alert('Food logged successfully!');
      } catch (error) {
        console.error('Error adding food entry:', error);
        alert('Failed to log food!');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for a food..."
      />

    <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {searchResults.map((food) => (
          <li key={food.id}>
            <span className="food-name">{food.name}</span>
            <button className="log-food-btn" onClick={() => handleLogFoodEntry(food)}>
              Log
            </button>
          </li>
        ))}
    </ul>
    </div>
  );
};

export default FoodSearch;