import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import md5 from 'md5';
import Cookies from 'universal-cookie'
import axios from 'axios';

const baseUrl = "http://localhost:3001/login"
const cookies = new Cookies();



class LoginContents extends React.Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }
    iniciarSesion = async () => {

        //----------------------INICIO DE SESION NUEVO
        
      


        //----------------------INICIO DE SESION VIEJO
        // await axios.get(baseUrl, { params: { email: this.state.form.username, password: this.state.form.password } })
        //     .then(response => {
        //         if (response.length > 0) {
        //             var respuesta = response[0];
        //             cookies.set('id', respuesta.id, { path: "/" });
        //             cookies.set('name', respuesta.name, { path: "/" });
        //             cookies.set('lastName', respuesta.lastName, { path: "/" });
        //             cookies.set('username', respuesta.username, { path: "/" });
        //             alert(`Bienvenido ${respuesta.name} ${respuesta.lastName}`);
        //             window.location.href = './';
        //         } else {
        //             alert('El usuario o la contraseña son incorrectos');
        //         }

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
    render() {
        return (
            <div className='containerPrincipal'>
                <div className='containerSecundario'>
                    <div className='form-group'>
                        <label>Email: </label>
                        <br>
                        </br>
                        <input
                            type="email"
                            className='form-control'
                            name='email'
                            onChange={this.handleChange}
                        />
                        <br>
                        </br>
                        <label>Contraseña: </label>
                        <br>
                        </br>
                        <input
                            type="password"
                            className='form-control'
                            name='password'
                            onChange={this.handleChange}
                        />
                        <br>
                        </br>
                        <button className='btn btn-secondary' onClick={() => this.iniciarSesion()}>Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginContents;
