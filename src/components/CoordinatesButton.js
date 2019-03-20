// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  getCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clietY]);
  }

  render() {
    return(
      <button onClick={const coord = this.getCoordinates}></button>
    )
  }
}

export default CoordinatesButton;
