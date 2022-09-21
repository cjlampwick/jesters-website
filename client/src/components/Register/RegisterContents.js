// import {useState} from "react";
import React from "react";

import "../../App.css";

import axios from "axios";

const baseUrl = "http://localhost:3001/register";

class RegisterContents extends React.Component {
  state = {
    fullName: "",
    email: "",
    dateBirth: "",
    dni: "",
    password: "",
    post: "",
    register: false,
    triedRegister: false,
  };

  handleChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  Register = async () => {
    await axios
      .post(baseUrl, {
        fullName: this.state.fullName,
        email: this.state.email,
        dateBirth: this.state.dateBirth,
        dni: this.state.dni,
        password: this.state.password,
      })
      .then((result) => {
        this.setState({ register: true });
      })
      .catch((error) => {
        error = new Error();
      });

    this.setState({ triedRegister: true });
  };
  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
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
            <label style={{ color: "white" }}>Fecha de nacimiento: </label>
            <br></br>
            <input
              type="date"
              className="form-control"
              name="dateBirth"
              placeholder=""
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
            <label style={{ color: "white" }}>FullName: </label>
            <br></br>
            <input
              type="string"
              className="form-control"
              name="fullName"
              placeholder="Ingrese nombre de usuario"
              onChange={this.handleChange}
            />
            <br></br>
            <label style={{ color: "white" }}>Contraseña: </label>
            <br></br>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Ingrese Contraseña"
              onChange={this.handleChange}
            />
            <br></br>
            <button
              className="btn btn-secondary"
              onClick={() => this.Register()}
            >
              Registrarse
            </button>
            {this.state.triedRegister == true ? (
              this.state.register == true ? (
                (window.location.href = "http://localhost:3000/")
              ) : (
                <p className="text-danger">registration failed</p>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterContents;
