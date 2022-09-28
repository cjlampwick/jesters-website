import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import moment from "moment";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const baseUrl = "http://localhost:3001/coworking";

class JSModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      dateFrom : "",
      dateTo: "",
      appointmentStatus: "",
    };

    if (props.onCloseModal) {
      this.onCloseModal = props.onCloseModal;
      this.saveSuccess = props.saveSuccess;

      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
    }

    if (props.slotData) {
      console.log(JSON.stringify(props.slotData));
      this.state = {
        show: true,
        startDate: props.slotData.start,
      };
    }
  }

  Reserve = async () => {

    const idUser = cookies.get("id");

    await axios
      .post(baseUrl, {
        userId: idUser,
        dateFrom: this.state.dateFrom,
        dateTo: this.state.dateTo,
        
      })
      .then((result) => {
        this.saveSuccess(result);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  handleChange = async (e) => {
    debugger;

    await this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  handleClose() {
    this.onCloseModal();
  }

  handleShow() {
    alert(this.state.show);
  }

  render() {
    return (
      <>
        <Modal
          style={{ marginTop: "120px" }}
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton style={{margin:"auto"}}>
            <Modal.Title>
              {this.state.startDate.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div>
                Desde: <input type="date" value={moment(this.state.startDate).format('YYYY-MM-DD')} name="dateFrom" style={{ height: "40px" }} ></input>
              </div>
              <div style={{ margin: "auto" }}>
                <Form.Select name="fromHalf" onChange={this.handleChange} style={{ margin: "0", borderRadius: "0px", height: "40px" }}>
                  <option disabled selected>
                    Selecciona el horario
                  </option>
                  <option value="1">09:00</option>
                  <option value="2">13:00</option>
                </Form.Select>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: '10px' }}>
              <div>
                Hasta:  <input type="date" name="dateTo" style={{ height: "40px" }} ></input>
              </div>
              <div style={{ margin: "auto" }}>
                <Form.Select name="toHalf" onChange={this.handleChange} style={{ margin: "0", borderRadius: "0px", height: "40px" }}>
                  <option disabled selected>
                    Selecciona el horario
                  </option>
                  <option value="1">13:00</option>
                  <option value="2">18:00</option>
                </Form.Select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{margin:"auto"}}>
            <Button variant="secondary" onClick={this.handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.Reserve}>
              Reservar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default JSModal;
