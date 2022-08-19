import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeNews from "./HomeNews";
import Spacing from "../Spacing";

import Container from "react-bootstrap/Container";

class Header extends React.Component {
  render() {
    return (
      <div className="home-content">
        <Container>
          <HomeCarousel />
        </Container>
        <Spacing />
        <HomeNews />
      </div>
    );
  }
}

export default Header;
