import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { loginData, handleLoginChange } = useAuth(); // ✅ correct

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your login logic
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;