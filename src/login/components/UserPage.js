import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

const UserPage = ({
  authenticated,
  name,
  image,
  xImageCord,
  yImageCord,
  handleLogout,
  handleImageCords,
  xTextCord,
  yTextCord,
  handleTextCords
}) => {
  return (
    <div className="center">
      <h1> Welcome to the best page in the universe!</h1>
      <h2>
        Click and drag your picture or name to move it around. Click again to
        release
      </h2>
      <h3 className="up-form">
        All done?
        <form
          className="up-form login-form"
          onSubmit={e => {
            handleLogout(e);
          }}
        >
          <button type="submit" className="up-form logout">
            Logout
          </button>
        </form>
      </h3>
      <div className="card">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{
            x: xImageCord ? Number(xImageCord) : 0,
            y: yImageCord ? Number(yImageCord) : 0
          }}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={handleImageCords}
        >
          <div>
            <div className="handle">
              <img className="image" src={image} alt="{name}"/>
            </div>
          </div>
        </Draggable>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{
            x: xTextCord ? Number(xTextCord) : 0,
            y: yTextCord ? Number(yTextCord) : 0
          }}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={handleTextCords}
        >
          <div>
            <div
              className="handle up-form"
            >
              <h1 className="up-form">{name}</h1>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
}
UserPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleTextCords: PropTypes.func,
  handleImageCords: PropTypes.func,
  handleLogout: PropTypes.func
};

export default UserPage;
