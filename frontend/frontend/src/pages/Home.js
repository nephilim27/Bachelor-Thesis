import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

export default function Home() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    if (user && user.access_token) {
      // User exists and has an access token, fetch user information
      axios
        .get('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          },
          params: {
            access_token: user.access_token
          }
        })
        .then((res) => {
          setProfile(res.data);
          setOnboardingCompleted(res.data.onboardingCompleted);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleLoginSuccess = (response) => {
    const { accessToken } = response;
    // Save the user and access token to local storage
    const user = { access_token: accessToken };
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const handleLoginFailure = (error) => {
    console.log('Login failed:', error);
  };

  const handleLogout = () => {
    // Clear the user and access token from local storage
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {profile?.name}!</p>
          {onboardingCompleted ? (
            <p>Onboarding completed.</p>
          ) : (
            <p>Onboarding not completed. Please fill out the form.</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please sign in to continue.</p>
          <GoogleLogin
            clientId="827107914359-gg5543putd8a6nl57pnu549kbd954g5q.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy="single_host_origin"
          />
        </>
      )}
    </div>
  );
}
