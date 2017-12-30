import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPage from '../components/UserPage';
import LoginPage from '../components/LoginPage';
import '../login.css';

class LoginContainer extends Component {
  render() {
    if (!this.props.users) {
      return <p>LOADING...</p>;
    }

    if (this.props.authenticated) {
      return (
        <UserPage
          authenticated={this.props.authenticated}
          name={this.props.name}
          image={this.props.image}
          xImageCord={this.props.xImageCord}
          yImageCord={this.props.yImageCOrd}
          xTextCord={this.props.xTextCord}
          yTextCord={this.props.yTextCord}
          handleImageCords={this.props.handleImageCords}
          handleTextCords={this.props.handleTextCords}
          handleLogout={this.props.handleLogout}
        />
      );
    }
    return (
      <LoginPage
        handleAuth={this.props.handleAuth}
        handleChange={this.props.handleChange}
        username={this.props.username}
        password={this.props.password}
      />
    );
  }
}
LoginContainer.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  handleImageCords: PropTypes.func,
  handleTextCords: PropTypes.func,
  handleLogout: PropTypes.func,
  handleAuth: PropTypes.func,
  handleChange: PropTypes.func
};

export default LoginContainer;
