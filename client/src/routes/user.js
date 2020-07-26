import React, { useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';

const User = props => {
  const [user, setUser] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(props.id)
      .then(res => res.json())
      .then(t => (t.success ? setUser(t.data) : setError(true)));
  }, [props.id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  };

  const handleSave = () => {
    fetch(props.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newData: user })
    });
    setEditingMode(false);
    setUser(user);
  };

  const handleDeleteUser = () => {
    fetch(props.id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: props.id })
    });
    navigate('/users');
  };

  if (error) return <p>Sorry, no such user in db</p>;
  if (user === null) return <p>loading...</p>;
  return (
    <div>
      <h3>user</h3>
      {/* {JSON.stringify(user, null, 2)} */}
      {editingMode ? (
        <EditingModeView
          data={user}
          onChange={handleChange}
          onSave={handleSave}
        />
      ) : (
        <>
          <ul>
            <ListItem label="name" text={user.name} />
            <ListItem label="e-mail" text={user.email} />
            <ListItem label="password" text={user.password} />
          </ul>
          <button onClick={handleDeleteUser}>delete user</button>
          <button onClick={() => setEditingMode(true)}>edit user</button>
        </>
      )}
    </div>
  );
};

const ListItem = ({ label, text }) => (
  <li style={{ marginBottom: 10 }}>
    {label}: <b>{text}</b>
  </li>
);

const EditingModeView = ({ data, onChange, onSave }) => (
  <div>
    <ul>
      <li>
        <input value={data.name} name="name" onChange={e => onChange(e)} />
      </li>
      <li>
        <input value={data.email} name="email" onChange={e => onChange(e)} />
      </li>
      <li>
        <input
          value={data.password}
          name="password"
          onChange={e => onChange(e)}
        />
      </li>
    </ul>
    <button onClick={onSave}>save</button>
  </div>
);

export default User;
