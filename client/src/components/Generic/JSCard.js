import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class JSCard extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="https://www.teamliquid.com/images/converted/2c8d4efaf6310b5903e53db6739c7fc10e4984bf.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-dark">Go Somewhere</Button>{' '}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default JSCard;
