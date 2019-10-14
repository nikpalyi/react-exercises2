import React, { Component } from 'react';

class Comp extends Component {
  state = { string: ' SOME TEXT STRING' };
  render() {
    return (
      <div>
        <h2>You choose Comp</h2>
        <h4>Interpolation</h4>
        {this.state.string}
      </div>
    );
  }
}

export default Comp;
