import { useState } from "react";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import ParkModal from "./ParkModal";

function Home() {
  const { currentUser } = useSelector((state) => state.username);
  const [spaces, setSpaces] = useState([30]);
  console.log(currentUser);

  const [modalOn, setModalOn] = useState(false);
  return (
    <div className="seat-select padding-bt">
      <div className="p-3 shadow bg-danger danger-nav osahan-home-header">
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <img src="/img/logo.png" className="img-fluid osahan-nav-logo"></img>

          <div className="ml-auto d-flex align-items-center">
            {currentUser ? (
              <>
                <img
                  src="/img/user1.jpg"
                  className="img-fluid rounded-circle"
                ></img>
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
                Search
              </button>
            </form>
          </div>
        </div>
        {/* END HERE */}
      </div>
      <div className="ticket p-3">
        <div className="select-seat row bg-white mx-0 px-3 pt-3 pb-1 mb-3 rounded-1 shadow-sm">
          <div className="col-8 pl-0">
            <div className="d-flex">
              <div className="sold text-center">
                <img
                  src="/img/sold-seat.png"
                  className="img-fluid mb-1"
                ></img>
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
              <div className="checkboxes-seat mt-4 d-flex flex-wrap">
                <ParkModal />
                <ParkModal />
                <ParkModal />
                <ParkModal />
                <ParkModal />

                <button
                  type="button"
                  className="btn check-seat btn-danger small btn-sm rounded mr-2 mb-2"
                  disabled
                >
                  P2
                </button>
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
