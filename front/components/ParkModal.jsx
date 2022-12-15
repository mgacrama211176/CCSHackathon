import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";

const ParkModal = ({ slot }) => {
  // console.log(slot);
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const [plate, usePlate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(slot);
  }, []);

  const onChangeHandle = (e) => {
    const newUser = { ...plate };
    newUser[e.target.id] = e.target.value;
    console.log(newUser);
    usePlate(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reserveParkingSlot = await axios.put(
        `http://localhost:4000/api/slots/updateSlot/${slot._id}`,
        {
          parkerPlateNumber: plate.plateNumber,
          parkingNumber: slot.parkingNumber,
        }
      );
      const parkingLog = await axios.post(
        `http://localhost:4000/api/users/addParker`,
        {
          parkerPlateNumber: plate.plateNumber,
          parkingNumber: slot.parkingNumber,
        }
      );
      const addNotifNew = await axios.post(
        `http://localhost:4000/api/notification/new`,
        {
          parkerPlateNumber: plate.plateNumber,
          parkingNumber: slot.parkingNumber,
          message: "Has Parked",
          status: "entry",
        }
      );
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleExitSubmit = async (e) => {
    e.preventDefault();
    console.log(slot.parkerPlateNumber);
    try {
      const exitNotifNew = await axios.post(
        `http://localhost:4000/api/notification/exit`,
        {
          parkerPlateNumber: slot.parkerPlateNumber,
          parkingNumber: slot.parkingNumber,
          message: "Has Exited",
          status: "exit",
        }
      );
      const reserveParkingSlot = await axios.put(
        `http://localhost:4000/api/slots/updateSlot/${slot._id}`,
        {
          parkerPlateNumber: null,
          parkingNumber: slot.parkingNumber,
        }
      );

      console.log(reserveParkingSlot);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <>
        {slot.parkerPlateNumber == null ? (
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
          </>
        ) : (
          <>
            <button
              type="button"
              className="btn check-seat btn-danger small btn-sm rounded mr-2 mb-2"
              data-toggle="modal"
              data-target="#confirmModal"
              onClick={handleShow}
            >
              P{slot.parkingNumber}
            </button>
          </>
        )}

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
                      id="plateNumber"
                      className="form-control"
                      placeholder="Enter the car's plate number"
                      onChange={(e) => {
                        onChangeHandle(e);
                      }}
                    ></input>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={handleSubmit}>
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
                  <div className="form-group d-flex flex-column font-weight-bold">
                    <label className="text-muted f-10 mb-1">
                      Plate Number : {slot.parkerPlateNumber}
                    </label>
                    <label className="text-muted f-10 mb-1">
                      Parking Slot No : {slot.parkingNumber}
                    </label>
                    <label className="text-muted f-10 mb-1">
                      Parking Time : {format(slot.updatedAt)}
                    </label>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={handleExitSubmit}>
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
