import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
        startDate: props.slotData.start
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dia "x"</Modal.Title>
          </Modal.Header>
          <Modal.Body>Quiere reservar este dia?</Modal.Body>
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
