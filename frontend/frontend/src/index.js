import {BrowserRouter} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';

import React from 'react';
import './index.css';
import './App.css';
import App from './App';
import {AuthProvider} from "./providers/AuthProvider";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="827107914359-gg5543putd8a6nl57pnu549kbd954g5q.apps.googleusercontent.com">
            <AuthProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);

