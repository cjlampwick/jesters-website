import React from "react";

class HomeSocial extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <p className="jesters-title">Social</p>
        <a
          class="twitter-timeline"
          data-height="504"
          data-theme="dark"
          href="https://twitter.com/JestersEsports?ref_src=twsrc%5Etfw"
        >
          Tweets by JestersEsports
        </a>
      </div>
    );
  }
}

export default HomeSocial;
