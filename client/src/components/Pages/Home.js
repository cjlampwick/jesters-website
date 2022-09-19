import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";

import HomeContent from "../../components/Home/HomeContent";

class Home extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
          <source src={background} type="video/mp4" />
        </video>

        <div
          className="App"
        >
          <HomeContent />
        </div>
      </div>
    );
  }
}

export default Home;
