import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../providers/AuthProvider';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [calorieBudget, setCalorieBudget] = useState(0);
  const { profile, onBoardedUser, setOnBoardedUserState } = useAuthentication();

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    fetch(`http://localhost:8080/onboarding/${onBoardedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(onBoardedUser),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        setEditMode(false);
        alert('Changes saved successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert('Error saving changes!');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOnBoardedUserState((prevUser) => ({ ...prevUser, [name]: value }));
  };
  

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="user-info">
        {editMode ? (
          <div className="input-fields">
            <input
              type="text"
              name="name"
              value={onBoardedUser.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              value={onBoardedUser.email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="height"
              value={onBoardedUser.height}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="startWight"
              value={onBoardedUser.startWeight}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="goalWeight"
              value={onBoardedUser.goalWeight}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="goalDate"
              value={onBoardedUser.goalDate}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="activityLevel"
              value={onBoardedUser.activityLevel}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <>
            <img src={profile.picture} alt='profilePic' />
            <p>
              <strong>Name:</strong> {onBoardedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {onBoardedUser.email}
            </p>
            <p>
              <strong>Height:</strong> {onBoardedUser.height}
             </p>
             <p>
               <strong>Start Weight:</strong> {onBoardedUser.startWeight}
             </p>
             <p>
           <strong>Goal Weight:</strong> {onBoardedUser.goalWeight}
           </p>
           <p>
           <strong>Goal Date:</strong> {onBoardedUser.goalDate}
           </p>
           <p>
           <strong>Activity Level:</strong> {onBoardedUser.activityLevel}
           </p>
           <p>
           <strong>Calorie Budget:</strong> {parseInt(onBoardedUser.calorieBudget)}
           </p>
          </>
        )}
        {editMode ? (
          <button onClick={handleSaveChanges}>Save</button>
        ) : (
          <button onClick={handleEditProfile}>Edit Profile</button>
        )}
      </div>
    </div>
  );
}

export default Profile;

