import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(d => setUsers(d.data));
  }, []);

  if (users === null) return <p>loading ...</p>;
  return (
    <div className="container">
      <h2>users</h2>
      {/* {JSON.stringify(users, null, 2)} */}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <Link to={`${user._id}`}>
              {user.name} / {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
