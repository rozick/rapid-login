import React from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({ handleAuth, handleChange, username, password }) => {
  return (
    <div className="container">
      <div className="login-title">Login</div>
      <form
        className="login-item"
        onSubmit={e => {
          handleAuth(e);
        }}
      >
        <div className="form-field">
          <input
            id="login-username"
            type="text"
            className="form-input"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={username || ''}
            required
          />
        </div>
        <div className="form-field">
          <input
            id="login-password"
            type="password"
            className="form-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password || ''}
            required
          />
        </div>
        <div className="form-field">
          <button type="submit" className="button">
            Let me in
          </button>
        </div>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  handleAuth: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string
};

export default LoginPage;