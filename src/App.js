/**
 * This is our highest, highest order component.
 * We're going to store our state here, top down and let it flow from there.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginContainer from './login/containers/LoginContainer';
import api from './login/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('state.username'),
      password: localStorage.getItem('state.password'),
      authenticated: localStorage.getItem('state.authenticated')
        ? localStorage.getItem('state.authenticated')
        : false,
      users: null,
      id: localStorage.getItem('state.id'),
      name: localStorage.getItem('state.name'),
      image: localStorage.getItem('state.image'),
      textX: localStorage.getItem('state.textX'),
      textY: localStorage.getItem('state.textY'),
      imageX: localStorage.getItem('state.imageX'),
      imageY: localStorage.getItem('state.imageY')
    };
  }

  componentDidMount() {
    api.fetchUsers().then(users => {
      localStorage.setItem('state.users', users);
      console.log(users);
      this.setState({
        users: users
      });
    });
  }

  changeForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkAuth = e => {
    e.preventDefault();
    this.state.users.map((user, i) => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
        localStorage.setItem('state.authenticated', true);
        localStorage.setItem('state.id', user.id);
        localStorage.setItem('state.name', user.name);
        localStorage.setItem('state.username', user.username);
        localStorage.setItem('state.password', user.password);
        localStorage.setItem('state.image', user.image);
        this.setState({
          authenticated: true,
          id: user.id,
          name: user.name,
          image: user.image
        });
      }
      return false;
    });
  };

  getImageCords = (e, ui) => {
    console.log('event', e);
    console.log('numbers', ui.x, ui.y);
    localStorage.setItem('state.imageX', ui.x);
    localStorage.setItem('state.imageY', ui.y);
    this.setState({
      imageX: ui.x,
      imageY: ui.y
    });
    console.log(this.state.imageX, this.state.imageY);
    return false;
  };

  getTextCords = (e, ui) => {
    console.log('event', e);
    console.log('numbers:', ui.x, ui.y);
    localStorage.setItem('state.textX', ui.x);
    localStorage.setItem('state.textY', ui.y);
    this.setState({
      textX: ui.x,
      textY: ui.y
    });
    console.log(this.state.textX, this.state.textY);
    return false;
  };

  logout = e => {
    e.preventDefault();
    this.setState({
      authenticated: false
    });
    localStorage.clear();
  };

  render() {
    return (
      <div>
        <LoginContainer
          users={this.state.users}
          authenticated={this.state.authenticated}
          name={this.state.name}
          image={this.state.image}
          handleChange={this.changeForm}
          handleAuth={this.checkAuth}
          username={this.state.username}
          password={this.state.password}
          handleTextCords={this.getTextCords}
          handleImageCords={this.getImageCords}
          xTextCord={this.state.textX}
          yTextCord={this.state.textY}
          xImageCord={this.state.imageX}
          yImageCord={this.state.imageY}
          handleLogout={this.logout}
        />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array,
  authenticated: PropTypes.bool,
  name: PropTypes.string,
  image: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleAuth: PropTypes.func,
  handleTextCords: PropTypes.func,
  handleImageCords: PropTypes.func,
  handleLogout: PropTypes.func
};

export default App;
