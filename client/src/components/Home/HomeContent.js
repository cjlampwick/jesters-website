import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeNews from "./HomeNews";
import HomePhotos from "./HomePhotos";
import HomeSocial from "./HomeSocial";
import Spacing from "../Spacing";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import background from "./assets/background-video.webm";
// import "assets/photos-1.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="home-content">
        <Container>
          <HomeCarousel />

          <Spacing />

          <HomeNews />

          <Spacing />

          <Row>
            <Col>
              <HomePhotos />
            </Col>
            <Col>
              <HomeSocial />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
