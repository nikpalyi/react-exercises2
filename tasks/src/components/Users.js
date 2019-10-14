import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div>
        <h2>USERS</h2>
        <h1>Hello, you live in {this.props.country}</h1>
      </div>
    );
  }
}

export default Users;
