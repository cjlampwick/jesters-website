import React from "react";
import "../styles/header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Header extends React.Component {
  logOut = () => {
    cookies.remove('email', {path: '/' });
    cookies.remove('token', {path: '/' });
    window.location.href = "/login";

  };

  render() {
    return (
      <div>
        <Row className="app-header justify-content-md-center">
          <Col className="menu-item side" xs lg="2">
            <Link to="/news">Noticias</Link>
          </Col>
          <Col className="menu-item side" xs lg="2">
            <Link to="/us">Nosotros</Link>
          </Col>
          <Col className="menu-item main" md="2">
            <div>
              <Link to="/">Inicio</Link>
            </div>
          </Col>
          <Col className="menu-item side" xs lg="2">
            <Link to="/university"> University </Link>
          </Col>
          <Col className="menu-item side" xs lg="2">
            <Link to="/coworking"> Coworking </Link>
          </Col>
        </Row>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          class="bi bi-door-open"
          viewBox="0 0 16 16"
          style={{ position: "relative",cursor: "pointer" ,right: "-1850px", top: "6px", "z-index" : "99999" }}
          alt="Cerrar sesion"
          onClick={() => this.logOut()} >
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
        </svg>
      </div>
    );
  }
}

export default Header;
