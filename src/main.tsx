import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }

`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>
);
