import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";

import Spacing from "../../components/Spacing";

class University extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
          <source src={background} type="video/mp4" />
        </video>

        <div
          className="App"
        >
          University
        </div>
      </div>
    );
  }
}

export default University;
