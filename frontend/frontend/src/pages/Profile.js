import React, { useEffect, useState } from 'react';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/onboarding?timestamp=${Date.now()}`)
    .then((response) => response.json())
    .then((data) => {
    setUserData(data);
    setUser(data[0]);
  })
  .catch((error) => {
    console.error('Error retrieving user data:', error);
  });

  }, []);

  if (userData.length === 0) {
    return <div>Loading...</div>;
  }

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    fetch(`http://localhost:8080/onboarding/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), 
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        const updatedUserData = userData.map((u) => (u.id === updatedUser.id ? updatedUser : u));
        setUserData(updatedUserData); 
        setEditMode(false); 
        alert("Changes saved succesfully!")
      })
      .catch((error) => {
        console.log(error);
        alert("Error saving changes!")
      });
  };
  
  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
            value={user.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="height"
            value={user.height}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="sex"
            value={user.sex}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="birthDate"
            value={user.birthDate}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="currentWeight"
            value={user.currentWeight}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="startWeight"
            value={user.startWeight}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="goalWeight"
            value={user.goalWeight}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="goalDate"
            value={user.goalDate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="activityLevel"
            value={user.activityLevel}
            onChange={handleInputChange}
          />
        </div>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Height:</strong> {user.height}
            </p>
            <p>
              <strong>Sex:</strong> {user.sex}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Birth Date:</strong> {user.birthDate}
            </p>
            <p>
              <strong>Current Weight:</strong> {user.currentWeight}
            </p>
            <p>
              <strong>Start Weight:</strong> {user.startWeight}
            </p>
            <p>
          <strong>Goal Weight:</strong> {user.goalWeight}
          </p>
          <p>
          <strong>Goal Date:</strong> {user.goalDate}
          </p>
          <p>
          <strong>Activity Level:</strong> {user.activityLevel}
          </p>
          <p>
          <strong>Calorie Buget:</strong> {}
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

