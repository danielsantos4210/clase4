import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './compontentes/Header.js';
import Presentacion from './compontentes/Presentacion.js';
import Portafolio from './compontentes/Portafolio.js';
import Rezume from './compontentes/Rezume.js';
import Aboutme from './compontentes/Aboutme.js';

ReactDOM.render(
  
  <React.StrictMode>
    <Header/>
    <Presentacion/>
    <Portafolio/>
    <Rezume/>
    <Aboutme/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
