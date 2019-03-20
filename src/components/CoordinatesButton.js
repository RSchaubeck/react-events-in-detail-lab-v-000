// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  constructor(props){
    super(props)
  }

  getCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clietY]);
  }

  render() {
    return(
      <button onClick={this.getCoordinates}></button>
    )
  }
}

export default CoordinatesButton;
