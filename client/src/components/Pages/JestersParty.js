import React from "react";
import "../../App.css";
import axios from "axios";
import background from "../../assets/background-video.webm";
import Form from "react-bootstrap/Form";

const baseUrl = "http://localhost:3001/checkout";

class JestersParty extends React.Component {
  state = {
    fullName: "",
    email: "",
    dni: "",
    ticketType: "",
  };

  handleChange = async (e) => {
    
    await this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
  send = async () => {
    await axios
      .post(baseUrl, {
        fullName: this.state.fullName,
        email: this.state.email,
        dni: this.state.dni,
        ticketType: this.state.ticketType,
      })
      .then((result) => {
        debugger;
        window.location.href=result.data.message;
      })
      .catch((error) => {
        error = new Error();
      });
  };
  redirect = (evt) => {
    debugger;
    window.location.href = "http://localhost:3001/checkout";
  };

  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
          <source src={background} type="video/mp4" />
        </video>
        <div className="App">
          <div className="containerPrincipal">
            <div className="containerSecundario">
              <div className="form-group">
                <label style={{ color: "white" }}>Nombre completo: </label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  placeholder="Ingrese Nombre completo"
                  onChange={this.handleChange}
                />
                <br></br>

                <label style={{ color: "white" }}>Email: </label>
                <br></br>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingrese Email"
                  onChange={this.handleChange}
                />
                <br></br>

                <label style={{ color: "white" }}>DNI: </label>
                <br></br>
                <input
                  type="number"
                  className="form-control"
                  name="dni"
                  placeholder="Ingrese DNI"
                  onChange={this.handleChange}
                />
                <br></br>
                <label style={{ color: "white" }}>Tipo de entrada: </label>
                <Form.Select aria-label="Default select example" name="ticketType" onChange={this.handleChange}>
                  <option>Ingrese tipo de entrada</option>
                  <option value="1">Con disfraz</option>
                  <option value="2">Sin disfraz</option>
                </Form.Select>
                <br></br>

                <button
                  className="btn btn-secondary"
                  onClick={() => this.send()}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JestersParty;
