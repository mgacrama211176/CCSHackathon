function AddParkingSpace() {
  return (
    <div className="payment padding-bt">
      <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <a className="text-danger mr-3" href="/">
            <i className="icofont-rounded-left"></i>
          </a>
          Add parking space
        </h5>
      </div>
      <div className="fixed-bottom payment-borrad shadow bg-white m-3 rounded-1 p-3">
        <div className="d-flex small">
          <form className="w-100" action="javascript:;">
            <div className="form-group mb-3">
              <div className="d-flex align-items-start">
                <label className="mb-1 small text-muted">Parking Slot</label>
              </div>
              <input
                className="form-control form-control-sm"
                placeholder="Enter the parking slot"
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-danger btn-block"
              data-toggle="modal"
              data-target="#successAddParking"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div
        className="modal fade"
        id="successAddParking"
        data-backdrop="static"
        tabIndex="-1"
        data-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content mx-4 rounded-2">
            <div className="modal-header d-none"></div>
            <div className="modal-body text-center py-4">
              <img src="/img/valid.png" className="img-fluid mb-2"></img>
              <h5 className="font-weight-normal">Parking Slot Added!</h5>
              <p className="mb-4">The parking slot has been added</p>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddParkingSpace;
