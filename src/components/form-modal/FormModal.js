import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Cust_Input from "../cust-input/Cust_Input";
import "./form-modal.css";

const FormModal = ({show, setShow}) => {
  
  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Modal dialogClassName="cust-form-modal" show={show} onHide={handleClose}>
        <Modal.Header className="form-modal-header" closeButton>
          <Modal.Title>
            <h1 className="modal-title" style={{paddingLeft:"25px"}}>Add New User</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-modal-body">
            <Row>
                <Col lg="12" className="form-section-title">Section 1: Basic User Details</Col>
            </Row>
          <Row>
            <Col lg="6">
              <Cust_Input mandatory="mandatory" value={"Rishabh"}  label="Counselor's First Name" id="firstname" />
            </Col>
            <Col lg="6">
              <Cust_Input value={"Mishra"}  label="Counselor's Last Name" id="lastname" />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Cust_Input mandatory="mandatory" value={"Email"}  label="Counselor's Email" id="email" />
            </Col>
            <Col lg="6">
              <Cust_Input value={"Mobile"} label="Counselor's Mobile Number" id="mobile" />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Cust_Input mandatory="mandatory" value={"Source"} label="Counselor's Employee ID" id="employeeid" />
            </Col>
            <Col lg="6">
              <Cust_Input mandatory="mandatory" value={"RECEPTION"} label="Counselor's Designnation" id="designation" />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Cust_Input mandatory="mandatory" value={"New Enquiry"} label="Counselor's Gender" id="gender" />
            </Col>
          </Row>
        </Modal.Body>
       <hr/>
       <Modal.Body className="form-modal-body">
       <Row>
                <Col lg="12" className="form-section-title">Section 2: Counselor's Contact Details</Col>
            </Row>
       <Row>
            <Col lg="6">
              <Cust_Input value={"Country"} label="Counselor's Country" id="country" />
            </Col>
            <Col lg="6">
              <Cust_Input value={"Select State"} label="Counselor's State" id="state" />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Cust_Input value={"Select City"} label="Counselor's City" id="city" />
            </Col>
            <Col lg="6">
              <Cust_Input value={"Pincode"} label="Counselor's Pincode" id="pincode" />
            </Col>
          </Row>
       </Modal.Body>
        <Modal.Footer>
          <Button className="negative-btn" onClick={handleClose}>Cancel</Button>
          <Button className="positive-btn" onClick={handleClose}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
