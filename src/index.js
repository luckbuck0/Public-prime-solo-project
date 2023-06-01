import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

import { ThemeProvider} from '@emotion/react';
import { createTheme } from '@mui/material';

import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    third: {
      third: blue[300]
    },
    four: {
      four: blue[200]
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  
  <React.StrictMode>
    <Provider  store={store}>
      <App />
    </Provider> 
  </React.StrictMode>
  
  
  
 
);
