import React, { useState } from 'react';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      // Implement registration logic
      console.log('Register', username, password);
  };

  return (
      <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Register</button>
      </form>
  );
}

export default RegisterForm;