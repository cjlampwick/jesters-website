import React from "react";
import background from "./assets/background-video.webm";

import "./styles/home.css";
import "./styles/generic.css";

import Header from "./components/Header";
import HomeContent from "./components/Home/HomeContent";
import Spacing from "./components/Spacing";

class App extends React.Component {
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
          <HomeContent />
        </div>
      </div>
    );
  }
}

export default App;
