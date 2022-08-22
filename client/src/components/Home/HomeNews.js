import React from "react";
import JSCard from "../Generic/JSCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HomeNews extends React.Component {
  render() {
    let cards = [];

    for (let x = 0; x < 3; x++) {
      cards.push(
        <Col>
          <JSCard/>
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
