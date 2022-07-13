import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './context/DataContext'
import reducer,{initialState} from './context/Reducer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider className='container' initialState={initialState} reducer={reducer}>
     <App />
    </DataProvider>
  </React.StrictMode>
);