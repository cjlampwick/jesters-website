import Carousel from "react-bootstrap/Carousel";
import React from "react";

function HomeCarousel() {
  let items = [];
  let images = [
    'https://whatifgaming.com/wp-content/uploads/2021/10/mizuri-scaled.jpg',
    'https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2021/08/fan-recreates-valorant-map-split-with-a-realistic-touch.png',
    'https://steamuserimages-a.akamaihd.net/ugc/1691625797039848967/F2934502179AB51E6523462D5DB25CC7099B282A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  ];



  for (let x = 0; x < 3; x++) {
    items.push(
      <Carousel.Item>
        <div className="carousel-image-jesters">
          <img
            className="d-block w-100"
            src={images[x]}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  return <Carousel slide>
    {items}
  </Carousel>;
}

export default HomeCarousel;
