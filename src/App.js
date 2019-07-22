import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter as Router} from 'react-router-dom';
const App = () => (
  <div>
  <Router>
  <Navigation />
  </ Router>
  </div>
);

export default App;
