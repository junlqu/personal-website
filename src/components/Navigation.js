import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Hamburger from './Hamburger';
import routes from '../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <nav className="index-link">
      {routes.filter((l) => l.logo).map((l) => (
        <a key={l.label} href="/"><img src={l.img} alt="Junlin Qu" /></a>
      ))}
    </nav>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.logo).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;