import React from 'react';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
export { Home, About, Contact, Navigation };

function NavBar() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about/">About</Link>
      </div>
      <div>
        <Link to="/contact/">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
