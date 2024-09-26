import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css'

import  {AuthProvider}  from './state/auth';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, deepPurple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider> 
  </React.StrictMode>
);

