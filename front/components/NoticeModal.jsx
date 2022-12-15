import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NoticeModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>

        <Button type="button" className="btn btn-sm btn-light" data-toggle="modal" data-target="#addNotice" onClick={handleShow}>Add Notice</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Notice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="#">
                <div className="form-group">
                    <label className="text-muted f-10 mb-1">Notication Title</label>
                    <input className="form-control" placeholder="Enter notication title"></input>
                </div>
                <div className="form-group">
                    <label className="text-muted f-10 mb-1">Notification Detail</label>
                    <textarea className="form-control" placeholder="Enter notification detail"></textarea>
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-sm btn-danger" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn btn-sm btn-success" onClick={handleClose}>
              Add Notice
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default NoticeModal;
