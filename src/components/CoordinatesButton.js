// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  onReceiveCoordinates = (event) => {
    this.props.mouseCoordinates = [event.clientX, event.clientY];
  }

  render() {
    return(
      <button onClick={this.onReceiveCoordinates}></button>
    )
  }
}

export default CoordinatesButton;
