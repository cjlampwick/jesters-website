import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class JSModal extends React.Component {
  constructor(props) {
    super(props);

    if (props.onCloseModal) {
      this.onCloseModal = props.onCloseModal;

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
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.startDate.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: "flex" }}>
            <div>
              Desde: <input type="date" style={{ height: "40px" }}></input>
            </div>
            <div style={{ margin:"auto" }}>
              <Form.Select id="disabledSelect" style={{ margin: "0", borderRadius: "0px", height: "40px" }}>
                <option disabled selected>
                  Selecciona el horario
                </option>
                <option value="item 1">09:00</option>
                <option value="item 2">13:00</option>
              </Form.Select>
            </div>
          </Modal.Body>
          <Modal.Body style={{ display: "flex" }}>
            <div>
              Hasta:  <input type="date" value="" style={{ height: "40px" }}></input>
            </div>
            <div style={{ margin:"auto" }}>
              <Form.Select id="disabledSelect" style={{ margin: "0", borderRadius: "0px", height: "40px" }}>
                <option disabled selected>
                  Selecciona el horario
                </option>
                <option value="item 1">13:00</option>
                <option value="item 2">18:00</option>
              </Form.Select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.handleShow}>
              Reservar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default JSModal;
