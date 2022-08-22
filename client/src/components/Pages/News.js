import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Spacing from "../../components/Spacing";
import JSCard from "../Generic/JSCard";

import NewsContent from "../News/NewsContent";





class News extends React.Component {


  
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
          <NewsContent/>
          <Spacing />
          <NewsContent/>
          <Spacing />
          <Footer />
        </div>
      </div>
    );
  }
}

export default News;
