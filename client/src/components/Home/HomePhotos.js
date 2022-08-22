import React from "react";

import Carousel from "react-bootstrap/Carousel";

class HomePhotos extends React.Component {
  render() {
    let path = process.env.PUBLIC_URL + "/photos/";

    let items = [];
    let images = [
      path + "photos-1.jpg",
      path + "photos-2.jpg",
      path + "photos-3.jpg",
    ];

    for (let x = 0; x < 3; x++) {
      items.push(
        <Carousel.Item>
          <div className="carousel-photo-jesters">
            <img className="d-block w-100" src={images[x]} alt="First slide" />
          </div>
        </Carousel.Item>
      );
    }
    return (
      <div>
        <p className="jesters-title">Photos</p>
        <div style={{borderRadius: "10px", overflow: "hidden"}}>
          <Carousel slide>{items}</Carousel>
        </div>
      </div>
    );
  }
}

export default HomePhotos;
