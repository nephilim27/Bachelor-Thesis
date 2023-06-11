import React, {useState} from 'react';
import {useAuthentication} from "../providers/AuthProvider";

export default function Home() {
  const {authenticated, profile, onboardingCompleted} = useAuthentication();
  return (
    <>
      {authenticated && (  // TODO: pls adjust the code further
        <>
          <p>Welcome, {profile?.name}!</p>
          {
            onboardingCompleted ? (
            <p>Onboarding completed.</p>
          ) : (
            <p>Onboarding not completed. Please fill out the form.</p>
          )}
        </>
      )}
      {
        !authenticated &&
        <p>Sorry, not authorized!</p>
      }
    </>
  );
}
