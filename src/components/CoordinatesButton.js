// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  onReceiveCoordinates = (event) => {
    [event.clientX, event.clientY];
  }

  render() {
    return(
      <button onClick={this.onReceiveCoordinates}></button>
    )
  }
}

export default CoordinatesButton;
