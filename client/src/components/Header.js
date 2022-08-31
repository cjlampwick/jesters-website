import React from "react";
import "../styles/header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Row className="app-header justify-content-md-center">
        <Col className="menu-item side" xs lg="2">
          <Link to="/news">Noticias</Link>
        </Col>
        <Col className="menu-item side" xs lg="2">
        <Link to="/us">Nosotros</Link>
        </Col>
        <Col className="menu-item main" md="2">
          <div><Link to="/">Inicio</Link></div>
        </Col>
        <Col className="menu-item side" xs lg="2">
        <Link to="/university"> University </Link>
        </Col>
        <Col className="menu-item side" xs lg="2">
        <Link to="/coworking"> Coworking </Link>
          
        </Col>
      </Row>
    );
  }
}

export default Header;
