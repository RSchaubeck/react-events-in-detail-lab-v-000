// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  getCoordinates = (event) => {
    this.props.onRecieveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.getCoordinates}></button>
    )
  }
}

export default CoordinatesButton;
