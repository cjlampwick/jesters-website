import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import JSCard from "../Generic/JSCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

class News extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <JSCard />
                        </Col>
                        <Col>
                            <JSCard />
                        </Col>
                        <Col>
                            <JSCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default News;