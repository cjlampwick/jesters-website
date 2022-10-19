import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import moment from "moment";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const baseUrl = "http://localhost:3001/coworking";

class JSModalReserve extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userIdPagar: "",
      dateFrom: "",
      dateTo: "",
      halfFrom: "",
      halfTo: "",
      appointmentStatus: "",
    };

    if (props.onCloseModal) {
      this.onCloseModal = props.onCloseModal;
      this.saveSuccess = props.saveSuccess;

      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.reserve = this.reserve.bind(this);
    }

    if (props.slotData) {
      console.log(JSON.stringify(props.slotData));
      this.state = {
        show: true,
        startDate: props.slotData.start,
      };
    }
  }
  
  pagar = async () => {
    const idUserPagar = cookies.get("id");
    await axios
      .post("http://localhost:3001/checkoutPagar", {
        userIdPagar: idUserPagar,
        dateFrom: this.state.dateFrom,
        dateTo: this.state.dateTo,
        halfFrom: this.state.halfFrom,
        halfTo: this.state.halfTo,
      })
      .then((result) => {
        debugger;
        console.log(result.data.mp_body.init_point);
        window.location.href=result.data.mp_body.init_point;
      })
      .catch((error) => {
        error = new Error();
      });
  };
  redirect = (evt) => {
    debugger;
    window.location.href = "http://localhost:3001/checkout";
  };

  reserve = async () => {
    const idUser = cookies.get("id");

    await axios
      .post(baseUrl, {
        userId: idUser,
        dateFrom: this.state.dateFrom,
        dateTo: this.state.dateTo,
        halfFrom: this.state.halfFrom,
        halfTo: this.state.halfTo,
      })
      .then((result) => {
        this.saveSuccess(result);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  handleChange = async (e) => {
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

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '/' + mm + '/' + dd;
    console.log(today);
    document.getElementById("date").value = today;
  }

  render() {
    return (
      <>
        <Modal
          style={{ marginTop: "120px" }}
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton style={{ margin: "auto" }}>
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
                Desde:{""}
                <span>
                  <input
                    type="date"
                    name="dateFrom"
                    style={{ height: "40px" }}
                    onChange={this.handleChange}
                    id={"date"}

                  ></input>
                </span>
              </div>
              <div style={{ margin: "auto" }}>
                <Form.Select
                  name="halfFrom"
                  style={{ margin: "0", borderRadius: "0px", height: "40px" }}
                  onChange={this.handleChange}
                >
                  <option disabled selected>
                    Selecciona el horario
                  </option>
                  <option value="1">09:00</option>
                  <option value="2">13:00</option>
                </Form.Select>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div>
                Hasta:{" "}
                <input
                  type="date"
                  name="dateTo"
                  style={{ height: "40px" }}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div style={{ margin: "auto" }}>
                <Form.Select
                  name="halfTo"
                  style={{ margin: "0", borderRadius: "0px", height: "40px" }}
                  onChange={this.handleChange}
                >
                  <option disabled selected>
                    Selecciona el horario
                  </option>
                  <option value="1">13:00</option>
                  <option value="2">18:00</option>
                </Form.Select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ margin: "auto" }}>
            <Button variant="secondary" onClick={this.handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.reserve}>
              Reservar
            </Button>
          </Modal.Footer>
          <Button variant="success" style={{width: "90px", margin: "auto", marginBottom: "15px"
          }} onClick={this.pagar}>
            Pagar
          </Button>
        </Modal>
      </>
    );
  }
}

export default JSModalReserve;
