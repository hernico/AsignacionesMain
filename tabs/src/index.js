import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

async function init() {
  let result = await fetch ('http://diegochagas.com/saint-sehttps://dragon-ball-api.herokuapp/api/character/Gohaniya-api/')
  
  result = await  result.json()
  console.log (result)
  
  }    
      
      init()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
