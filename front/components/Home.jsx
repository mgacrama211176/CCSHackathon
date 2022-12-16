import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import ParkModal from "./ParkModal";
import axios from "axios";

function Home() {
  const { currentUser } = useSelector((state) => state.username);

  const [slotsData, setSlotData] = useState([]);

  const getAllSlots = async () => {
    try {
      const slots = await axios.get(
        `http://localhost:4000/api/slots/viewSlots`
      );
      setSlotData(slots.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllSlots();
  }, []);

  return (
    <div className="seat-select padding-bt">
      <div className="p-3 shadow bg-danger danger-nav osahan-home-header">
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <img src="/img/logo.png" className="img-fluid osahan-nav-logo"></img>
          <h5 className="ml-2 mt-2 text-white">USPF Vehicle Parking Locator</h5>

          <div className="ml-auto d-flex align-items-center">
            {currentUser ? (
              <>
                <a href="#" data-toggle="dropdown">
                  <img
                    src="/img/user-icon.png"
                    className="img-fluid rounded-circle"
                  ></img>
                </a>
                <div className="dropdown-menu" role="menu">
                  <a href="/" className="dropdown-item">
                    Logout
                  </a>
                </div>
              </>
            ) : (
              <>
                <a href="/login" className="mr-3">
                  <Button className="btn btn-sm btn-light">Login</Button>
                </a>
              </>
            )}
          </div>
        </div>
        <div className="bg-danger px-3 pb-3 mt-4">
          <div className="bg-white rounded-1 p-3 mt-2">
            <form action="#">
              <div className="form-group border-bottom pb-2">
                <label className="mb-2">
                  <span className="icofont-ui-calendar text-danger"></span> Date
                </label>
                <br></br>
                <input
                  className="form-control border-0 p-0"
                  type="date"
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-block osahanbus-btn rounded-1"
              >
                Search Available Parking
              </button>
            </form>
          </div>
        </div>
        {/* END HERE */}
      </div>
      <div className="ticket p-3">
        <div className="select-seat row bg-white mx-0 px-3 pt-3 pb-1 mb-3 rounded-1 shadow-sm">
          <div className="col-12 pl-0 pr-0">
            <div className="d-flex">
              <div className="sold text-center">
                <img src="/img/sold-seat.png" className="img-fluid mb-1"></img>
                <p className="small f-10">Unavailable</p>
              </div>
              <div className="sold text-center mx-3">
                <img
                  src="/img/selected-seat.png"
                  className="img-fluid mb-1"
                ></img>
                <p className="small f-10">Available</p>
              </div>
            </div>
            <div className="select-seat">
              <div className="checkboxes-seat mt-4 d-flex justify-content-center align-items-center flex-wrap">
                {slotsData.map((slot) => (
                  <ParkModal slot={slot} key={slot._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
