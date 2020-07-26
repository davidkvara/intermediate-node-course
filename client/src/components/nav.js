import React from 'react';
import { Link } from '@reach/router';

const Nav = () => (
  <nav style={navStyle}>
    <HyperLink to="/">home</HyperLink>
    <HyperLink to="/adduser">add user</HyperLink>
    <HyperLink to="/users">users</HyperLink>
  </nav>
);

const navStyle = { borderBottom: `1px dotted #679`, padding: `1rem 0` };

const HyperLink = ({ children, to }) => (
  <Link
    to={to}
    style={{
      marginRight: ` 1rem`
    }}
  >
    {children}
  </Link>
);

export default Nav;
