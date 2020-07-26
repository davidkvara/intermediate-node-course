import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = e => {
    e.preventDefault();
    const newData = {
      name,
      email,
      password
    };
    fetch('/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newData: newData })
    });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>add user</h2>

      <form onSubmit={addUser}>
        <p>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
            name="name"
            placeholder="name"
          />
        </p>
        <p>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="email"
          />
        </p>
        <p>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            name="password"
            placeholder="password"
          />
        </p>
        <button>add user</button>
      </form>
    </div>
  );
};

export default AddUser;
