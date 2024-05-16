import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Helmet
      defaultTitle="Login and Registration"
    >
      <meta charSet="utf-8" />
    </Helmet>
    <App />
  </React.StrictMode>
);