import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Spacing from "../../components/Spacing";

class Coworking extends React.Component {
    render() {
        return (
            <div>
                <video autoPlay muted loop id="myVideo">
                    <source src={background} type="video/mp4" />
                </video>

                <div
                    className="App"
                >   
                    <Spacing />
                    <div className="text-center" >
                        <Link to="/coworking/scheduler"> <Button className='btn btn-secondary'>Agendar</Button> </Link>
                    </div>
                    <Spacing />
                </div>
            </div>
        );
    }
}

export default Coworking;
