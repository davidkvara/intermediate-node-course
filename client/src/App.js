import React from 'react';
import { Router } from '@reach/router';

import Home from './routes/home';
import Users from './routes/users';
import User from './routes/user';
import AddUser from './routes/addUser';
import Nav from './components/nav';

function App() {
  return (
    <div className="container">
      <Nav />
      <Router>
        <Home path="/" />
        <Users path="users" />
        <AddUser path="adduser" />
        <User path="users/:id" />
      </Router>
    </div>
  );
}

export default App;
