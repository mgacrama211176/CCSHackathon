import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ParkModal = ({ slot }) => {
  console.log(slot);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(slot);
  }, []);

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
          {slot.parkerPlateNumber == null ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Parking</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="#">
                  <div className="form-group">
                    <label className="text-muted f-10 mb-1">Plate Number</label>
                    <input
                      className="form-control"
                      placeholder="Enter the car's plate number"
                    ></input>
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
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Parker Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="#">
                  <div className="form-group">
                    <label className="text-muted f-10 mb-1">
                      Plate Number : {slot.parkerPlateNumber}
                    </label>
                    <label className="text-muted f-10 mb-1">
                      Parking Slot No : {slot.parkingNumber}
                    </label>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                  Confirm Exit
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </>
    </div>
  );
};

export default ParkModal;
