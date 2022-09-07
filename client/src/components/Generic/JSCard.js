import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class JSCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        title: props.title,
        body: props.body,
    };
  }
  
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="https://www.teamliquid.com/images/converted/2c8d4efaf6310b5903e53db6739c7fc10e4984bf.jpg" />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>
            {this.state.body}
            </Card.Text>
            <Button variant="outline-dark">Go Somewhere</Button>{' '}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default JSCard;
