// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import './App.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom"
// import { GoogleOAuthProvider } from '@react-oauth/google';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <GoogleOAuthProvider clientId="827107914359-gg5543putd8a6nl57pnu549kbd954g5q.apps.googleusercontent.com"> 
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
//   </GoogleOAuthProvider>
//   )

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import axios from 'axios';

axios.get('http://localhost:8080/access-token')
  .then((response) => {
    const accessToken = response.data;

    ReactDOM.render(
      <App accessToken={accessToken} />,
      document.getElementById('root')
    );
  })
  .catch((error) => {
    console.log(error);
  });


