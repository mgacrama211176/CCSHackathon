import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ParkModal = ({ slot }) => {
  console.log(slot);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <button
          type="button"
          className="btn check-seat btn-success small btn-sm rounded mr-2 mb-2"
          data-toggle="modal"
          data-target="#confirmModal"
          onClick={handleShow}
        >
          P{slot.parkingNumber}
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Parking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="#">
              <div className="form-group">
                <label className="text-muted f-10 mb-1">Driver Name</label>
                <input className="form-control" placeholder="Enter the driver's name"></input>
              </div>
              <div className="form-group">
                <label className="text-muted f-10 mb-1">Car Model</label>
                <input className="form-control" placeholder="Enter the car model"></input>
              </div>
              <div className="form-group">
                <label className="text-muted f-10 mb-1">Car Type</label>
                <input className="form-control" placeholder="Enter the car type"></input>
              </div>
              <div className="form-group">
                <label className="text-muted f-10 mb-1">Car License</label>
                <input className="form-control" placeholder="Enter the car license"></input>
              </div>
              <div className="form-group">
                <label className="text-muted f-10 mb-1">Plate Number</label>
                <input className="form-control" placeholder="Enter the car's plate number"></input>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Confirm parking
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ParkModal;
