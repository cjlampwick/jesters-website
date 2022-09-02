import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Spacing from "../../components/Spacing";

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import JSCalendar from "../Coworking/JSCalendar";


class Coworking extends React.Component {
    render() {
        return (
            <div>
                <video autoPlay muted loop id="myVideo">
                    <source src={background} type="video/mp4" />
                </video>

                <div
                    className="App"
                    style={{
                        height: `100vh`,
                    }}
                >
                    <Header />
                    <Spacing />
                    <JSCalendar/>
                    <Spacing />
                    <div className="text-center" >
                        <Link to="/login"> <Button className='btn btn-secondary' onClick={() => this.redirect()}>Agendar</Button> </Link>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Coworking;
