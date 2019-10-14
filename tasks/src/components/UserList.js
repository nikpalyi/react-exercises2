import React, { Component } from 'react';

class Users extends Component {
  handleClick(i) {
    alert('You clicked: ' + this.props.items[i]);
  }

  render() {
    return (
      <div>
        <h2>USERS LIST</h2>

        {this.props.items.map((item, i) => (
          <div onClick={this.handleClick.bind(this, i)} key={i}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
