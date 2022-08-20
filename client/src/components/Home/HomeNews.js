import React from "react";
import HomeCard from "./HomeCard";

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
          <p className="jesters-title">News</p>
          <Row>{cards}</Row>
      </div>
    );
  }
}

export default HomeNews;
