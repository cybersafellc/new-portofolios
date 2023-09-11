import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import imgProject1 from "../Assets/img/laptop-main.png";

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">IP Tracker</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row className="g-5">
            <Col xs="12 d-flex justify-content-center">
              <Image className="w-100" src={imgProject1} />
            </Col>
            <Col xs="6 d-flex justify-content-center">
              <Button className="bg-ungu" onClick={props.grepo}>
                View Github Repo
              </Button>
            </Col>
            <Col xs="6 d-flex justify-content-center">
              <Button className="bg-ungu" onClick={props.gpages}>
                View Github Pages
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-danger border-0" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
