import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from '.';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <NavBar />
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default Navigation;
