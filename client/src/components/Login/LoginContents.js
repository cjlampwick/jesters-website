import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const baseUrl = "http://localhost:3001/login";
const cookies = new Cookies();

class LoginContents extends React.Component {
  state = {
    form: {
      email: "",
      password: "",
      login: false,
      triedLogin: false,
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };
  redireccionar() {
    window.location.href = "/register";
  }
  iniciarSesion = async () => {
    await axios
      .post(baseUrl, {
        email: this.state.form.email,
        password: this.state.form.password,
      })
      .then((response) => {
        this.setState({ login: true });
        if (response && response.data.message === "Login Successful") {
          var respuesta = response.data;

          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          cookies.set("fullName", respuesta.fullName, { path: "/" });
          cookies.set("token", respuesta.token, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
          debugger;
          alert(`Bienvenido ${respuesta.fullName}`);
          window.location.href = "./";
        } else {
          alert("El usuario o la contraseña son incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ triedLogin: true });
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
              placeholder="Ingrese email"
              onChange={this.handleChange}
            />
            <br></br>
            <label>Contraseña: </label>
            <br></br>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Ingrese password"
              onChange={this.handleChange}
            />
            <br></br>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => this.iniciarSesion()}
              > 
                Iniciar Sesion
              </button>
              <button
                className="btn btn-secondary"
                style={{ marginLeft: "20px" }}
                onClick={this.redireccionar}
              >
                Registrarse
              </button>
            </div>
            {this.state.triedLogin == true ? (
              this.state.login == true ? (
                (window.location.href =
                  "./coworking/scheduler")
              ) : (
                <p className="text-danger">Email or password incorrects</p>
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

export default LoginContents;
