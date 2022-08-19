import React from "react";
import HomeCard from "./HomeCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HomeNews extends React.Component {
  render() {
    let cards = [];

    for (let x = 0; x < 3; x++) {
      cards.push(
        <Col>
          <HomeCard />
        </Col>
      );
    }

    return (
      <div>
        <Container>
          <Row>{cards}</Row>
        </Container>
      </div>
    );
  }
}

export default HomeNews;
