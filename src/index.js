import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Rental_Car_Front_End">
      <ThemeProvider theme={{ theme }}>
        <Provider store={store}>
          <App />
        </Provider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
