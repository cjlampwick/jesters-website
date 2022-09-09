import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import md5 from 'md5';
import Cookies from 'universal-cookie'
import axios from 'axios';

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [register, setRegister] = useState(false);

const baseUrl = "http://localhost:3001/login"
const cookies = new Cookies();



class RegisterContents extends React.Component {
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

    }


    render() {
        const handleSubmit = (e) => {
            // prevent the form from refreshing the whole page
            e.preventDefault();
            // make a popup alert showing the "submitted" text
            alert("Submited");
        }
        return (
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ingresar Email </Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Ingrear password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                {/* submit button */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Register
                </Button>
            </Form>
        );
    }
}

export default RegisterContents;
