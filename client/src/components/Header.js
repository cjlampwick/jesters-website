import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends React.Component {
  render() {
    return (
      <Row className="app-header justify-content-md-center">
        <Col className="menu-item side" xs lg="2">
          Noticias
        </Col>
        <Col className="menu-item side" xs lg="2">
          Nosotros
        </Col>
        <Col className="menu-item main" md="2">
          <div>Inicio</div>
        </Col>
        <Col className="menu-item side" xs lg="2">
          University
        </Col>
        <Col className="menu-item side" xs lg="2">
          Coworking
        </Col>
      </Row>
    );
  }
}

export default Header;
