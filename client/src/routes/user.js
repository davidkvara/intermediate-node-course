import React, { useEffect, useState } from 'react';

const User = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(props.id)
      .then(res => res.json())
      .then(t => setUser(t.data));
  }, [props.id]);

  if (user === null) return <p>loading...</p>;
  return (
    <div>
      <h3>user</h3>
      {/* {JSON.stringify(user, null, 2)} */}
      <ul>
        <ListItem label="name" text={user.name} />
        <ListItem label="e-mail" text={user.email} />
        <ListItem label="password" text={user.password} />
      </ul>
    </div>
  );
};

const ListItem = ({ label, text }) => (
  <li style={{ marginBottom: 10 }}>
    {label}: <b>{text}</b>
  </li>
);
export default User;
