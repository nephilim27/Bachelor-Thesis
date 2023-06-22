// import React, {useState} from 'react';
// import {useAuthentication} from "../providers/AuthProvider";

// export default function Home() {
//   const {authenticated, profile, onboardingCompleted} = useAuthentication();

//   return (
//     <>
//       {authenticated && (  
//         <>
//           <div className="slogan">
//             <h1>eat <span className="highlight">&lt;smarter&gt;</span> live <span className="highlight">&lt;better&gt;</span></h1>
//           </div>
//           <p className='subtitle'>Achieve your goals by tracking your calories and learning along the way </p>
//           <img className='googleApple' src='img/googleApple.jpg' alt='googleApple' />
//           <div className="box-container">
//           <div className="box">
//             <img src="img/users.png" alt="users" />
//             <h2>Over 5 million users</h2>
//             <p>Join the community to get tips and inspiration from other users</p>
//           </div>
//           <div className="box">
//             <img src="img/dataprivacy.png" alt="dataprivacy" />
//             <h2>Data privacy & security</h2>
//             <p>We take the security of our users seriosusly - we will never sell your account data to third parties</p>
//           </div>
//           <div className="box">
//             <img src="img/nutritiondata.png" alt="nutritiondata" />
//             <h2>Accurate nutrition data</h2>
//             <p>Rest assured that the food you log has the correct nutrition data</p>
//           </div>
//         </div>
//         </>
//       )}
//       {
//         !authenticated &&
//         <p>Sorry, not authorized! Please Login!</p>
//       }
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthentication } from '../providers/AuthProvider';
import OnboardingForm from './OnboardingForm';

export default function Home() {
  const { authenticated, profile } = useAuthentication();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const checkUserExistence = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/check-email?email=${profile.email}`);
        const userExists = response.data;
        setUserExists(userExists);
        if (!userExists) {
          // User doesn't exist, you can perform any additional actions here if needed
          console.log('User does not exist');
        }
      } catch (error) {
        console.error('Error checking user existence:', error);
      }
    };

    // Check user existence when the component mounts
    if (authenticated && profile.email) {
      checkUserExistence();
    }
  }, [authenticated, profile.email]);

  return (
    <>
      {authenticated && (
        <>
          {userExists ? (
            <>
              <div className="slogan">
                <h1>eat <span className="highlight">&lt;smarter&gt;</span> live <span className="highlight">&lt;better&gt;</span></h1>
              </div>
              <p className="subtitle">Achieve your goals by tracking your calories and learning along the way</p>
              <img className="googleApple" src="img/googleApple.jpg" alt="googleApple" />
              <div className="box-container">
                <div className="box">
                  <img src="img/users.png" alt="users" />
                  <h2>Over 5 million users</h2>
                  <p>Join the community to get tips and inspiration from other users</p>
                </div>
                <div className="box">
                  <img src="img/dataprivacy.png" alt="dataprivacy" />
                  <h2>Data privacy & security</h2>
                  <p>We take the security of our users seriously - we will never sell your account data to third parties</p>
                </div>
                <div className="box">
                  <img src="img/nutritiondata.png" alt="nutritiondata" />
                  <h2>Accurate nutrition data</h2>
                  <p>Rest assured that the food you log has the correct nutrition data</p>
                </div>
              </div>
            </>
          ) : (
            <OnboardingForm />
          )}
        </>
      )}
      {!authenticated && <h2>Sorry, not authorized! Please Login!</h2>}
    </>
  );
}

