import React, {useState} from 'react';
import {useAuthentication} from "../providers/AuthProvider";

export default function Home() {
  const {authenticated, profile, onboardingCompleted} = useAuthentication();
  return (
    <>
      {authenticated && (  
        <>
          <div className="slogan">
            <h1>eat <span className="highlight">&lt;smarter&gt;</span> live <span className="highlight">&lt;better&gt;</span></h1>
          </div>
          <p className='subtitle'>Achieve your goals by tracking your calories and learning along the way </p>
          <img className='googleApple' src='img/googleApple.jpg' alt='googleApple' />
          <div className="box-container">
          <div className="box">
            <img src="img/users.png" alt="users" />
            <h2>Over 5 million users</h2>
            <p>Join the community to get tips and inspiration from other users</p>
          </div>
          <div className="box">
            <img src="img/dataprivacy.png" alt="dataprivacy" />
            <h2>Data privacy & security</h2>
            <p>We take the security of our users seriosusly - we will never sell your account data to third parties</p>
          </div>
          <div className="box">
            <img src="img/nutritiondata.png" alt="nutritiondata" />
            <h2>Accurate nutrition data</h2>
            <p>Rest assured that the food you log has the correct nutrition data</p>
          </div>
        </div>
        </>
      )}
      {
        !authenticated &&
        <p>Sorry, not authorized! Please Login!</p>
      }
    </>
  );
}
