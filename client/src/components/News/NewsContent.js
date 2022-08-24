import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import JSCard from "../Generic/JSCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

class NewsContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { news: props.news };
        console.log(props.news);
    }

    render() {
        let showNews = [];

        this.state.news.map((news) => {
            showNews.push(
                <Col>
                    <JSCard title={news.title} body={news.body} author={news.author} image={news.image} />
                </Col>
            );
        })

        return (
            <div>
                <Container>
                    <Row>
                        {showNews}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default NewsContent;