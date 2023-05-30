import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pl';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import theme from './theme/muiTheme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/authContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider autoHideDuration={3000}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </LocalizationProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
