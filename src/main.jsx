import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react';
import { ContactsProvider } from './context/ContactsContext.jsx';
import { Theme } from './themes/index.js';

ReactDOM.render(
  <React.StrictMode>
    <ContactsProvider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ContactsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);