import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='150795452854-li1vf27cfncdbd07ac08jbagbrcl33d6.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// Client id: -
// 150795452854-li1vf27cfncdbd07ac08jbagbrcl33d6.apps.googleusercontent.com

// Secret: -
// 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