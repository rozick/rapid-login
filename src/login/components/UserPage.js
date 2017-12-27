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
    <div style={{ textAlign: 'center' }}>
      <h1> Welcome to the best page in the universe!</h1>
      <h2>
        Click and drag your picture or name to move it around. Click again to
        release
      </h2>
      <h3 style={{ display: 'inline' }}>
        All done?
        <form
          style={{ display: 'inline' }}
          className="login-item"
          onSubmit={e => {
            handleLogout(e);
          }}
        >
          <button type="submit" style={{ display: 'inline', marginBottom: 10 }}>
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
            <div className="handle" style={{ textDecoration: 'underline' }}>
              <img src={image} alt="{name}" style={{ width: '50%' }} />
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
              className="handle"
              style={{ display: 'inline', textDecoration: 'underline' }}
            >
              <h1 style={{ display: 'inline', marginLeft: 20 }}>{name}</h1>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

UserPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleTextCords: PropTypes.func,
  handleImageCords: PropTypes.func,
  handleLogout: PropTypes.func
};

export default UserPage;
