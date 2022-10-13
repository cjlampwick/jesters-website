import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";
import "../../styles/jestersParty.css";

class Success extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
          <source src={background} type="video/mp4" />
        </video>

        <div className="App">
            <div class="tittle-container">
                <h1><b>¡Muchas gracias por tu compra!</b></h1>
                <hr/>  
            </div>

            <div class="duo">
                <div class="cajaMid2">
                    <img src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"/>
                </div>
                <div class="cajaMid2 normal-text bix box">
                    <h5>Codigo de entrada: XRTASDXRT</h5>
                    <h5>Tipo de entrada: Con disfraz</h5>
                    <h5>Direccion: AV Pedro Dreyer 1354</h5>
                </div>
            </div>

            <div class="caja3">
                <hr/>
                <p>
                    <h5> <i> 
                        "los requisitos para la entrada son con drisfraz o se le cobrara la diferencia en la entrada al no
                        traer disfraz"
                        </i>
                    </h5>
                </p>
                
            </div>
            </div>
        </div>
    );
  }
}

export default Success;
