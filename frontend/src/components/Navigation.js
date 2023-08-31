import React from 'react';
import { Link } from 'react-router-dom';

import TopicsPage from '../pages/TopicsPage';


function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="TeasPage">Tea Inventory</Link>
        <Link to="/create">Add Tea</Link>
        <Link to="TopicsPage">Topics</Link>
    </nav>
  );
}

export default Navigation;
