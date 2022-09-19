// import {useState} from "react";
import React from "react";

import "../../App.css";

import axios from "axios";

const baseUrl = "http://localhost:3001/register";

class RegisterContents extends React.Component {
  state = {
    email: "",
    username: "",
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
        email: this.state.email,
        username: this.state.username,
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
            <label>Email: </label>
            <br></br>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Ingrese Email"
              onChange={this.handleChange}
            />
            <br></br>
            <label>UserName: </label>
            <br></br>
            <input
              type=""
              className="form-control"
              name="username"
              placeholder="Ingrese nombre de usuario"
              onChange={this.handleChange}
            />
            <br></br>
            <label>Contraseña: </label>
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
                window.location.href = "http://localhost:3000/"
              ) : (
                <p className="text-danger">You Are Not Logged in</p>
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
