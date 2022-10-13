import Carousel from "react-bootstrap/Carousel";
import React from "react";

function HomeCarousel() {
  let items = [];
  let path = process.env.PUBLIC_URL + "/photos/";
  let images = [
    {
      redirect: "/jestersparty",
      link: path + "halloween.jpg",
      h3:<h3>Jesters Party</h3>,
      p: <p>Fiesta de disfraces por Halloween de Jesters Esports</p>,
    },
    {
      redirect: "/coworking",
      link:path + "coworking.jpg",
      h3: <h3>Coworking</h3>,
      p: <p>Reserva acá y trabaja como en tu casa</p>,
    },
    {
      redirect: "#",
      link:"https://steamuserimages-a.akamaihd.net/ugc/1691625797039848967/F2934502179AB51E6523462D5DB25CC7099B282A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      h3: <h3>Prueba 3</h3>,
      p: <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>,
    },
  ];

  function redirect(evt) {
    window.location.href = evt.target.dataset.redirect;
  }

  for (let x = 0; x < 3; x++) {
    items.push(
      <Carousel.Item>
        <div className="carousel-image-jesters">
          <img
            onClick={redirect}
            data-redirect={images[x].redirect}
            className="d-block w-100"
            src={images[x].link}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          {images[x].h3}
          {images[x].p}
          
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  return <Carousel slide>{items}</Carousel>;
}

export default HomeCarousel;
